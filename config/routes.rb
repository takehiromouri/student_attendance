Rails.application.routes.draw do
  get 'static_pages/index'

  devise_for :students
  devise_for :admins
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'static_pages#index'

  namespace :admin do 
  	resources :students
  end
end
