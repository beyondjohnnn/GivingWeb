class CharitiesController < ApplicationController
  def index
    @charities = [ {name: "Reece"}, {name: "Eoghan Leopard"}]
    render :json => @charities
  end
end
