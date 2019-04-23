class CreateDonations < ActiveRecord::Migration[5.2]
  def change
    create_table :donations do |t|
      t.integer :amount
      t.belongs_to :user, foreign_key: true
      t.belongs_to :campaign, foreign_key: true
      t.string :message

      t.timestamps
    end
  end
end
