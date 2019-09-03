class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :instructions

  belongs_to :category
end
