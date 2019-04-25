json.array! @campaigns do |campaign|
	json.extract! campaign, :id, :title, :description, :goal, :campaign_end, :user_id
	json.photoUrl url_for(campaign.photo)
end

