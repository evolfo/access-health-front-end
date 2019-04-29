class Api::V1::ChargesController < ApplicationController

    skip_before_action :authenticate, only: [:new]

    Stripe.api_key = Rails.application.credentials.stripe[:secret_key]

    def new
    end

	def create
	  @amount = params[:amount]

	  @amount = @amount.gsub('$', '').gsub(',', '')

	  begin
	    @amount = Float(@amount).round(2)
	  rescue
	    flash[:error] = 'Charge not completed. Please enter a valid amount in USD ($).'
	    redirect_to new_charge_path
	    return
	  end

	  @amount = (@amount * 100).to_i # Must be an integer!

	  if @amount < 500
	    flash[:error] = 'Charge not completed. Donation amount must be at least $5.'
	    redirect_to new_charge_path
	    return
	  end

	  byebug

	  Stripe::Charge.create({
	    amount: @amount,
	    currency: 'usd',
	    source: params[:stripeToken],
	    description: 'Custom donation',
	    transfer_data: {
    	  destination: "{CONNECTED_STRIPE_ACCOUNT_ID}"
  		}
	  })

	  rescue Stripe::CardError => e
	    flash[:error] = e.message
	    redirect_to new_charge_path
	  end
	end
end
