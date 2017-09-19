class V1::UsersController < ApplicationController
  def index
    @users = User.all

    render :json => @users, status: :ok
  end

  def create
    @user = User.new( user_params )

    @user.save
    render json: @user, status: :created
  end

  private
  def user_params
    params.require(:user).permit([:first_name, :last_name, :password])
  end
end
