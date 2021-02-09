class Employee
  attr_reader :salary
  def initialize(name, title, salary, boss)
    @name = name
    @title = title
    @salary = salary
    @boss = boss    
  end

  def bonus(multiplier)
    @salary * multiplier
  end
end

class Manager < Employee
  attr_writer :sub_employees
  def initialize(name, title, salary, boss)
    super
    @sub_employees = []
  end

  def bonus(multiplier)
    sum = 0
    @sub_employees.each do |employee|
      sum += employee.salary
    end
    sum * multiplier
  end
end
