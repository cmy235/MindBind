import React from 'react';
import CardShowContainer from './card_show_container';
import { FlipCard } from 'react-flop-card';
import CardFront from './card_front';
import CardBack from './card_back';

class CardShow extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      cards: props.cards,
      back: false,
      card: props.currentCard
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
            section section progress section
            <button className="done-button">Done</button>
          </section>
        </div>

        <div className="flashcard-container">
          <aside>
            <FlipCard width={"100%"} height={"100%"}
              onClick={() => this.setState({ back: !this.state.back })}
              frontChild={<CardFront front={this.state.card ? this.state.card.front : ""} />}
              backChild={<CardBack back={this.state.card ? this.state.card.back : ""} />}
              flipped={this.state.back}
              />
            <button onClick={""}>
            </button>
          </aside>
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


  */}
