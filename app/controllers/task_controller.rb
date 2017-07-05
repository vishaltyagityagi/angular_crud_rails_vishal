class TaskController < ApplicationController
  def index
  end

  def all
  	render json: Task.all
  end

  def list
  	render json: Task.last
  end

  def delete_task
  	render json: Task.find(params[:id]).destroy
  end
end
