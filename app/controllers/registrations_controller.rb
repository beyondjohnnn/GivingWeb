class RegistrationsController < ApplicationController
  respond_to :json

  def create
    if(User.exists?(email: params[:email]))
      render json: {response: "user exists"}
    else
      user = User.create({
      	first_name: params[:first_name],
      	last_name: params[:last_name],
      	email: params[:email],
      	password: params[:password]
      })
      render json: token_hash(user)
    end
  end

  def create_charity
    if(Charity.exists?(email: params[:email]))
      render json: {response: "charity exists"}
    else
      charity = Charity.create({
        first_name: params[:first_name],
        last_name: params[:last_name],
        email: params[:email],
        password: params[:password]
      })
      render json: token_hash(charity)
    end
  end

end