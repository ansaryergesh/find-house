class House < ApplicationRecord


    validates_presence_of :name, :price
end
