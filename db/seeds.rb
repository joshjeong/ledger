# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

josh = User.create(name: 'josh', email: 'j', password: 'asdf')
l1 = josh.ledgers.create(item: "Movie", price: 10, note: "Guardians of the Angels", payment_type: "Credit", expenditure:"Leisure")
l2 = josh.ledgers.create(item: "Soda", price: 4, note: "Sprite", payment_type: "Debit", expenditure:"Food")
l3 = josh.ledgers.create(item: "3 Wisemen", price: 9, note: "Someone's Birthday", payment_type: "Cash", expenditure:"Leisure")
l4 = josh.ledgers.create(item: "Hot Dog", price: 6, note: "What's Up Dog", payment_type: "PayPal", expenditure:"Leisure")
l5 = josh.ledgers.create(item: "Game", price: 20, note: "Madden 2015", payment_type: "Venmo", expenditure:"Food")
l6 = josh.ledgers.create(item: "Phone", price: 50, note: "iPhone 6", payment_type: "Credit", expenditure:"Electronic")
l7 = josh.ledgers.create(item: "Rent", price: 100, note: "For month of July", payment_type: "Cash", expenditure:"Housing")
l7 = josh.ledgers.create(item: "Otis", price: 30, note: "Doge", payment_type: "Cash", expenditure:"Other")
l7 = josh.ledgers.create(item: "Car", price: 60, note: "Gas", payment_type: "Cash", expenditure:"Transportation")




