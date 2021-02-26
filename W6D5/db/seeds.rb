# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

cat1 = Cat.create!(birth_date: "2015/01/20", color: "Black", name: "Bentley", sex: "M", description: "Sleepy cat.")
cat2 = Cat.create!(birth_date: "2018/11/20", color: "Orange", name: "Bijou", sex: "F", description: "Always following Bentley.")
cat3 = Cat.create!(birth_date: "2000/01/20", color: "White", name: "Dog", sex: "M", description: "Actually a cat.")
cat4 = Cat.create!(birth_date: "1980/01/20", color: "Brown", name: "'Cat'", sex: "M", description: "A cat?")
cat5 = Cat.create!(birth_date: "2021/01/20", color: "Gray", name: "Mug", sex: "F", description: "A cool kitten.")