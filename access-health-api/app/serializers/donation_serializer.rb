class DonationSerializer < ActiveModel::Serializer
  attributes :id, :amount, :message

  belongs_to :user
end
