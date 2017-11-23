class BakerySerializer < ActiveModel::Serializer
  attributes :id, :name, :location
  has_many :items
  has_many :chefs
end
