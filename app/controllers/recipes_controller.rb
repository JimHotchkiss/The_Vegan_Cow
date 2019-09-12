class RecipesController < ApplicationController
  before_action :set_recipe
  def index
    @recipes = Recipe.all
    respond_to do |f|
      #f.html
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
    @recipe = Recipe.create(recipe_params)
      if @recipe
        render json: @recipe, status: 201
      else
        render :action => :new
      end
  end

  def update
  end

  def delete
  end

  private

    def recipe_params
      params.require(:recipe).permit(:title, :description, :instructions, :category_id)
    end

  protected

    def set_recipe
      @recipe = Recipe.find_by_id(params[:id])
    end
end
