class Bakery < ApplicationRecord
  has_many :chefs
  has_many :items, -> {distinct}, through: :chefs
end
