Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :tasks, only: %i[index create destroy]
      resources :users, only: %i[show]
      post '/signup', to: 'users#create'
    end
  end
end
