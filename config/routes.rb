Rails.application.routes.draw do
	resources :registrations
	resources :sessions
	resources :auth
	resources :members
	resources :comments
end
