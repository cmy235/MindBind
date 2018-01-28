# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Deck.destroy_all
Category.destroy_all

cy = User.create!({
  username: "demoUser",
  password: "starwars"
  })


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

        cat1 = Category.create!({
          'name'=> "Science"
          })

          cat2 = Category.create!({
            'name'=> "History"
            })


            cat3 = Category.create!({
              'name'=> "Medicine"
              })

              cat4 = Category.create!({
                'name'=> "Other"
                })

                cat5 = Category.create!({
                  'name'=> "Bio-science"
                  })

                  cat6 = Category.create!({
                    'name'=> "Art"
                    })


                    cat7 = Category.create!({
                      'name'=> "Law"
                      })

                      cat8 = Category.create!({
                        'name'=> "Foreign Language"
                        })


                        cat9 = Category.create!({
                          'name'=> "Business"
                          })

                          cat10 = Category.create!({
                            'name'=> "Technology"
                            })


                            cat11 = Category.create!({
                              'name'=> "Math"
                              })

                              cat12 = Category.create!({
                                'name'=> "Vocations"
                                })

                                cat13 = Category.create!({
                                  'name'=> "Certifications"
                                  })

                                  cat14 = Category.create!({
                                    'name'=> "Topography"
                                    })

                                    d = Deck.create!({
                                      'title'=> 'Organic Chemistry',
                                      'author_id'=> cy.id,
                                      'category_id'=> cat1.id
                                      })

                                      d001 = Deck.create!({
                                        'title'=> 'American Sign Language',
                                        'author_id'=> u3.id,
                                        'category_id'=> cat13.id
                                        })

                                        d002 = Deck.create!({
                                          'title'=> 'Driver Ed',
                                          'author_id'=> u3.id,
                                          'category_id'=> cat13.id
                                          })

                                          d003 = Deck.create!({
                                            'title'=> 'TOEFL',
                                            'author_id'=> u3.id,
                                            'category_id'=> cat13.id
                                            })

                                            d004 = Deck.create!({
                                              'title'=> 'Medical & Nursing',
                                              'author_id'=> u3.id,
                                              'category_id'=> cat13.id
                                              })

                                              d005 = Deck.create!({
                                                'title'=> 'Arithmetic',
                                                'author_id'=> u2.id,
                                                'category_id'=> cat11.id
                                                })

                                                d006 = Deck.create!({
                                                  'title'=> 'Statistics',
                                                  'author_id'=> u3.id,
                                                  'category_id'=> cat11.id
                                                  })

                                                  d007 = Deck.create!({
                                                    'title'=> 'Geometry',
                                                    'author_id'=> u2.id,
                                                    'category_id'=> cat11.id
                                                    })

                                                    d008 = Deck.create!({
                                                      'title'=> 'Calculus',
                                                      'author_id'=> u3.id,
                                                      'category_id'=> cat11.id
                                                      })

                                                      d009 = Deck.create!({
                                                        'title'=> 'German',
                                                        'author_id'=> u3.id,
                                                        'category_id'=> cat8.id
                                                        })

                                                        d010 = Deck.create!({
                                                          'title'=> 'Italian',
                                                          'author_id'=> u3.id,
                                                          'category_id'=> cat8.id
                                                          })

                                                          d011 = Deck.create!({
                                                            'title'=> 'Hebrew',
                                                            'author_id'=> u3.id,
                                                            'category_id'=> cat8.id
                                                            })

                                                            d012 = Deck.create!({
                                                              'title'=> 'Japanese',
                                                              'author_id'=> u3.id,
                                                              'category_id'=> cat8.id
                                                              })

                                                              d013 = Deck.create!({
                                                                'title'=> 'Icelandic',
                                                                'author_id'=> u3.id,
                                                                'category_id'=> cat8.id
                                                                })

                                                                # languages = ["German",
                                                                #   "Hebrew",
                                                                #   "Italian",
                                                                #   "Japanese",
                                                                #   "Korean",
                                                                # ]

                                                                # languages.each_with_index do |lng|
                                                                #   Deck.create!({
                                                                #     'title'=> `lang#{lng}`,
                                                                #     'author_id'=> cy.id,
                                                                #     'category_id'=> cat8.id
                                                                #     })
                                                                # end


                                                                d1 = Deck.create!({
                                                                  'title'=> 'Rrganic chemistry',
                                                                  'author_id'=> cy.id,
                                                                  'category_id'=> cat1.id
                                                                  })

                                                                  d2 = Deck.create!({
                                                                    'title'=> 'American History',
                                                                    'author_id'=> cy.id,
                                                                    'category_id'=>cat2.id
                                                                    })

                                                                    d3 = Deck.create!({
                                                                      'title'=> 'psychology',
                                                                      'author_id'=> cy.id,
                                                                      'category_id'=> cat3.id
                                                                      })

                                                                      d4 = Deck.create!({
                                                                        'title'=> 'Biology',
                                                                        'author_id'=> cy.id,
                                                                        'category_id'=> cat3.id
                                                                        })


                                                                        d5 = Deck.create!({
                                                                          'title'=> 'Roman History',
                                                                          'author_id'=> cy.id,
                                                                          'category_id'=> cat2.id
                                                                          })




                                                                          c1 = Card.create!({
                                                                            'front'=> "True/False: The Roman empire was the largest empire in history",
                                                                            'back'=> "False: It was only the 28th largest in history",
                                                                            'deck_id' => d5.id
                                                                            })


                                                                            c2 = Card.create!({
                                                                              'front'=> "Which Roman conflict was the longest of its history?",
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

                                                                                c101 = Card.create!({
                                                                                  'front'=> "True/False: Romans solely spoke Latin",
                                                                                  'back'=> "False: Latin was one of many languages spoke in Rome, including
                                                                                  Celtic, Syriac, Greek and Thracian",
                                                                                  'deck_id' => d5.id
                                                                                  })

                                                                                  c100 = Card.create!({
                                                                                    'front'=> "Ancient Roman women used __________ as a moisturizer their beauty and complexion",
                                                                                    'back'=> "Gladiator sweat",
                                                                                    'deck_id' => d5.id
                                                                                    })


                                                                                    c99 = Card.create!({
                                                                                      'front'=> "You can make which of the following using organic chemistry principles?
                                                                                      A: Pesticides
                                                                                      B: Soap
                                                                                      C: Plastic
                                                                                      D: All of the above!",
                                                                                      'back'=> "D: All of the above!",
                                                                                      'deck_id' => d1.id
                                                                                      })


                                                                                      c5 = Card.create!({
                                                                                        'front'=> "The basis for organic chemistry is: _____ ",
                                                                                        'back'=> "Carbon",
                                                                                        'deck_id' => d1.id
                                                                                        })


                                                                                        c39 = Card.create!({
                                                                                          'front'=> "The arrangement and interaction of molecules in space is called what?",
                                                                                          'back'=> "Stereochemistry",
                                                                                          'deck_id' => d1.id
                                                                                          })


                                                                                          c41 = Card.create!({
                                                                                            'front'=> "The origin of the name 'carbon' comes from the Latin word carbo, meaning what?",
                                                                                            'back'=> "Charcoal",
                                                                                            'deck_id' => d1.id
                                                                                            })



                                                                                            c6 = Card.create!({
                                                                                              'front'=> "Who was the fifth president of the U.S.?",
                                                                                              'back'=> "Abraham Lincoln",
                                                                                              'deck_id' => d2.id
                                                                                              })

                                                                                              c26 = Card.create!({
                                                                                                'front'=> "The explosion of the USS Maine in Havana Harbor in 1898 began which war?",
                                                                                                'back'=> "Spanish/American War",
                                                                                                'deck_id' => d2.id
                                                                                                })

                                                                                                c27 = Card.create!({
                                                                                                  'front'=> "This Amendment made it illegal to manufacture, distribute, or possess any type of alcoholic beverage",
                                                                                                  'back'=> "Prohibition",
                                                                                                  'deck_id' => d2.id
                                                                                                  })
