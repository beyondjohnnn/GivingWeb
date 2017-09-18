class CharitiesController < ApplicationController
  def index
    @charities = [ {name: "StreetChange"}, {name: "Eoghan wants to become a Leopard"}]
    render :json => @charities
  end
end
