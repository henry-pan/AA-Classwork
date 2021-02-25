class UpdateUsers < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :name, :username
    remove_column :users, :email
    change_column :users, :username, :string, unique: true
  end
end
