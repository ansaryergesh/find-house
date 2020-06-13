class RemoveRatingFromHouses < ActiveRecord::Migration[6.0]
  def change

    remove_column :houses, :rating, :numeric
  end
end
