
class AccountsController < ApplicationController
  before_action :authenticate_request!

    def index
      render json: Account.all
    end
 end