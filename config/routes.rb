Rails.application.routes.draw do
    resources :confessions do 
      member do
        put :upvote
        put :downvote
      end
    end #constraints: ->(request){ !request.format.html? }
    devise_for :users

    authenticated :user do
      get '*path', to: 'pages#protected', constraints: ->(request){ request.format.html? }
      get "protected", to: "pages#protected", as: :protected
      root to: 'pages#protected'
    end

    root to: 'pages#unprotected'
end
