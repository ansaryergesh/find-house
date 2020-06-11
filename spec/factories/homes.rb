FactoryBot.define do
    factory :home do
      name { Faker::Lorem.word }
      price { Faker::Number.number(10) }
      price {Faker::Number.number(10)}
    end
  end