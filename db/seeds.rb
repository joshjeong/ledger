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
l3 = josh.ledgers.create(item: "Beers", price: 40, note: "Ryan's Birthday", payment_type: "Cash", expenditure:"Leisure")
l4 = josh.ledgers.create(item: "Football game", price: 200, note: "Raider game with the homies", payment_type: "PayPal", expenditure:"Leisure")
l5 = josh.ledgers.create(item: "Groceries", price: 90, note: "Re-stocking the fridge", payment_type: "Venmo", expenditure:"Food")
l6 = josh.ledgers.create(item: "iPhone 6", price: 400, note: "New cell phone", payment_type: "Credit", expenditure:"Electronic")
l7 = josh.ledgers.create(item: "Rent", price: 500, note: "For month of July", payment_type: "Cash", expenditure:"Housing")
l7 = josh.ledgers.create(item: "Lunch", price: 30, note: "Lunch with Carolyn", payment_type: "Cash", expenditure:"Food")
l7 = josh.ledgers.create(item: "Gas", price: 60, note: "Filled up full tank", payment_type: "Cash", expenditure:"Transportation")




