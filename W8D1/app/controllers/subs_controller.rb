class SubsController < ApplicationController

  before_action :is_moderator?, only: [:edit, :update]

  def index
    @subs = Sub.all
    render :index
  end

  def create
    @sub = Sub.new(sub_params)
    @sub.moderator_id = current_user.id
    if @sub.save
      redirect_to sub_url(@sub)
    else
      flash.now[:errors] = @sub.errors.full_messages
      render :new
    end
  end

  def new
    @sub = Sub.new
    render :new
  end

  def edit
    @sub = Sub.find_by(id: params[:id])
    render :edit
  end

  def show
    @sub = Sub.find_by(id: params[:id])
    render :show
  end

  def update
    @sub = Sub.find_by(id: params[:id])
    if @sub.update(sub_params)
      redirect_to sub_url(@sub)
    else
      flash.now[:errors] = ["Couldn't update!"]
      render :edit
    end
  end

  private
  def is_moderator?
    @sub = Sub.find_by(id: params[:id])
    unless current_user.subs.include?(@sub)
      flash[:errors] = ["You are not the moderator of this sub."]
      redirect_to sub_url(@sub)
    end
  end

  def sub_params
    params.require(:sub).permit(:title, :description)
  end


end