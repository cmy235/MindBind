class Api::CategoriesController < ApplicationController

  def index
    @categories = Category.all
  end

  def show
    @category = Category.find(params[:id])
  end

  def search
    debugger
    if params[:query].present?
      @categories = User.where('name ~ ?', params[:query])
    else
      @categories = User.none
    end
  end

end
