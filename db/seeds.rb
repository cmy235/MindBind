# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# User.destroy_all
Deck.destroy_all

#
# User.create!({
#   username: "userTwo",
#   password: "chewbacca"
#   })
#
#
# User.create!({
#   username: "student_noob_036",
#   password: "chewbacca"
#   })
#
#
# User.create!({
#   username: "HistoryBuff46",
#   password: "chewbacca"
#   })


Deck.create!({
    'title'=> 'american history',
    'author_id'=> 16,
    'category_id'=> 7
  })

Deck.create!({
    'title'=> 'psychology',
    'author_id'=> 16,
    'category_id'=> 2
  })

  Deck.create!({
    'title'=> 'biology',
    'author_id'=> 17,
    'category_id'=> 21
  })
