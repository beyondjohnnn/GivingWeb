class CharitiesController < ApplicationController

  def index
    render json: Charity.all
  end
end
