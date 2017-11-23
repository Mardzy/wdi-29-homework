class ChefSerializer < ActiveModel::Serializer
  attributes :id, :name, :role
  has_one :bakery
  has_many :items
end
