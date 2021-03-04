FactoryBot.define do
  factory :user do
    username { Faker::Games::HalfLife.character }
    password { 'password' }

    factory :gordon_freeman do
      username { 'Gordon Freeman' }
    end
  end
end
