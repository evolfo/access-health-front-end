class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :stripe_uid

  has_many :donations
  has_many :campaigns
end
