class Chef < ApplicationRecord
  belongs_to :bakery
  has_and_belongs_to_many :items
end
