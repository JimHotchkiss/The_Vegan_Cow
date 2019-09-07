class CategoriesController < ApplicationController

  def index
    @categories = Category.all
    respond_to do |f|
      f.html
      f.json {render json: @categories}
    end
  end

  def show
    @category_recipes = Category.find(params[:id])
    respond_to do |f|
      f.html
      f.json {render json: @category_recipes}
    end
  end


end
