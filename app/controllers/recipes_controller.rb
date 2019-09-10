class RecipesController < ApplicationController
  before_action :set_recipe
  def index
    @recipes = Recipe.all
    respond_to do |f|
      f.html
      f.json {render json: @recipes}
    end
  end

  def show
    respond_to do |f|
      f.html
      f.json {render json: @recipe}
    end
  end

  def new
    @recipe = Recipe.new
    @categories = Category.all
  end

  def create
    @recipe = Recipe.new
    @recipe.title = params["title"]
    @recipe.description = params["description"]
    @recipe.instructions = params["instructions"]
    @recipe.category_id = params["category"].to_i

    debugger
  end

  def update
  end

  def delete
  end

  protected

    def set_recipe
      @recipe = Recipe.find_by_id(params[:id])
    end
end
