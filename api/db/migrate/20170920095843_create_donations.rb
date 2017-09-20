class CreateDonations < ActiveRecord::Migration[5.1]
  def change
    create_table :donations do |t|
      t.string :comment
      t.decimal :donation_amount
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
