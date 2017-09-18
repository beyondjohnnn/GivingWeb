class V1::CharitiesController < ApplicationController
  def index
    @charities = Charities.all

    render :json => @charities, status: :ok
  end
end
