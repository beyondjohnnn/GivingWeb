class V1::UsersController < ApplicationController
  def index
    @users = Users.all

    render :json => @users, status: :ok
  end
end
