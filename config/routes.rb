Rails.application.routes.draw do
	resources :registrations
	resources :sessions
	resources :auth
	resources :members
	resources :comments
	resources :charities
	post '/sessions/charities', to: 'sessions#create_charity'
	post '/registrations/charities', to: 'registrations#create_charity'
end
