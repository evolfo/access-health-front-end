class CampaignSerializer < ActiveModel::Serializer
  attributes :id, :goal, :ends, :description, :title, :current_amount, :owner, :percent_complete

  has_many :donations
  belongs_to :user

end
