class V1::CharitiesController < ApplicationController
  def index
    charities = Charities.all

    render :json => charities.to_json()
  end
end
