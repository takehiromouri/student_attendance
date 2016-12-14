Rails.application.routes.draw do
  get 'static_pages/index'

  devise_for :admins
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  authenticated :admin do
    root 'admin/students#search', as: :authenticated_root
  end

  root 'static_pages#index'

  namespace :admin do 
  	resources :students do
      resources :memos, only: [:index, :create]
    end

    resources :memos, only: :destroy
    resources :attendance_records, only: [:index, :destroy]       
    get 'search', to: 'students#search'
  end
  
  get 'students/search', to: 'students#search'
  
  resources :attendance_records, only: [:create]

  resources :admin_dashboard, only: :index

  get :admin_setting, to: "admin_settings#edit"
  patch :admin_settings, to: "admin_settings#update"

  post :authentication, to: "authentications#create"

  get 'search', to: 'static_pages#search'   
end
