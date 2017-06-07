class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
      t.string :name
      t.decimal :price, :precision => 8, :scale => 2
      t.string :color
      t.string :size
      t.attachment :image
      t.timestamps
    end
  end
end
