class UsersController < ApplicationController
  def index
    @users = [ {name: "Reece"}, {name: "Eoghan Leopard"}]
    render :json => @users
  end
end
