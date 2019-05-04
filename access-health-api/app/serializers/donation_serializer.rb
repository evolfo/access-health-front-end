class DonationSerializer < ActiveModel::Serializer
  attributes :amount, :message, :campaign_title, :campaign_owner, :created_at

  belongs_to :user
end
