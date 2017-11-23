
[Bakery, Chef, Item].each do |model|
  ActiveRecord::Base.connection.execute("TRUNCATE #{model.table_name} RESTART IDENTITY CASCADE")
end

[{
  name: "Crosstown Doughnuts",
  location: "Brick Lane"
  }, {
  name: "Beigel Bake",
  location: "Brick Lane"
  }, {
  name: "Cutter and Squidge",
  location: "Soho"
  }].each do |bakery|
    Bakery.create!(bakery)
  end
  # :name, :price, :year, :vineyard, :description
[{
  name: "Donnie",
  role: "Doughnuts",
  bakery_id: 1
  },{
  name: "Barbara",
  role: "Sandwiches",
  bakery_id: 2
  }, {
  name: "Blanche",
  role: "Choux",
  bakery_id: 3
  }].each do |chef|
  Chef.create!(chef)
  end
  [{
    name: "Canadian Maple",
    quantity: 13,
    price: 1,
  }, {
    name: "Salt Beef",
    quantity: 2,
    price: 3.75,
  }, {
    name: "Apple Carame Biskie",
    quantity: 6,
    price: 10,
  } ].each do |item|
      Item.create!(item)
    end
