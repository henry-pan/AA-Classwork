# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Todo.destroy_all
todo1 = Todo.create!(title: "First todo", body: "A lot of things.", done: false)
todo2 = Todo.create!(title: "Second todo", body: "Buy dog", done: false)
todo3 = Todo.create!(title: "Third todo", body: "Buy shampoo", done: false)
todo4 = Todo.create!(title: "Wash dog", body: "With shampoo", done: false)