
class Api::DecksController < ApplicationController

  before_action :require_logged_in

  def create
    @deck = Deck.new(deck_params)

    if @deck.save
      render :show
    else
      render json: @deck.errors.full_messages, status: 422
    end
  end

  def index
    @decks = current_user.decks.all
    render :index
  end

  def show
    @deck = Deck.find(params[:id])
    render :show
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
    params.require(:deck).permit(:title);
  end

end
