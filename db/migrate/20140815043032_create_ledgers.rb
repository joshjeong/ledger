class CreateLedgers < ActiveRecord::Migration
  def change
    create_table :ledgers do |t|
      t.belongs_to :user
      t.string :item
      t.float :price
      t.text :note
      t.string :payment_type

      t.timestamps
    end
  end
end
