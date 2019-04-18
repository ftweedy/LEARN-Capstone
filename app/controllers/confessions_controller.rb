class ConfessionsController < ApplicationController
  def index
      confessions = Confession.all
      render json: confessions
  end

  def create
      confession = Confession.create(confession_params)
      confessions = Confession.all
        if appartment.valid?
            render json: appartments
        else
            render json: appartment.errors, status: :unprocessable_entity
        end
  end

  def update
      confession = Confession.find(params[:id])
      confession.update(name: params[:name], age: params[:age], enjoys: params[:enjoys])
      confessions = Confession.all
      render json: confessions
  end

  def show
      confession = Confession.find(params[:id])
      render json: confession
  end

  def confession_params
      params.require(:confession).permit(:street_num, :street_name, :city, :postal_code, :state, :country, :mgr_name, :mgr_phone, :mgr_hours, :user_id)
  end
end
