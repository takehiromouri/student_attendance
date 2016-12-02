Rails.application.routes.draw do
  get 'static_pages/index'

  devise_for :admins
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  authenticated :admin do
    root 'admin/students#index', as: :authenticated_root
  end

  root 'static_pages#index'

  namespace :admin do 
  	resources :students
  end

  resources :students

  get 'search', to: 'static_pages#search' 
end
