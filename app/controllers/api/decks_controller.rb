
class DecksController < ApplicationController

  before_action :require_logged_in

  def create
    @deck = Deck.new(deck_params)

    if @deck.save
      render json:
    else
      render json: ["Deck needs a title and category"], status: 422
    end
  end

  def index
    @decks = Deck.all
  end

  def show
    @deck = Deck.find(params[:id])
  end

  def edit
  end

  def destroy
    @deck = current_user.decks.find(params[:id])
    @deck.destroy!
  end

  def update
    @deck = current_user.decks.find(params[:id])
    @deck.update(deck_params)
  end

  private

  def deck_params
    params.require(:deck).permit(:title, :author_id, :category_id);
  end

end
