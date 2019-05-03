Rails.application.routes.draw do
  namespace :api do
    namespace :v1, defaults: {format: :json} do
      resources :charges
  	  resources :users, only: [:index, :create]
  	  resources :donations, only: [:index, :create, :show]
  	  resources :campaigns, only: [:index, :create, :show, :update, :destroy]
  	    post '/login', to: 'auth#create'
    	  get '/profile', to: 'users#profile'
    	  get "/oauth/callback", to:'users#stripe_callback'
        post "/charge", to:'charges#create'
        post "/stripe", to:'users#payment_profile'
  	end
  end
end
