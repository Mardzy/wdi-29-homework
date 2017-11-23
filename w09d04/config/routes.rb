Rails.application.routes.draw do
  scope :api do
    resources :items
    resources :chefs
    resources :bakeries
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
