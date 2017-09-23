user1 = User.create({first_name: 'Reece', last_name: 'Jones', email: 'r@j.com', password: '123'})
user2 = User.create({first_name: 'Eoghan', last_name: 'Crowley', email: 'e@c.com', password: '123'})
user3 = User.create({first_name: 'Johnny', last_name: 'Watson', email: 'j@w.com', password: '123'})
user1.save
user2.save
user3.save

charities = Charity.create({charity_name: 'StreetChange', password: '123'})
charities.save

donations = Donation.create({comment: 'Good luck mate!', donation_amount: 12.50})
donations.save


# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
