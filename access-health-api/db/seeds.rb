# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.destroy_all
# Donation.destroy_all
# Campaign.destroy_all

User.create(first_name: 'ang', last_name: 'spa', email: 'ang@gmail.com', password: "hi")
User.create(first_name: 'ange', last_name: 'spam', email: 'ange@gmail.com', password: 'yo')
User.create(first_name: 'brad', last_name: 'slammea', email: 'bardeion@gmail.com', password: 'yo')
User.create(first_name: 'latri', last_name: 'pottt', email: 'pottt@gmail.com', password: 'yo')
User.create(first_name: 'discus', last_name: 'sion', email: 'sion@ymail.com', password: 'yo')
User.create(first_name: 'mneear', last_name: 'verdunn', email: 'ma1349da@hotmail.com', password: 'yo')

Campaign.create(title: 'Curing cancer', description: Faker::Lorem.sentence(100), user_id: 1, goal: 10000)
Campaign.create(title: 'all diseases are gone', description: Faker::Lorem.sentence(100), user_id: 2, goal: 5000)
Campaign.create(title: 'broke mah bone', description: Faker::Lorem.sentence(100), user_id: 3, goal: 3000)
Campaign.create(title: 'mental health bills', description: Faker::Lorem.sentence(100), user_id: 4, goal: 2000)
Campaign.create(title: 'got theh rabies', description: Faker::Lorem.sentence(100), user_id: 5, goal: 1000)

Donation.create(amount: 100, message: 'hi', user_id: 1, campaign_id: 2)
Donation.create(amount: 200, message: 'yo', user_id: 2, campaign_id: 3)
Donation.create(amount: 50, message: 'plz get better', user_id: 3, campaign_id: 2)
Donation.create(amount: 73, message: 'do get well', user_id: 4, campaign_id: 1)
Donation.create(amount: 2009, message: 'i hhope it works out', user_id: 5, campaign_id: 1)
Donation.create(amount: 323, message: 'nice ', user_id: 6, campaign_id: 3)
Donation.create(amount: 322, message: 'well job', user_id: 3, campaign_id: 4)
Donation.create(amount: 633, message: 'hiyo', user_id: 1, campaign_id: 1)