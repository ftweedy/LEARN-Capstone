Rails.application.routes.draw do
    devise_for :users
    resources :confessions, constraints: ->(request){ !request.format.html? }

    get '*path', to: 'pages#protected', constraints: ->(request){ request.format.html? }
    get "protected", to: "pages#protected", as: :protected
    root to: 'pages#unprotected'
end
