class Donation < ApplicationRecord
  belongs_to :user
  belongs_to :campaign

  after_create :change_sucessful_status

  def change_sucessful_status
  	if campaign.current_amount >= campaign.goal
      campaign.update(successful: true)
    end
  end

  def campaign_title
  	campaign.title
  end

  def campaign_owner
  	campaign.user.first_name + ' ' + campaign.user.last_name
  end
end
