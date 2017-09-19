class V1::CharitiesController < ApplicationController
  def index
    charities = Charity.all

    render :json => charities.to_json()
  end
end
