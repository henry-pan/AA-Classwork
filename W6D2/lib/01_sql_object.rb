require_relative 'db_connection'
require 'active_support/inflector'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject
  def self.columns
    cols = []

    @query ||= DBConnection.execute2(<<-SQL)
      SELECT
        *
      FROM
        #{self.table_name}
    SQL

    @query[0].each { |col_name| cols << col_name.to_sym }

    cols
  end

  def self.finalize!
    self.columns.each do |col|
      # getter
      define_method(col) do
        attributes[col]
      end

      # setter
      define_method("#{col}=") do |value|
        attributes[col] = value
      end
    end
  end

  def self.table_name=(table_name)
    @table_name = table_name
  end

  def self.table_name
    @table_name ||= self.to_s.tableize
  end

  def self.all
    result = DBConnection.execute(<<-SQL)
      SELECT
        #{table_name}.*
      FROM
        #{table_name}
    SQL
    parse_all(result)
  end

  def self.parse_all(results)
    results.map { |res| self.new(res) }
  end

  def self.find(id)
    result = DBConnection.execute(<<-SQL, id)
      SELECT
        #{table_name}.*
      FROM
        #{table_name}
      WHERE
        id = ?
    SQL
    parse_all(result).first
  end

  def initialize(params = {})
    params.each do |k, v|
      sym = k.to_sym
      raise "unknown attribute '#{sym}'" unless self.class.columns.include?(sym)
      self.send("#{sym}=", v)
    end
  end

  def attributes
    @attributes ||= {}
  end

  def attribute_values
    # res = self.class.columns.map { |col| self.send(col) }
    # res[1..-1]
    self.attributes.values
  end

  def insert
    col = self.class.columns[1..-1]
    col_names = col.map(&:to_s).join(", ")
    question_marks = (["?"] * col.count).join(", ")

    DBConnection.execute(<<-SQL, *attribute_values)
      INSERT INTO
        #{self.class.table_name} (#{col_names})
      VALUES
        (#{question_marks})
    SQL

    self.id = DBConnection.last_insert_row_id
  end

  def update
    set_line = self.class.columns.map { |attr| "#{attr} = ?" }.join(", ")

    DBConnection.execute(<<-SQL, *attribute_values, id)
      UPDATE
        #{self.class.table_name}
      SET
        #{set_line}
      WHERE
        #{self.class.table_name}.id = ?
    SQL
  end

  def save
    if id.nil?
      insert
    else
      update
    end
  end
end
