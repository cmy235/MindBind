
class CardsController < ApplicationController

  def create
    @card = Card.new(card_params)
    @card.deck_id = Deck.find(params[:deck_id])

    if @card.save
      render json: :index
    else
      render json: @card.errors.full_messages
    end
  end

  def index
    @cards = current_user.decks.find(params[:deck_id])
  end

  def show
    @card = current_user.decks.find_by(params[:id])
  end

  def destroy
    @card = current_user.decks.find(params[:id])
    if @card
      @card.destroy!
      render json: :index
    else
      render json: @card.errors.full_messages
    end
  end

  private

  def card_params
    params.require(:card).permit(:front, :back)
  end

end
