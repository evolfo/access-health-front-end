class AddSuccessfulToCampaigns < ActiveRecord::Migration[5.2]
  def change
  	add_column :campaigns, :successful, :boolean
  end
end
