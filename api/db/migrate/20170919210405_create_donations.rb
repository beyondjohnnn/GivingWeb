class CreateDonations < ActiveRecord::Migration[5.1]
  def change
    create_table :donations do |t|
      t.string :donation_from
      t.decimal :donation_amount
      t.belongs_to :user || :charity, foreign_key: true

      t.timestamps
    end
  end
end
#TODO: take out :charity on line 6
