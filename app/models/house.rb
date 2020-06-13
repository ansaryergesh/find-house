class House < ApplicationRecord
    belongs_to :user
    has_many :favourites, foreign_key: :user_id
    validates_presence_of :name, :price
end
