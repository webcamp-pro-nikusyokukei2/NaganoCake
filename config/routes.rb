Rails.application.routes.draw do


  root 'public/products#top'

  devise_for :admin, controllers: {
    sessions:      'admin/admin/sessions',
    passwords:     'admin/admin/passwords',
    registrations: 'admin/admin/registrations'
  }

  devise_for :customers, controllers: {
    sessions:      'public/customers/sessions',
    passwords:     'public/customers/passwords',
    registrations: 'public/customers/registrations'
  }

  #admins
  namespace :admin do
    get '/' => 'homes#top'
    resources :products, except: :destroy
    resources :genres, except: [:new, :show, :destroy]
    resources :customers, except: [:new, :create, :destroy]
    resources :orders, except: [:new, :create, :edit, :destroy]
    resources :order_items, only: :update
  end

  #customers
  namespace :public do
    get '/about' => 'products#about'
    resources :products, only: [:index, :show]

    resources :cart_items, except: [:new, :edit, :show]
    delete 'cart_items/detroy_all' => 'cart_items#destroy_all'

    resources :orders, except: [:edit, :destroy]
    post 'orders/confirm' => 'orders#confirm'
    get 'orders/complete' => 'orders#complete'

    resource :customers, only: [:show, :edit, :update]
    get 'customers/cancel' => 'customers#cansel'
    patch 'customers/withdraw' => 'customers#withdraw'

    resources :deliveries, except: [:new, :show]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
