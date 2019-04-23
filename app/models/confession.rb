class Confession < ApplicationRecord
    belongs_to :user

    validates :name, :gif_url, presence: true
end
