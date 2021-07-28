Rails.application.routes.draw do
  devise_for :accounts

  get "/browse", to: "browse#browse", as: :browse
  get "/matches", to: "browse#matches", as: :matches
  post "/approve/:id", to: "browse#approve", as: :approve_user
  post "/decline/:id", to: "browse#decline", as: :decline_user

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'public#home'

end
