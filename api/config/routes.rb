Rails.application.routes.draw do
  # get 'users' => 'users#index'
  # get 'charities' => 'charities#index'
  # get 'signup' => 'signup#index'



  namespace :v1 do
    resources :users
    resources :charities
  end

  get '//*path', to: redirect('/')
  # 'reactapp#index', constraints: ->(request) do !request.xhr? && request.format.html?
  # end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
