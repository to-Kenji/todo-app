module Api
  module V1
    class TasksController < ApplicationController
      before_action :set_current_user

      def index
        tasks = @current_user.tasks.recent
        render json: {
          tasks: tasks
        }, status: :ok
      end

      def create
        task = @current_user.tasks.build(task_params)
        if task.save
          render json: {
            task: task
          }, status: :created
        else
          render json: {}, status: :internal_server_error
        end
      end

      def destroy
        task = @current_user.tasks.find(params[:task_id])
        task.delete
        render json: {
          tasks: @current_user.tasks.recent
        }, status: :ok
      end

      private
      
      def task_params
        params.require(:task).permit(:title)
      end

      def set_current_user
        @current_user = User.find(params[:user_id])
      end

    end
  end
end