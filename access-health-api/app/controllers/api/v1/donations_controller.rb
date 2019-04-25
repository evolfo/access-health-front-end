class Api::V1::DonationsController < ApplicationController
  before_action :find_donation, only: [:show]

  skip_before_action :authorized, only: [:index, :create]

  def index
  	@donations = Donation.all
  	render json: @donations
  end

  def show
  	render json: @donation
  end

  def create
  	@donation = Donation.create(donation_params)
  	if @donation.valid?
  	  render json: { donation: DonationSerializer.new(@donation) }, status: :created
  	else
  	  render json: { errors: @donation.errors.full_messages }, status: :unprocessible_entity
  	end
  end

  private

  def donation_params
  	params.require(:donation).permit(:amount, :user_id, :campaign_id, :message)
  end

  def find_donation
  	@donation = Donation.find(params[:id])
  end

end
