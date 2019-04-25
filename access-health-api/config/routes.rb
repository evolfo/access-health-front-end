Rails.application.routes.draw do
  namespace :api do
    namespace :v1, defaults: {format: :json} do
	  resources :users, only: [:index, :create]
	  resources :donations, only: [:index, :create, :show]
	  resources :campaigns, only: [:index, :create, :show, :update, :delete]
	  post '/login', to: 'auth#create'
  	  get '/profile', to: 'users#profile'
  	end
  end
end
