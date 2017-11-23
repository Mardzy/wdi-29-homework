class CreateCountries < ActiveRecord::Migration[5.1]
  def change
    create_table :countries do |t|
      t.references :continent, foreign_key: true
      t.text :name
      t.text :size
      t.text :population
      t.text :language

      t.timestamps
    end
  end
end
