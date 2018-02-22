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

                                    d201 = Deck.create!({
                                      'title'=> 'Spanish',
                                      'author_id'=> cy.id,
                                      'category_id'=> cat8.id
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
                                                                  'title'=> 'Organic Chemistry',
                                                                  'author_id'=> cy.id,
                                                                  'category_id'=> cat1.id
                                                                  })

                                                                  d2 = Deck.create!({
                                                                    'title'=> 'American History',
                                                                    'author_id'=> cy.id,
                                                                    'category_id'=>cat2.id
                                                                    })

                                                                    d3 = Deck.create!({
                                                                      'title'=> 'Psychology',
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
                                                                                    'front'=> "Ancient Roman women used __________ as a moisturizer for their beauty and complexion",
                                                                                    'back'=> "Gladiator sweat",
                                                                                    'deck_id' => d5.id
                                                                                    })
                                                                                  c101 = Card.create!({
                                                                                    'front'=> "What was the Roman name for the goddess Hecate?",
                                                                                    'back'=> "Trivia",
                                                                                    'deck_id' => d5.id
                                                                                    })
                                                                                  c102 = Card.create!({
                                                                                    'front'=> "In what year did the Western Roman Empire come to an end?",
                                                                                    'back'=> "476 CE",
                                                                                    'deck_id' => d5.id
                                                                                    })
                                                                                  c103 = Card.create!({
                                                                                    'front'=> "Who was the legendary founder of Rome?",
                                                                                    'back'=> "Romulus",
                                                                                    'deck_id' => d5.id
                                                                                    })
                                                                                  c104 = Card.create!({
                                                                                    'front'=> "Which one of these was not implicated in the assassination of Julius Caesar: Brutus, Nero, or Marc Antony?",
                                                                                    'back'=> "Nero",
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

                                                                                            c42 = Card.create!({
                                                                                              'front'=> "Which molecule has the largest dipole moment:  HCl, CCl4, H2S, or CO2",
                                                                                              'back'=> "HCl",
                                                                                              'deck_id' => d1.id
                                                                                              })
                                                                                            c43 = Card.create!({
                                                                                              'front'=> "One of the most basic functional groups involves only carbon-carbon double bonds. What is this group called?",
                                                                                              'back'=> "Alkene",
                                                                                              'deck_id' => d1.id
                                                                                              })
                                                                                            c44 = Card.create!({
                                                                                              'front'=> "The fullerenes discovered in 1985 by Robert Curl, Harold Kroto, and Richard Smalley were composed only of the element carbon, but the arrangement of carbon-carbon bonds was something that had never before been seen. What name is given to this phenomenon, in which a single element can exist in several structural forms?",
                                                                                              'back'=> "Allotropy",
                                                                                              'deck_id' => d1.id
                                                                                              })
                                                                                            c45 = Card.create!({
                                                                                              'front'=> "The history of the chemical benzene is rather interesting in that it proved devilishly difficult to ascertain its structure. What was the name of the scientist who came up with the first plausible arrangement of benzene?",
                                                                                              'back'=> "Kekulé",
                                                                                              'deck_id' => d1.id
                                                                                              })
                                                                                            c46 = Card.create!({
                                                                                              'front'=> "Who was credited for the invention of the mass spectrometer?",
                                                                                              'back'=> "J.J. Thompson",
                                                                                              'deck_id' => d1.id
                                                                                              })
                                                                                            c47 = Card.create!({
                                                                                              'front'=> "The world of organic chemistry is vast, simply because carbon has the property of easily being able to form bonds with other carbon atoms, creating a wide range of molecules of various levels of complexity. What is this unique property of carbon called?",
                                                                                              'back'=> "Catenation",
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
                                                                                                  cc28 = Card.create!({
                                                                                                    'front'=> "Who was the first US President to declare war?",
                                                                                                    'back'=> "James Madison",
                                                                                                    'deck_id' => d2.id
                                                                                                    })
                                                                                                    cc29 = Card.create!({
                                                                                                      'front'=> "Where was General Custer's last stand?",
                                                                                                      'back'=> "Little Bighorn",
                                                                                                      'deck_id' => d2.id
                                                                                                      })

                                                                                                      cc30 = Card.create!({
                                                                                                        'front'=> "Which American President bought the Louisiana Territory from France?",
                                                                                                        'back'=> "Thomas Jefferson",
                                                                                                        'deck_id' => d2.id
                                                                                                        })

                                                                                                        cc31 = Card.create!({
                                                                                                          'front'=> "What was the Boston Tea Party?",
                                                                                                          'back'=> "When colonists threw boxes of tea into Boston harbor, protesting a tax against tea. ",
                                                                                                          'deck_id' => d2.id
                                                                                                          })


                                                                                                          cc32 = Card.create!({
                                                                                                            'front'=> "Who wrote the Star Spangled Banner?",
                                                                                                            'back'=> "Francis Scott Key",
                                                                                                            'deck_id' => d2.id
                                                                                                            })


                                                                                                            cc33 = Card.create!({
                                                                                                              'front'=> "In which US state did the Hindenburg explode and George Washington land in after he crossed the Delaware River?",
                                                                                                              'back'=> "New Jersey",
                                                                                                              'deck_id' => d2.id
                                                                                                              })

                                                                                                              c29 = Card.create!({
                                                                                                                'front'=> "The type of psychologist who is trained to provide psychotherapy and to administer and interpret psychological tests is called",
                                                                                                                'back'=> "Clinical psychologist",
                                                                                                                'deck_id' => d3.id
                                                                                                                })

                                                                                                                c30 = Card.create!({
                                                                                                                  'front'=> "Group in an experiment or study that does not receive treatment by the researchers; used as a benchmark to measure how the other tested subjects",
                                                                                                                  'back'=> "Control group",
                                                                                                                  'deck_id' => d3.id
                                                                                                                  })

                                                                                                                  c31 = Card.create!({
                                                                                                                    'front'=> "A school of thought that explains how people are able to see meaningful organization and patterns when individual parts are seen together as a whole.",
                                                                                                                    'back'=> "Gestalt",
                                                                                                                    'deck_id' => d3.id
                                                                                                                    })

                                                                                                                    c32 = Card.create!({
                                                                                                                      'front'=> "A school of thought centered on the idea that the mind can be studied by breaking it down into its most basic elements.",
                                                                                                                      'back'=> "Structuralism",
                                                                                                                      'deck_id' => d3.id
                                                                                                                      })

                                                                                                                      c034 = Card.create!({
                                                                                                                        'front'=> "Part of limbic system, this part of the brain handles emotions, motivation",
                                                                                                                        'back'=> "Hippocampus",
                                                                                                                        'deck_id' => d3.id
                                                                                                                        })
                                                                                                                      c035 = Card.create!({
                                                                                                                        'front'=> "According to psychologist Sigmund Freud, personality is comprised of three elements: the Id, Ego, and ____?",
                                                                                                                        'back'=> "Superego",
                                                                                                                        'deck_id' => d3.id
                                                                                                                        })

                                                                                                                      c037 = Card.create!({
                                                                                                                        'front'=> "Which of these is NOT one of the five major personality dimensions, according to the 'Big Five Theory':  Neroticism, Openness, Enthusiasm",
                                                                                                                        'back'=> "Enthusiasm",
                                                                                                                        'deck_id' => d3.id
                                                                                                                        })
                                                                                                                      c038 = Card.create!({
                                                                                                                        'front'=> "What are the four lobes of the brain called?",
                                                                                                                        'back'=> "Frontal, Pariental, Occipital, and Temporal",
                                                                                                                        'deck_id' => d3.id
                                                                                                                        })


                                                                                                                      c33 = Card.create!({
                                                                                                                        'front'=> "threadlike structures made of DNA molecules that contain the genes",
                                                                                                                        'back'=> "Chromosomes",
                                                                                                                        'deck_id' => d4.id
                                                                                                                        })

                                                                                                                        c34 = Card.create!({
                                                                                                                          'front'=> "A part of the cell containing DNA and RNA and responsible for growth and reproduction, and also Gavin Belson's company",
                                                                                                                          'back'=> "Nucleus",
                                                                                                                          'deck_id' => d4.id
                                                                                                                          })

                                                                                                                          c35 = Card.create!({
                                                                                                                            'front'=> "What is the difference between DNA and RNA?",
                                                                                                                            'back'=> "DNA, sugar is deoxyribose, two strands, base - thymine
                                                                                                                            .......   RNA, sugar is ribose, one strand, base - uracil, only molecule to enter or leave the nucleus",
                                                                                                                            'deck_id' => d4.id
                                                                                                                            })
                                                                                                                          c0036 = Card.create!({
                                                                                                                            'front'=> "Which gland in the human body regulates metabolism?",
                                                                                                                            'back'=> "Thyroid",
                                                                                                                            'deck_id' => d4.id
                                                                                                                            })
                                                                                                                          c0037 = Card.create!({
                                                                                                                            'front'=> "What is the name for the specialized nerve cell that transmits information chemically and electrically throughout the body?",
                                                                                                                            'back'=> "Neuron",
                                                                                                                            'deck_id' => d4.id
                                                                                                                            })
                                                                                                                          c0038 = Card.create!({
                                                                                                                            'front'=> "The molecule 'hemoglobin' is used in which type of cells?",
                                                                                                                            'back'=> "Red blood cells",
                                                                                                                            'deck_id' => d4.id
                                                                                                                            })
                                                                                                                          c0039 = Card.create!({
                                                                                                                            'front'=> "In humans, what is the only internal organ capable of regenerating lost tissue?",
                                                                                                                            'back'=> "The liver",
                                                                                                                            'deck_id' => d4.id
                                                                                                                            })
                                                                                                                          c0040 = Card.create!({
                                                                                                                            'front'=> "Approximately 2% of all people have what eye color?",
                                                                                                                            'back'=> "Green",
                                                                                                                            'deck_id' => d4.id
                                                                                                                            })
                                                                                                                          c0041 = Card.create!({
                                                                                                                            'front'=> "Which bone is the longest bone in the human body?",
                                                                                                                            'back'=> "Femur",
                                                                                                                            'deck_id' => d4.id
                                                                                                                            })
                                                                                                                          c0042 = Card.create!({
                                                                                                                            'front'=> "A person able to use both hands with equal skill is called what?",
                                                                                                                            'back'=> "Ambidextrous",
                                                                                                                            'deck_id' => d4.id
                                                                                                                            })

                                                                                                                            c37 = Card.create!({
                                                                                                                              'front'=> "What did you do yesterday?",
                                                                                                                              'back'=> "¿Qué hiciste ayer?",
                                                                                                                              'deck_id' => d201.id
                                                                                                                              })

                                                                                                                              c38  = Card.create!({
                                                                                                                                'front'=> "What is your favorite book?",
                                                                                                                                'back'=> "¿Cuál es su libro favorito",
                                                                                                                                'deck_id' => d201.id
                                                                                                                                })

                                                                                                                                c40  = Card.create!({
                                                                                                                                  'front'=> "Is is a beautiful day today!",
                                                                                                                                  'back'=> "¡Hoy es un día hermoso!",
                                                                                                                                  'deck_id' => d201.id
                                                                                                                                  })

                                                                                                                                  c39 = Card.create!({
                                                                                                                                    'front'=> "Good morning! Do you want to come to the beach with me today?",
                                                                                                                                    'back'=> "¡Buenos días! ¿Quieres venir conmigo a la playa hoy?",
                                                                                                                                    'deck_id' => d201.id
                                                                                                                                    })

                                                                                                                                    c41  = Card.create!({
                                                                                                                                      'front'=> "Do you come here often? I haven't seen you before.",
                                                                                                                                      'back'=> "¿Vienes aquí a menudo? No te he visto antes.",
                                                                                                                                      'deck_id' => d201.id
                                                                                                                                      })

                                                                                                                                      c42  = Card.create!({
                                                                                                                                        'front'=> "La verdad es que es mi primera vez aquí en este café",
                                                                                                                                        'back'=> "The truth is that it's my first time here in this cafe.",
                                                                                                                                        'deck_id' => d201.id
                                                                                                                                        })

                                                                                                                                        c43  = Card.create!({
                                                                                                                                          'front'=> "Happy birthday! How old are you turning today?",
                                                                                                                                          'back'=> "¡Feliz cumpleaños! ¿Cuántos años cumples hoy?",
                                                                                                                                          'deck_id' => d201.id
                                                                                                                                          })
                                                                                                                                          c44  = Card.create!({
                                                                                                                                            'front'=> "¿Sacaste 100% en tu examen? ¡Buen trabajo!",
                                                                                                                                            'back'=> "You got 100% on your exam? Good job!",
                                                                                                                                            'deck_id' => d201.id
                                                                                                                                            })
