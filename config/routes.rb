Rails.application.routes.draw do
  get 'static_pages/index'

  devise_for :admins
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  authenticated :admin do
    root 'admin/students#search', as: :authenticated_root
  end

  root 'static_pages#index'

  namespace :admin do 
  	resources :students
    get 'search', to: 'students#search'
  end

  resources :students
  
  resources :attendance_records

  resources :admin_dashboard, only: :index

  get :admin_setting, to: "admin_settings#edit"
  patch :admin_settings, to: "admin_settings#update"

  post :authentication, to: "authentications#create"

  get 'search', to: 'static_pages#search'   
end
