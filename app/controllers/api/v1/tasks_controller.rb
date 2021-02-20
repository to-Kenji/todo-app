module Api
  module V1
    class TasksController < ApplicationController
      def index
        tasks = Task.all
        render json: {
          tasks: tasks
        }, status: :ok
      end

      def create
        task = Task.new(task_params)
        if task.save
          render json: {
            task: task
          }, status: :created
        else
          render json: {message: '投稿失敗'}, status: :internal_server_error
        end
      end

      def destroy
        task = Task.find(params[:id])
        task.delete
        render json: {message: 'Deleted'}, status: :ok
      end

      private
      
      def task_params
        params.require(:task).permit(:title)
      end
    end
  end
end