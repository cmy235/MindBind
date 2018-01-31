import React from 'react';
{/*} import CardShowContainer from './card_show_container'; */}
import { FlipCard } from 'react-flop-card';
import { Link } from 'react-router-dom';
import CardFront from './card_front';
import CardBack from './card_back';
import BackButtons from './back_buttons';
import FrontButtons from './front_buttons';
import CircularProgressbar from 'react-circular-progressbar';


class CardShow extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      cards: props.cards,
      back: false,
      mastered: 0
    };
    // this.rankScore = this.rankScore.bind(this);

  }

  getPercentage() {
    let percentage;
    if (this.props.deck) {
      percentage = (this.state.mastered / this.props.deck.cardIds.length);
    } else {
      return 0;
    }
    return percentage;
  }


  rankScore(score) {
    if (score >= 4) {
      this.setState({
        mastered: this.state.mastered + 1
      });
    }
  }

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
                Studying:{"  "}
              </div>
              <div className="current-deck-title">
                {"  "}{this.props ? this.props.deck.title : ""}
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
          <div classname="progress-container">
            <div style={{"width": "150px"}}><CircularProgressbar
              styles={{
                path: { stroke: `rgba(62, 152, 199, ${this.getPercentage()})` },
              }}
              percentage={this.getPercentage()}
              className="progress-circle-bar"/>
          </div>
        </div>
        <div className="mastery-container">
          <div className="card-count">
            {this.state.mastered} {" "}
          </div>
          <div className="cards-mastered">
            Cards <br/> Mastered
          </div>
          { this.props.deck ?
            <div className="card-count">
              {this.props.deck.cardIds.length}
            </div>
            : ""
          }

        <div className="card-count">
          {this.cardsLength} {" "}
        </div>
        <div className="cards-mastered">
          Total <br/>  Cards
        </div>
      </div>
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
              rankScore={() => this.rankScore}
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
