Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :videos, only: [:create, :show, :update, :destroy, :index]
    resources :comments, only: [:create, :update, :destroy]
    resources :likes, only: [:create, :destroy]
  end
end
