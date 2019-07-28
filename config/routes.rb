Rails.application.routes.draw do
  resources :categories

  # Changing welcome#indes => category#index
  root :to => 'categories#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :recipes
end
