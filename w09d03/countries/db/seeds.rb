# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
continent1 = Continent.create!(name: "North America")
continent2 = Continent.create!(name: "South America")
continent3 = Continent.create!(name: "Australia")


continent1.countries.create!(name: "Canada", size: "really big", population: "35000000 people", language: "English")

continent1.countries.create!(name: "Mexico", size: "skinny", population: "65000000 people", language: "Spanish")

continent1.countries.create!(name: "United States of America", size: "smaller than Canada", population: "360000000 people", language: "Murican")

continent2.countries.create!(name: "Brazil", size: "quite big", population: "90000000 people", language: "Portuguese")

continent2.countries.create!(name: "Argentina", size: " big", population: "30000000 people", language: "Spanish")
continent3.countries.create!(name: "Australia", size: "a big island", population: "35000000 people", language: "Australian")
continent3.countries.create!(name: "New Zealand", size: "small few small islands", population: "1000000 people", language: "Kiwi")
