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
