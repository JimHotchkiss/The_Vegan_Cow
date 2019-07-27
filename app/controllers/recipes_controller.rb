class RecipesController < ApplicationController


  def index
    @recipes = Recipe.all
  end

  def show
    # Adventually, put in helper method
    @recipe = Recipe.find(params[:id])
  end

  def new
  end

  def update
  end

  def delete
  end
end
