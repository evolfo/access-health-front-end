class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name

  has_many :donations
  has_many :campaigns
end
