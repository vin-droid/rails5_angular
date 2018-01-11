class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.string :name
      t.text :discription
      t.string :price
      t.string :float

      t.timestamps
    end
  end
end
