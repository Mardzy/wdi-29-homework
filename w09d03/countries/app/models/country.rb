class Country < ApplicationRecord
  belongs_to :continent
  validates :name, length: { minimum: 0, maximum: 30 }
  validates :size, length: { minimum: 0, maximum: 30 }
  validates :population, length: { minimum: 0, maximum: 30 }
  validates :language, length: { minimum: 2, maximum: 30 }
end
