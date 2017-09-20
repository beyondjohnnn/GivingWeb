class V1::DonationsController < ApplicationController
  def index
    @donations = Donation.all

    render :json => @donations.to_json(), status: :ok
  end

  def create
    @donation = Donation.new( donation_params )

    @donation.save
    render json: @donation, status: :created
  end

  def destroy
    @donation = Donation.where( id: params[:id] ).first
    if @donation.destroy
      head(:ok)
    else
      head(:uprocessable_entity)
    end

  end

  private
  def donation_params
    params.require(:donation).permit([:donation_from, :donation_amount])
  end
end
