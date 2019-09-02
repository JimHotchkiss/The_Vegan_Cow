class RecipeSerializer < ActiveModel::Serializer
  attributes :title

  belongs_to :category
end
