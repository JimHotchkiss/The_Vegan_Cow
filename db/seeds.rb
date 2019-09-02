# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# categories = Category.create([{name: 'Breakfast'}, {name: 'Lunch'}, {name: 'Dinner'}, {name: 'Sides and Salads'}, {name: 'Dessert'}])

# Developement Seed recipes
# recipes = Recipe.create([{title: 'Spinach Potpie', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni fuga, inventore nihil totam nobis saepe corporis deserunt, sapiente molestiae dignissimos blanditiis eum. Officia at, nemo repellat magni deserunt dicta explicabo', category_id: 1}, {title: 'Zuccini Pizza', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni fuga, inventore nihil totam nobis saepe corporis deserunt, sapiente molestiae dignissimos blanditiis eum. Officia at, nemo repellat magni deserunt dicta explicabo', category_id: 2}, {title: 'Lental Pasta Salad', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni fuga, inventore nihil totam nobis saepe corporis deserunt, sapiente molestiae dignissimos blanditiis eum. Officia at, nemo repellat magni deserunt dicta explicabo', category_id: 3}])



categories = Category.create([{name: 'Breakfast'},{name: 'Lunch'}, {name: 'Dinner'}, {name: 'Salad and Sides'}, {name: 'Desserts'}])

# recipes = Recipe.create([{title: 'Kale Scramble', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni fuga, inventore nihil totam nobis saepe corporis deserunt, sapiente molestiae dignissimos blanditiis eum. Officia at, nemo repellat magni deserunt dicta explicabo', category_id: 4}, {title: 'Quinoa', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni fuga, inventore nihil totam nobis saepe corporis deserunt, sapiente molestiae dignissimos blanditiis eum. Officia at, nemo repellat magni deserunt dicta explicabo', category_id: 5}, {title: 'No Milk Ice Cream', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni fuga, inventore nihil totam nobis saepe corporis deserunt, sapiente molestiae dignissimos blanditiis eum. Officia at, nemo repellat magni deserunt dicta explicabo', category_id: 6}])
50.times do
  Recipe.create(
    title: Faker::Food.dish,
    instructions: Faker::Food.description,
    description: Faker::Food.description,
    category_id: Faker::Number.between(from: 1, to: 5)
  )
end
