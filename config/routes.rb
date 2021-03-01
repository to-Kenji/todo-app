Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: %i[show]
      post '/signup', to: 'users#create'
      get '/users/:user_id/tasks', to: 'tasks#index'
      post '/users/:user_id/tasks', to: 'tasks#create'
      delete '/users/:user_id/tasks/:task_id', to: 'tasks#destroy'
    end
  end
end
