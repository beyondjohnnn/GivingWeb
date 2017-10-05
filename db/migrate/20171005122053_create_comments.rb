class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.references :member, index: true, foreigner_key: true
      t.string :comment_author
      t.string :comment_content
      t.string :donation_amount
      t.datetime :comment_date


      t.timestamps
    end
  end
end
