# MindBind

MindBind is a learning app which allows you to create decks of flashcards to study.  You can add decks, create and delete card to certain decks, as well as search for categories of decks via the search page. Find the live version [here](https://aa-mindbind.herokuapp.com/#/).
  
Technologies Used:

Mindbind was developed using Javascript, React, HTML & CSS, Ruby and Rails.  

How it works
--

Users can log into the website and see their user home page.  Decks already added by the user will be visible, and user can use the add deck form to create another deck for their list.  They can then add/remove cards to these decks as needed.  User can then search for a deck in the database and add it to their list.

## Specific features

Add/remove cards to a deck
--

When the user logs in, they will be redirected to their dashboard which shows any decks they have previously added to their list.  When a deck is clicked on, the cards are displayed along with a form to add another card.  This was accomplished using a modal, where the "showDeckForm" is set to either true/false in local state.

When the add button is clicked, the state is switched to true and the <AddDeckContainer /> is rendered.  A function to set the local state back to closed is passed to the aforementioned container as props.

Also on the decks index page is a link to the specific deckId, which renders the DeckShowContainer (which contains CardsIndex).

![](https://github.com/cmy235/MindBind/blob/master/app/assets/images/decks_pic.png)


```javascript
// App.jsx
 <Route path= "/decks/:deckId" component={DeckShowContainer} />
 
```
Cards are related to decks via a one-to-many association in the database.  The redux state is updated with these relationsihps based on the deckId of the current page it is on. (i.e., if the page is /decks/42 then the add card will be submitted to the deck with id=42). 

![text](https://github.com/cmy235/MindBind/blob/master/app/assets/images/cards.png)


Search decks/categories
--

![](https://github.com/cmy235/MindBind/blob/master/app/assets/images/search_img.png)

The search function was completed using an ajax request to a CategoriesController on the backend.

An action creator dispatches the searchCategories action and pings the #search method, returning both categories and decks which matched the category name.

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

* Future Plans for MindBind

Future plans include:
* Create a separate card study page
* Add a progress tracker for each deck
* Allow new decks to be added to a category
* Further implement and style the search page
* Change local modals' react state to redux global state


