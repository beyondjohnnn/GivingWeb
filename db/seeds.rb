# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.delete_all
#
# User.create(
# 	first_name: 'Eoghan',
# 	last_name: 'Crowley',
# 	email: 'eoghanscrowley@gmail.com',
# 	password: 'abcdef',
# 	password_confirmation: 'abcdef'
# )
# User.create(
# 	first_name: 'Reece',
# 	last_name: 'Jones',
# 	email: 'reece.c.jones@gmail.com',
# 	password: '123456',
# 	password_confirmation: '123456'
# )
# User.create(
# 	first_name: 'Johnny',
# 	last_name: 'Watson',
# 	email: 'johnny@streetchange.org.uk',
# 	password: 'abcdef',
# 	password_confirmation: 'abcdef'
# )
#
# Charity.delete_all
#
# Charity.create(
# 	name: 'Streetwork',
# 	description: 'For the last 25 years, Streetwork has been supporting Edinburgh’s most vulnerable and disadvantaged communities, with a particular emphasis on those with multiple complex needs who have experienced, or are at risk of homelessness. They recognise that people who have faced adversity throughout their lives often find it hard to build and maintain healthy relationships, resulting in their exclusion from relationships with people and services. This isolation frequently results in long term substance use, mental ill health and job instability. Streetwork therefore delivers, and continues to develop, relationship-focused services that aim to work in partnership with individuals in need — basing their efforts on respect and trust. Streetwork helps people find their own solution, with a ‘your terms, your pace, your place’ mindset.\n\nIn addition, to building based services, free phone line support, group work and individual support sessions, Streetwork also takes its services to the streets with daily, walking community outreach. In this way, Streetwork is committed to supporting people in making sustainable, positive, informed decisions to help them achieve a life off the streets.',
# 	email: 'streetwork@streetwork.com',
# 	password: 'abcdef',
# 	password_confirmation: 'abcdef'
# )
#
# Account.delete_all
#
# Account.create(
# 	name: 'main_account',
# 	amount: 150
# )
# Account.create(
# 	name: 'second_account',
# 	amount: 120
# )
# Account.create(
# 	name: 'backup_account',
# 	amount: 50
# )

Member.delete_all
Legacy.delete_all
# puts MemberMigration.build_member_hashes
members = MemberMigration.build_member_hashes

members.each do |member|
	dbMember = Member.create(member[:member_data])
	Legacy.create({member_id: dbMember.id, legacy_sql_id: member[:legacy_sql_id]})
end
