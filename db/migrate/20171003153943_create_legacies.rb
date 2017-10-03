class CreateLegacies < ActiveRecord::Migration[5.1]
  def change
    create_table :legacies do |t|
      t.references :member, index: true, foreigner_key: true
      t.integer :legacy_sql_id, null: true
    end
  end
end
