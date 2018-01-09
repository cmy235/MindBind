# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Deck.destroy_all


u1 = User.create!({
  username: "userTwo",
  password: "chewbacca"
  })


u2 = User.create!({
  username: "student_noob_036",
  password: "chewbacca"
  })


u3 = User.create!({
  username: "HistoryBuff46",
  password: "chewbacca"
  })


d1 = Deck.create!({
  'title'=> 'organic chemistry',
  'author_id'=> u3.id,
  'category_id'=> 21
})

d2 = Deck.create!({
    'title'=> 'american history',
    'author_id'=> u1.id,
    'category_id'=> 7
  })

d3 = Deck.create!({
    'title'=> 'psychology',
    'author_id'=> u1.id,
    'category_id'=> 2
  })

d4 = Deck.create!({
    'title'=> 'biology',
    'author_id'=> u2.id,
    'category_id'=> 21
  })


d5 = Deck.create!({
  'title'=> 'roman history',
  'author_id'=> u3.id,
  'category_id'=> 34
})

c1 = Card.create!({
  'front'=> "True/False: The Roman empire was the largest empire in history",
  'back'=> "False: It was only the 28th largest in history",
  'deck_id' => d5.id
  })


c2 = Card.create!({
  'front'=> "Which Roman conflist was the longest of it's history?",
  'back'=> "The Roman/Persian conflict was longest: it lasted 721 years",
  'deck_id' => d5.id
  })


c3 = Card.create!({
  'front'=> "Which of the following was used in ancient Rome to wash clothes?
              A: wine
              B: urine
              C: goat's milk",
  'back'=> "B: urine",
  'deck_id' => d5.id
  })


c4 = Card.create!({
  'front'=> "You can make which of the following using organic chemistry principles?
              A: Pesticides
              B: Soap
              C: Crystal Meth
              D: All of the above!",
  'back'=> "D: All of the above!",
  'deck_id' => d1.id
  })


c5 = Card.create!({
  'front'=> "The basis for organic chemistry is: _____ ",
  'back'=> "Carbon",
  'deck_id' => d1.id
  })


c5 = Card.create!({
  'front'=> "The arrangement and interaction of molecules in space is called what?",
  'back'=> "Stereochemistry",
  'deck_id' => d1.id
  })



  c6 = Card.create!({
    'front'=> "Who was the fifth president of the U.S.?",
    'back'=> "Abraham Lincoln",
    'deck_id' => d2.id
    })
