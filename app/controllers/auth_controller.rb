class AuthController < ApplicationController
  before_action :authenticate_request!

  def index
   	render json: {return: "valid user has access"}
  end

end