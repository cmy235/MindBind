Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :user, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :decks, only: [:create, :show, :index, :edit, :destroy]
  end

  root "static_pages#root"
end
