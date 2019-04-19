Rails.application.routes.draw do
    devise_for :users
    # devise_scope :user do
    #   delete "/users/sign_out" => "devise/sessions#destroy"
    # end
    resources :confessions, constraints: ->(request){ !request.format.html? }

    authenticated :user do
      # mount_devise_token_auth_for 'User', at: 'auth'
      get '*path', to: 'pages#protected', constraints: ->(request){ request.format.html? }
      get "protected", to: "pages#protected", as: :protected
      root to: 'pages#protected'
    end
    root to: 'pages#unprotected'
end
