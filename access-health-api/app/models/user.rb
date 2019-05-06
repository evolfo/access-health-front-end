class User < ApplicationRecord
  has_secure_password
  has_many :donations
  has_many :campaigns
  # has_many :received_donations, through: :campaigns, source: :donations

  validates :first_name, format: { with: /\A[a-zA-Z0-9\s]+\z/i, message: "can only contain letters and numbers." }
  validates :last_name, format: { with: /\A[a-zA-Z0-9\s]+\z/i, message: "can only contain letters and numbers." }
  validates_length_of :first_name, maximum: 15
  validates_length_of :last_name, maximum: 15
  validates :email, uniqueness: :true
end
