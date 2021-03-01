module Api
  module V1
    class UsersController < ApplicationController
      def create
        user = User.new(user_params)
        if user.save
          render json: {
            user: user
          }, status: :created
        else
          render json: {}, status: :internal_server_error
        end
      end

      def show
        user = User.find_by(uid: params[:id])
        if user
          render json: {
            user: user
          }, status: :ok
        else
          render json: {}, status: :no_content
        end
      end
      
      private

      def user_params
        params.require(:user).permit(:email, :uid)
      end
    end
  end
end