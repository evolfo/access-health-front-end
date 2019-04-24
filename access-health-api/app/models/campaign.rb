class Campaign < ApplicationRecord
  has_many :donations
  belongs_to :user

  def current_amount
   donations.map { |donation| donation.amount }.sum
  end

  def amount_left_to_fund
  	goal - current_amount
  end

  def percent_complete
  	((current_amount.to_f / goal.to_f) * 100).to_i
  end
end
