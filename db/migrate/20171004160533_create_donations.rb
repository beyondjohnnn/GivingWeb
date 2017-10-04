class CreateDonations < ActiveRecord::Migration[5.1]
  def change
    create_table :donations do |t|
      t.integer :total
      t.references :user, index: true, foreigner_key: true
      t.references :member, index: true, foreigner_key: true

      t.timestamps
    end
  end
end
