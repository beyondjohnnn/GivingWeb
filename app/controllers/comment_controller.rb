class CommentController < ApplicationController

  def index
    render json: Comment.all
  end
end
