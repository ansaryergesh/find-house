class AddUserToHouses < ActiveRecord::Migration[6.0]
  def change
    add_reference :houses, :user, foreign_key: true
  end
end
