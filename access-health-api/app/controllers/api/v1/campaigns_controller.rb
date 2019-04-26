 class Api::V1::CampaignsController < ApplicationController
  before_action :find_campaign, only: [:show, :update]

  skip_before_action :authorized, only: [:create, :update, :index, :show]

  def index
  	@campaigns = Campaign.all
  	render :index
  end

  def show
  	render json: @campaign
  end

  def create
  	@campaign = Campaign.create(campaign_params)
  	if @campaign.valid?
  	  render json: @campaign, status: :created
  	else
  	  render json: { errors: @campaign.errors.full_messages }, status: :unprocessible_entity
  	end
  end

  def update
    @campaign.update(campaign_params)
    if @campaign.valid?
      render json: @campaign
    else
      render json: { errors: @campaign.errors.full_messages }, status: :unprocessible_entity
    end
  end

  private

  def campaign_params
  	params.require(:campaign).permit(:title, :description, :goal, :user_id, :photo)
  end

  def find_campaign
  	@campaign = Campaign.find(params[:id])
  end
end
