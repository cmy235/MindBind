class Api::CategoriesController < ApplicationController

  def index
    @categories = Category.all
    if params[:query]
      @categories = Category.find(params[:query])
    else
      @categories = Category.all
    end
  end

  def show
    # @category = Category.find(params[:query])
  end

# Api::CategoriesController
  def search
    if params[:query].present?
      @categories = Category.where('UPPER(name) ~ UPPER(?)', params[:query].upcase)
      render template: 'api/categories/index.json'
    else
      render @categories.errors.full_messages
    end
  end

end
