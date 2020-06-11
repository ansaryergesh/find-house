class CreateHouses < ActiveRecord::Migration[6.0]
  def change
    create_table :houses do |t|
      t.string :name
      t.numeric :price
      t.numeric :rating

      t.timestamps
    end
  end
end
