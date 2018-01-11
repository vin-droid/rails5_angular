Rails.application.routes.draw do
  resources :line_items
  resources :orders
  resources :products
  root 'welcome#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end