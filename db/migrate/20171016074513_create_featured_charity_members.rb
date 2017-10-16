class CreateFeaturedCharityMembers < ActiveRecord::Migration[5.1]
  def change
    create_table :featured_charity_members do |t|
      t.references :charity, index: true, foreigner_key: true

      t.references :member, index: true, foreigner_key: true
      enum position: [one: 1]
      t.references :member, index: true, foreigner_key: true
      enum position: [two: 2]
      t.references :member, index: true, foreigner_key: true
      enum position: [three: 3]

      t.timestamps
    end
  end
end
