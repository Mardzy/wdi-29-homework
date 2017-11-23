class CreateJoinTableChefsItems < ActiveRecord::Migration[5.1]
  def change
    create_join_table :chefs, :items do |t|
      # t.index [:chef_id, :item_id]
      # t.index [:item_id, :chef_id]
    end
  end
end
