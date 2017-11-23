class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :quantity
  has_many :chefs
end
