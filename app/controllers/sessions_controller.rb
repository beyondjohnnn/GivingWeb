class SessionsController < ApplicationController
  respond_to :json

  def create
    user = User.find_for_database_authentication(email: params[:email])
    if user.valid_password?(params[:password])
      render json: token_hash(user)
    else
      render json: {errors: ['Invalid Username/Password']}, status: :unauthorized
    end
  end

  def create_charity
    charity = Charity.find_for_database_authentication(email: params[:email])
    if charity.valid_password?(params[:password])
      render json: token_hash(charity)
    else
      render json: {errors: ['Invalid Username/Password']}, status: :unauthorized
    end
  end

end