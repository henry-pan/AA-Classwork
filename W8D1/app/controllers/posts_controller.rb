class PostsController < ApplicationController

  before_action :is_author?, only: [:edit, :update, :destroy]

  def destroy
    @post = Post.find_by(id: params[:id])
    @post.destroy
    redirect_to subs_url
  end

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id
    if @post.save
      redirect_to post_url(@post)
    else
      flash.now[:errors] = @post.errors.full_messages
      render :new
    end
  end

  def new
    @post = Post.new
    render :new
  end

  def edit
    @post = Post.find_by(id: params[:id])
    render :edit
  end

  def show
    @post = Post.find_by(id: params[:id])
    render :show
  end

  def update
    @post = Post.find_by(id: params[:id])
    if @post.update(post_params)
      redirect_to post_url(@post)
    else
      flash.now[:errors] = ["Couldn't update!"]
      render :edit
    end
  end

  private
  def is_author?
    @post = Post.find_by(id: params[:id])
    unless current_user.posts.include?(@post)
      flash[:errors] = ["You are not the author of this post."]
      redirect_to post_url(@post)
    end
  end

  def post_params
    params.require(:post).permit(:title, :url, :content, sub_ids: [])
  end
end
