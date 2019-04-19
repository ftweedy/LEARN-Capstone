class ConfessionsController < ApplicationController
  def index
    confession = Confession.all
  end

  def create
    confession = current_user.confessions.new(confession_params)
  end

  private

  def confession_params
    params.require(:confession).permit(:name, :gif_url)
  end
end
