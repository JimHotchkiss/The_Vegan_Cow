class CategoriesController < ApplicationController

  def index
    @categories = Category.all
    respond_to do |f|
      f.html
      f.json {render json: @categories}
    end
  end

  def show
    # Make helper_method to do this
    @category_recipes = Category.find(params[:id]).recipes
  end


end
