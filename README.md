# MindBind

MindBind is a learning app which allows you to create decks of flashcards to study.  You can add decks, create and delete card to certain decks, as well as search for categories of decks via the search page. Find the live version [here](https://aa-mindbind.herokuapp.com/#/).

Technologies Used:

Javascript, React, Redux, HTML5 & CSS3, Ruby on Rails, PostgreSQL.  

How it works
--

Users can log into the website and see their home page.  Decks already added by the user will be visible along with default decks, and user can use the add deck form to create another deck for their list.  They can then add/remove cards to these decks as needed.  User can then search for a deck in the database and add it to their list.

## Specific features

Add/remove cards to a deck
--

When a deck is clicked on, the cards are displayed along with a form to add another card.  This was done using a modal, where the showDeckForm is set to either true/false in local state.

When the add button is clicked, the state is switched to true and the <AddDeckContainer /> is rendered.  A function to set the local sowDeckForm state back to false is passed to the aforementioned container as props.

Also on the decks index page is a link to the specific deckId, which renders the DeckShowContainer (which contains CardsIndex).

![](https://github.com/cmy235/MindBind/blob/master/app/assets/images/1c.png)


```javascript
// App.jsx
 <Route path= "/decks/:deckId" component={DeckShowContainer} />

```
Cards are related to decks via a one-to-many association in the database.  The redux state is updated with these relationships based on the deckId of the current page it is on. (i.e., if the page is /decks/42 then the add card will be submitted to the deck with id=42).

## Specific features

### Study deck
--

User can navigate to a a deck study page, where cards are looped through based on the original card clicked on.

After a card is flipped, a prompt requires the user to rank 1 - 5 based on how well the user knew the answer.  A rank of 5 will increase the overall percentage of progress for the deck, which is reflected on the circular progress bar to the left.  

![text](https://github.com/cmy235/MindBind/blob/master/app/assets/images/1f.png)

![text](https://github.com/cmy235/MindBind/blob/master/app/assets/images/1b.png)

### Search decks/categories
--

The search function uses an AJAX request to a CategoriesController.

An action creator dispatches the searchCategories action and pings the #search method, returning both categories and decks which matched the category name.

![](https://github.com/cmy235/MindBind/blob/master/app/assets/images/1s.png)


```ruby

# Api::CategoriesController
  def search
    if params[:query].present?
      @categories = Category.where('UPPER(name) ~ UPPER(?)', params[:query].upcase)
      render template: 'api/categories/index.json'
    else
      render @categories.errors.full_messages
    end
  end
```

The query results are stored in redux state under key "query".

## Future Plans for MindBind

Future plans include:
* Allow new decks to be added to a category
* Change local modals' react state to redux global state
* Further implement and style the search page
