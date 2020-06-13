class User < ApplicationRecord
   has_many :houses, foreign_key: :user_id
   has_many :favourites, foreign_key: :user_id

   validates_presence_of :name, :email, :password_digest
   validates :email, uniqueness: true

   has_secure_password

   def add_favour(event)
      favourites.create(house_id: house.id)
   end

   def cancel_favour(event)
      favourites.find_by(house_id: house.id).destroy
   end

   def favour?(event)
      house.favourites.include?(self)
   end
end
