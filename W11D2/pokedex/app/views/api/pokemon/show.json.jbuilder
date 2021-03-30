json.pokemon do
  json.extract! @pokemon, :id, :name, :attack, :defense, :poke_type
  json.image_url asset_path("pokemon_snaps/#{@pokemon.image_url}")
end

json.moves do
  json.array! @pokemon.moves, :id, :name
end

json.items do
  json.array! @pokemon.items, :id, :pokemon_id, :name, :price, :happiness
  json.image_url asset_path("assets/#{@pokemon.image_url}")
end