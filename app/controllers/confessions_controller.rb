class ConfessionsController < ApplicationController
  def index
      confessions = Confession.all
      render json: confessions
  end

  def create
      confession = Confession.create(confession_params)
      confessions = Confession.all
        if confession.valid?
            render json: confessions
        else
            render json: confession.errors, status: :unprocessable_entity
        end
  end

  def update
      confession = Confession.find(params[:id])
      confession.update(name: params[:name])
      confessions = Confession.all
      render json: confessions
  end

  def show
      confession = Confession.find(params[:id])
      render json: confession
  end

  def confession_params
      params.require(:confession).permit(:name)
  end
end
