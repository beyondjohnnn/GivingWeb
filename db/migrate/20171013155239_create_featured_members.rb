class CreateFeaturedMembers < ActiveRecord::Migration[5.1]
  def change
    create_table :featured_members do |t|

      t.references :member, index: true, foreigner_key: true
      t.integer :position

      t.timestamps
    end
  end
end
