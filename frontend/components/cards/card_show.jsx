import React from 'react';
{/*} import CardShowContainer from './card_show_container'; */}
import { FlipCard } from 'react-flop-card';
import { Link } from 'react-router-dom';
import CardFront from './card_front';
import CardBack from './card_back';
import BackButtons from './back_buttons';
import FrontButtons from './front_buttons';

class CardShow extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      cards: props.cards,
      back: false,
      // card: props.currentCard
    };
  }

  // need to pass card as prop to card show container
  // but also will need other cards in that deck's array in order to loop through...
  // remember, you do have access to the params which has the cardId in it
  // from the cardId you can get it's info. Just don't forget to use withRouter inside of
  // your CardShowContainer

  render(){
    debugger
    return(
      <div className="card-show-container">
        <div className="personal">
          <ul>
            <li>
              <a href="https://github.com/cmy235"
                target="_blank">
                <i class="fa fa-github-square fa-4x"  aria-hidden="true">
                </i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/connor-yanz-16a37729/"
                target="_blank">
                <i class="fa fa-linkedin-square fa-4x" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="https://medium.com/@connor.yanz"
                target="_blank">
                <i class="fa fa-medium fa-4x" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="progress">
          <section>
            <div className="section-title">
              <div className="study-title">
                Studying:
              </div>
              <div className="current-deck-title">
                {this.props ? this.props.deck.title : ""}
              </div>
            </div>
          </section>
          <Link to={`/decks/${this.props.deck.id}`}>
            <button className="done-button">
              <i class="fa fa-chevron-left" aria-hidden="true"></i>
              <div className="done">
                Done
              </div>
            </button>
          </Link>
        </div>

        <div className="flashcard-container">
          { this.props.deck ?
            <div className="card-list-array">
              {this.props.deck.cardIds.indexOf(this.props.currentCard.id) + 1}
              {" "} of {" "}
              {this.props.deck.cardIds.length}
            </div>
            : ""
          }
          <aside>
            <FlipCard width={"100%"} height={"100%"}
              onClick={() => this.setState({ back: !this.state.back })}
              frontChild={<CardFront front={this.props.currentCard ? this.props.currentCard.front : ""} />}
              backChild={<CardBack
                back={this.props.currentCard ? this.props.currentCard.back : ""}
                />}
                flipped={this.state.back}
                />
            </aside>

            <div className="bottom-buttons">
              { this.state.back ?
                <BackButtons
                  flipBack={() => this.setState({ back: !this.state.back })}
                  currentCard={this.props.deck ? this.props.currentCard : ""}
                  deck={this.props.deck ? this.props.deck : ""}
                  index={this.props.deck ? this.props.deck.cardIds.indexOf(this.props.currentCard.id) : 0}
                  length={this.props.deck ? this.props.deck.cardIds.length : ""}/>
                :
                <FrontButtons />
              }
            </div>
          </div>
        </div>
      );
    }
  }

  export default CardShow;

  {/* inside flashcard container above

    <FlipCard width={"50%"} height={"50%"}
    onClick={() => this.setState({ back: !this.state.back })}
    frontChild={<CardFront question={card.front} />}
    backChild={<CardBack answer={card.back} />}
    flipped={this.state.back}
    />

    <div className="card-text">
    <div class="card-front">
    { card ? <CardFront front={card.front}/> : "" }
    </div>
    <div class="card-back">
    { card ? <CardBack back={card.back}/> : "" }
    </div>
    </div>



    ALSO:  add link


    */}
