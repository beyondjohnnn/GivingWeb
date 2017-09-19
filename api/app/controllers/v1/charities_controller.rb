class V1::CharitiesController < ApplicationController
  def index
    @charities = Charity.all

    render :json => @charities.to_json(), status: :ok
  end

  def create
    @charity = Charity.new( charity_params )

    @charity.save
    render json: @charity, status: :created
  end

  def method_name

  end

  private
  def charity_params
    params.require(:charity).permit([:charity_name, :password])
  end
end
