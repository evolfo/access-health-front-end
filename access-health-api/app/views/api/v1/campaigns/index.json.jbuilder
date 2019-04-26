json.array! @campaigns do |campaign|
	json.extract! campaign, :id, :title, :description, :goal, :campaign_end, :user_id, :current_amount, :ends, :percent_complete, :amount_left_to_fund
	json.photoUrl url_for(campaign.photo)
end

