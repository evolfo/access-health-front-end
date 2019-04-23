class Campaign < ApplicationRecord
  has_many :donations
  belongs_to :user
end
