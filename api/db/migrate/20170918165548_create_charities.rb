class CreateCharities < ActiveRecord::Migration[5.1]
  def change
    create_table :charities do |t|
      t.string :chaity_name
      t.string :password

      t.timestamps
    end
  end
end
