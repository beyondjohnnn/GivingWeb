class DonationsController < ApplicationController

    def index
      render json: Donation.all
    end
 end
