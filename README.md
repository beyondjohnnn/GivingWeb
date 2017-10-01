# Rails backend for GivingWeb_api setup

## Requirments

Ruby on Rails
```sh
gem install rails
```

updates

bundler
```sh
gem install bundler
```

<br>

## Basics setup part 1 Rails

to setup Rails install do
```sh
rails new rails_auth --api -d postgresql
```
which will setup everything and remove the extras required to have rails as a frontend(i.e. removed [assets](rails_removed_assests.md))

<br>
Once your app has been created go into the [Gemfile](rails_auth/Gemfile)
and check out line 12, if line 12 looks like > " gem 'sqlite3' " change it to:
```ruby
# Use postgresql as the database for Active Record
gem 'pg', '~> 0.18'
```
otherwise move onto adding devise for auth and hash out
```ruby
gem 'rack-cors', :require => 'rack/cors'
```
 and add:
```ruby
# devise for auth in rails backend
gem 'devise'
# Request responders for rails to dry up code
gem 'responders'
# JSON Web Tokens to provide Auth between front and back end
gem 'jwt'

```
under "gem 'puma', '~> 3.7'"

<br>

finally run bundle in the [rails directory](rails_auth) on terminal
```sh
rails_auth git:(master) bundle
```
Ok if you have had no errors at this spot then we can move onto the part 2

## Basics setup part 2 Devise table creation

Start with running the devise installer
```sh
rails g devise:install
```

then run
```sh
rails g devise user
```

and create a db
```sh
createdb rails_auth_development
```
which will create out user table ready for db:migrate and a db ready for input
<br>
BUT! before we do that open up the new migrate file in [migrate folder](rails_auth/db/migrate) and add on line 4:

```ruby
t.string :first_name
t.string :last_name
```
and we're ready to db:migrate files
```sh
rails db:migrate
```
this will setup our table Users inside the db with the added setup of first and last name.

<br>

ok next our controller!
make a new file in rails_auth/app/controllers called sessions_controller.rd and add this code:
```ruby
class SessionsController < ApplicationController
  def create
    user = User.where(email: params[:email]).first

    if user&.valid_password?(params[:password])
      render json: user.as_json(only: [:id, :email, :authentication_token]), status: :created
    else###TODO: remove [:id] from 6 when api to react works.
      head(:unauthorized)
    end
  end

  def destroy

  end
end
```
<br>
and secondly we need to setup our routes file, so open [routes](rails_auth/config/routes.rb) and update the code to look like this:
```ruby
Rails.application.routes.draw do
  # devise_for :users
  resources :sessions, only: [:create, :destroy]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
```


now open [seed.rb](rails_auth/db/seeds.rb) and add:
```ruby
@user = User.new(:email => 'test@example.com', :password => 'password', :password_confirmation => 'password')
@user.save
```
to the top of the file, and do the following step:
```sh
rails db:seed
```
this will allow us to have a user already already in the db to work with.

<br>
Now we have the basics up!

### lets test this out!

Start up your rails server with:
```sh
rails s
```
inside your rails app folder

Open up insomnia and put in a 'POST' request to 'http://localhost:3000/sessions', and add the json body of:
```json
{
	"email": "test@example.com", "password": "password"
}
```
If you get a status of 201(created) then everything is working great! now for the next part!

## Setting up User CRUD part 1

current under construction :(
  have used Notflix example to play with controllers but to no avail
