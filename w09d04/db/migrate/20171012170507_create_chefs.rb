class CreateChefs < ActiveRecord::Migration[5.1]
  def change
    create_table :chefs do |t|
      t.string :name
      t.string :role
      t.references :bakery, foreign_key: true

      t.timestamps
    end
  end
end
