class Donation < ApplicationRecord
  belongs_to :user
  belongs_to :campaign

  def campaign_title
  	campaign.title
  end

  def campaign_owner
  	campaign.user.first_name + ' ' + campaign.user.last_name
  end
end
