class Api::V1::ChargesController < ApplicationController

    # skip_before_action :authenticate, only: [:new, :create]

    Stripe.api_key = ENV['STRIPE_S_KEY']

    def new
    end

	def create
	  @amount = params[:amount]

	  begin
	    @amount = Float(@amount).round(2)
	  rescue
	    flash[:error] = 'Charge not completed. Please enter a valid amount in USD ($).'
	    redirect_to new_charge_path
	    return
	  end

	  # Donation.create(user_id: params[:ownerId], campaign_id: params[:campaignId], message: params[:message], amount: @amount/100)

	  @amount = (@amount).to_i # Must be an integer!

	  if @amount < 500
	    flash[:error] = 'Charge not completed. Donation amount must be at least $5.'
	    redirect_to new_charge_path
	    return
	  end

	  user = User.find(params[:ownerId])

	  Stripe::Charge.create({
	    amount: @amount,
	    currency: 'usd',
	    source: params[:stripeToken],
	    description: 'Custom donation',
	    transfer_data: {
    	  destination: user.stripe_uid,
  		}
	  })

	  rescue Stripe::CardError => e
	    flash[:error] = e.message
	    redirect_to new_charge_path
	  end
end

