class ConfessionsController < ApplicationController
<<<<<<< HEAD
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
=======
    before_action :set_confession, only: [:show, :edit, :update, :destroy]
      before_action :authenticate_user!

      def index
        @confessions = Confession.all

        render json: @confessions
      end

      def show
        render json: @confession
      end

      def create
        @confession = current_user.confessions.new(confession_params)

        respond_to do |format|
            if @confession.save
              format.html { redirect_to @confession }
              format.json { render :show, status: :created, location: @confession }
            else
              format.html { render :new }
              format.json { render json: @confession.errors, status: :unprocessable_entity }
            end
          end
      end

      def update
        if @confession.update(apartment_params)
          render json: @confession
        else
          render json: @confession.errors, status: :unprocessable_entity
        end
      end

      def destroy
        @confession.destroy
      end

      private
        # Use callbacks to share common setup or constraints between actions.
        def set_confession
          @confession = Confession.find(params[:id])
        end

        # Only allow a trusted parameter "white list" through.
        def confession_params
          params.require(:confession).permit(:user_id, :name, :gif_url)
        end
    end
>>>>>>> master
