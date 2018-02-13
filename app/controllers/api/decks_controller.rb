class Api::DecksController < ApplicationController

  before_action :require_logged_in

  def create
    @deck = Deck.new(deck_params)
    @deck.author_id = current_user.id

    if @deck.save
      render :show
    else
      render json: @deck.errors.full_messages, status: 422
    end
  end

  def index
    # debugger
    user_decks = current_user.decks
    demo_decks = User.find_by(username: "demoUser").decks
    @decks = user_decks + demo_decks
    # @decks = Deck.all
    # @decks = current_user.decks.concat(User.find_by(username: "demoUser").decks)
    render :index
  end

  def show
    # next steps:
    # onClick of deck in search results should be addOtherUserDeck action
    # @deck = current_user.decks.find(params[:id])
    # addOtherUserDeck adds current_user.id to author_id array
    @deck = Deck.find(params[:id])
    render :show
  end

  def edit
  end

  def destroy
    # should be current_user.decks
    @deck = Deck.find(params[:id])

    if @deck
      @deck.destroy!
      render :show
    else
      render json: @deck.errors.full_messages
    end
  end

  def update
    @deck = current_user.decks.find(params[:id])
    @deck.update(deck_params)
  end

  private

  # category_id will be passed up in permit via a dropdown button

  def deck_params
    params.require(:deck).permit(:title)
  end

end
