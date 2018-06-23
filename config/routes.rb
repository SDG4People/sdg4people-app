Rails.application.routes.draw do
  root 'pages#root'

  get '/reports' => 'reports#index'
  get '*path' => 'pages#root', via: :all
  post '/reports' => 'reports#create'
end
