# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
10.times do |i|
  Product.create(
    name: "Product #{i}",
    price: rand(100),
    color: ["red", "blue", "green"].sample,
    size: ["XS", "S", "M", "L", "XL"].sample,
    image: File.new("#{Rails.root}/app/assets/images/example.png"),
  )
end
