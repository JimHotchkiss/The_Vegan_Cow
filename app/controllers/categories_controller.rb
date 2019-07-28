class CategoriesController < ApplicationController

  def index
    @categories = Category.all
  end

  def show
    # Make helper_method to do this
    @category_recipes = Category.find(params[:id]).recipes
  end


end
