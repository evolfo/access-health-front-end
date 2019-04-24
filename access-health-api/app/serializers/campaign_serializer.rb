class CampaignSerializer < ActiveModel::Serializer
  attributes :id, :goal, :description, :title, :current_amount, :owner, :percent_complete

  has_many :donations

  def owner
  	object.user.first_name + ' ' + object.user.last_name
  end
end
