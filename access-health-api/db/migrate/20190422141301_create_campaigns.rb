class CreateCampaigns < ActiveRecord::Migration[5.2]
  def change
    create_table :campaigns do |t|
      t.string :title
      t.string :description
      t.integer :goal
      t.belongs_to :user, foreign_key: true
      t.datetime :campaign_end

      t.timestamps

    end
  end
end
