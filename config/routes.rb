Rails.application.routes.draw do

  get 'dashboard/index'

  root 'dashboard#index'

  namespace :api do
    namespace :v1 do
      resources :products, only: [:index, :create, :destroy, :update] do
        get :search, on: :collection
      end
    end
  end

end
