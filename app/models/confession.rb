class Confession < ApplicationRecord
    belongs_to :user

    validates :name, :gif_url, presence: true

    def upvote!
        increment! :counter
    end

    def downvote!
        decrement! :counter
    end
end


