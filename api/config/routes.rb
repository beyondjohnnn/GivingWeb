Rails.application.routes.draw do
  get 'users' => 'users#index'
  get 'charities' => 'charities#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
