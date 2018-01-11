class CreateOrders < ActiveRecord::Migration[5.1]
  def change
    create_table :orders do |t|
      t.string :status
      t.string :amount
      t.string :float

      t.timestamps
    end
  end
end
