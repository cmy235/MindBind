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
    }
  },

  {
    decks: {
      42: {
        id: 42,
        category_id: "12",
        current_user_follows: true
      },

      63: {
        id: 63,
        category_id: "9",
        current_user_follows: false
      }
    }
  },

  {
    categories: {
      12: {
        id: 12,
        category: "History"
      },
      9: {
        id: 9,
        category: "Economics"
      },
      14: {
        id: 14,
        category: "Physics"
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
