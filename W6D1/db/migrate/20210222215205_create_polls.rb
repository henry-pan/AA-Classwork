class CreatePolls < ActiveRecord::Migration[5.2]
  def change
    create_table :polls do |t|
      t.string :author, null: false
      t.string :title, null: false
    end
  end
end
