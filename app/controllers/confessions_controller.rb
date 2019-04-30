class ConfessionsController < ActionController::API
  before_action :set_confession, only: [:show, :edit, :update, :destroy]
  # before_action :authenticate_user!, except: :index

    def index
      confessions = Confession.all.order("created_at DESC")

      render json: confessions
    end

    def show
      render json: confession
    end

    def create
      # for testing purposes
      # confession = Confession.create(confession_params)

      # for official execution
      confession = current_user.confessions.create(confession_params)

      if confession.save
        render json: confession
      else
        render json: confession.errors.full_messages
      end
    end

    def upvote
      confession = Confession.find(params[:id])
      confession.upvote!
      render json: confession
    end

    def downvote
      confession = Confession.find(params[:id])
      confession.downvote!
      render json: confession
    end

    def update
      confession = Confession.find(params[:id])
      if confession.update(confession_params)
        render json: confession
      else
        render json: confession.errors, status: :unprocessable_entity
      end
    end

    def destroy
      confession = Confession.find(params[:id])
      if confession.destroy
        render json: Confession.all
      end
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_confession
        confession = Confession.find(params[:id])
      end

      # Only allow a trusted parameter "white list" through.
      def confession_params
        params.require(:confession).permit(:name, :gif_url, :counter)
      end
  end
