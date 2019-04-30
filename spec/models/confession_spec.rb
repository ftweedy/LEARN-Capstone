require 'rails_helper'
RSpec.describe Confession, :type => :model do
    it "should allow upvote" do
        confession = Confession.create name: 'name', gif_url: 'url'
        confession.upvote!
        expect(confession.counter).to eq(1)
    end
end