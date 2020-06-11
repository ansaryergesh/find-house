class House < ApplicationRecord
    dependent: :destroy

    validates_presense_of :name, :price
end
