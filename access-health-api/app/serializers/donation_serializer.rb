class DonationSerializer < ActiveModel::Serializer
  attributes :amount, :message, :campaign_title, :campaign_owner

  belongs_to :user
end
