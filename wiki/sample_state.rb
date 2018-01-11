{
  entities:
  {
    users: {
      1: {
        id: 1,
        username: "student_noob_036",
        decks_ids: [24, 57, 63]
      },
      2: {
        id: 2,
        username: "HistoryBuff46",
        decks_ids: [57, 42, 68, 72]
      }
    },

  {
    decks: {
      42: {
        id: 42,
        category_id: 12,
        cards: [3, 2, 12, 44, 32],
        current_user_follows: true
      },

      63: {
        id: 63,
        category_id: 9,
        cards: [3, 18, 6, 12, 42, 21],
        current_user_follows: false
      }
    }
  },

    { cards: {
      1: {
        id: 1,
        deck_id: 42
        },
      2: {
        id: 2,
        deck_id: 42
        },
      5: {
        id: 1,
        deck_id: 63
        }
      }
    }

  {
    categories: {
      12: {
        name: "History"
        id: 12,
        deck_ids: [12, 67, 44]
      },
      9: {
        name: "Economics"
        id: 9,
        deck_ids: [9, 18]
      },
      14: {
        name: "Physics"
        id: 14,
        deck_ids: [14, 22, 6, 49]
      }
    }
   }
 },

  {
    progress_tracking: {
      # Bonus
    }
  },

  ui: {
    loading: true/false
  },

  errors: {
    login: ["Incorrect username/password"],
    deckForm: ["Deck name can't be blank"],
    deckForm: ["Deck must contain cards"],
  },

  session: {
    id: 57,
    username: "KnowItAll67",
    img_url: ""
  }

}
