class RecipesController < ApplicationController


  def index
    @recipes = Recipe.all
  end

  def show
    debugger
  end

  def new
  end

  def update
  end

  def delete
  end
end
