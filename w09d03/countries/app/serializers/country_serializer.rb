class CountrySerializer < ActiveModel::Serializer
  attributes :id, :name, :size, :population, :language
  has_one :continent
end
