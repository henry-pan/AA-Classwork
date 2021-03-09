class CommentsController < ApplicationController
  def new
    @comment = Comment.new

    render :new
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      redirect_to post_url(@comment.post)
    else
      flash.now[:errors] = @comment.errors.full_messages
      render :new
    end
  end
  
  def show
    @comment = Comment.find_by(id: params[:id])

    render :show
  end

  private
  def comment_params
    params.require(:comment).permit(:content,:parent_comment_id, :post_id, :author_id)
  end
end
