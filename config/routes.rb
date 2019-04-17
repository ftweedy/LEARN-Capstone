Rails.application.routes.draw do
    devise_for :users

    get '*path', to: 'pages#protected', constraints: ->(request){ request.format.html? }
    root to: 'pages#unprotected'
end
