# ANCIENT ALIENS API

## TABLE OF CONTENTS
  BACKGROUND
  TECHNOLOGIES
  CONSPIRACY TABLE
  LOCATION TABLE
  EPISODES TABLE
  CONSPIRACY_EPISODES JOIN TABLE

## BACKGROUND
Last year I got into the habit of watching Ancient Aliens and playing Switch games after work. I thought I could turn this into a learning experience if I sat down and researched the real science and history behind Ancient Astronaut Theory. This is a database of various conspiracies presented over 10 years of History Channel's greatest comedic achievement.

## TECHNOLOGIES
  SQLite3
  DB Browser for SQLite
  node.js/nodemon.js
  Atom text editor
  Postman
  iTerm2

## CONSPIRACY TABLE
  keyword TEXT - A short name to easily identify conspiracies
  description TEXT - A description of what the conspiracy entails
  proof TEXT - A description of how Ancient Astronaut Theorists attempt to prove their conspiracies
  year TEXT - Approximately when the conspiracy happened, or when it began
  location_id INTEGER - Links to the locations table mentioned below

### EXAMPLE REQUESTS
    GET ALL CONSPIRACIES = GET host:7777/conspiracy =
      [
        {
          "keyword": "Saqqara Bird",
          "description": "The bird was a miniature model of an ancient alien aircraft.",
          "proof": "It looks more like a plane than a bird.",
          "mainstream_science": "It is speculated that this could be a model of an aircraft, but even if that were true, there is no evidence of alien spacecraft in ancient Egypt.",
          "year": "200 BCE",
          "location_id": 1
        },
        {
          "keyword": "Vimana",
          "description": "Vimana were flying machines given to humans by ancient aliens",
          "proof": "Ancient Hindu epics mention vimana as aircraft used by the gods. The Vaimanika Shastra details their blueprints",
          "mainstream_science": "The Vaimanika Shastra is a pseudoscientific text written in 1923. It was originally believed to be a thousand years old but that was quickly disproven. The author was not an expert in aerodynamics.",
          "year": "700-300 BCE (first mentioned by name in the Ramayana)",
          "location_id": 2
        },
        {
          ET CETERA!!!
        }
      ]
    GET ONE CONSPIRACY = GET host:7777/conspiracy/4 =
      [
        {
          "keyword": "The Great Pyramid",          
          "description": "The Great Pyramid of Giza sent a microwave beam out of the top to a satellite.",
          "proof": "The inner chamber could have been filled with gasses to create a reaction, like a power plant.",
          "mainstream_science": "OKAY this one is just ridiculous. There is no evidence whatsoever to suggest this happened and the episode doesn't attempt to provide any.",
          "year": "2580 BCE"
        }
      ]
    POST NEW CONSPIRACY = POST host:7777/conspiracy =
        {
          "keyword": "Black Death",
          "description": "The Pestilence which killed over 100 million people was a bio-weapon used by extraterrestrials as an attempt to eradicate the human race.",
          "proof": "If it were caused by rat infestation there should be more reports of rats. Instead there are reports of dancing lights, mists said to carry the plague virus, and mysterious hooded black figures like grim reapers roaming infected cities.",
          "mainstream_science": "There is plenty of documentation to show the increase in rodent infestations as the plague began. As for the mists and reapers, people have always used art to express their emotions and the plague killed so many people anyone who was left alive would be terrified.",
          "year": "1347-51 CE",
          "location_id": 6
        }
    UPDATE CONSPIRACY = PUT host:7777/conspiracy/3 =
      right now you need to put all the data in just to update so I need to make it so you can update one element at a time.
      {
        "keyword": "Puma Punku"
      }

    DELETE CONSPIRACY = DELETE host:7777/conspiracy/4 = OK

## LOCATIONS TABLE
  location TEXT

### EXAMPLE REQUESTS
    GET ALL LOCATIONS = GET host:7777/locations =
      [
        {
          "location": "Egypt"
        },
        {
          "location": "India"
        },
        {
          "location": "Tiwanaku"
        },
        {
          ET CETERA!
        }
      ]
    GET ONE LOCATION = GET host:7777/locations/5 =
      [
        {
          "location": "Global"
        }
      ]
    POST NEW LOCATION = host:7777/locations =
      {
        "location": "England"
      }
    UPDATE LOCATION = PUT host:7777/locations/3 =
      {
        "location": "Tiahuanaco"
      }
    DELETE LOCATION = DELETE host:7777/locations/6 = OK

## EPISODES TABLE
  season INTEGER,
  episode INTEGER,
  title TEXT,
  release_date TEXT

### EXAMPLE REQUESTS
    GET ALL EPISODES = GET host:7777/episodes
      [
        {
          "season": 1,
          "episode": 0,
          "title": "Pilot",
          "release_date": "Mar 8, 2009"
        },
        {
          "season": 1,
          "episode": 1,
          "title": "The Evidence",
          "release_date": "Apr 20, 2010"
        },
        {
          "season": 1,
          "episode": 2,
          "title": "The Visitors",
          "release_date": "Apr 27, 2010"
        },
        {
          ET CETERA!
        }
      ]
    GET ONE EPISODE = GET host:7777/episodes/7 =
      [
        {
          "season": 3,
          "episode": 6,
          "title": "Aliens and Ancient Engineers",
          "release_date": "Sep 1, 2011"
        }
      ]
    POST NEW EPISODE = POST host:7777/episodes =
      {
        "season": 2,
        "episode": 1,
        "title": "Mysterious Places",
        "release_date": "Oct 28, 2010"
      }
    UPDATE EPISODE = PUT host:7777/episodes/1 =
      {
        "title": "Chariots, Gods, & Beyond - Pilot"
      }
    DELETE EPISODE = DELETE host:7777/episodes/3 = OK

## CONSPIRACY_EPISODES JOIN TABLE
  conspiracy_id INTEGER,
  episode_id INTEGER

### EXAMPLE REQUESTS
    GET CONSPIRACY WITH EPISODES = GET host:7777/conspiracy/3/episodes =
      [
        {
          "keyword": "Pumaa Punkuu",
          "description": "Ancient aliens either provided tools and/or plans for the stone structures at Puma Punku",
          "season": 1,
          "episode": 1,
          "title": "The Evidence"
        },
        {
          "keyword": "Pumaa Punkuu",
          "description": "Ancient aliens either provided tools and/or plans for the stone structures at Puma Punku",
          "season": 4,
          "episode": 6,
          "title": "The Mystery of Puma Punku"
        }
      ]
    ASSOCIATE CONSPIRACY WITH EPISODE => POST host:7777/conspiracy/2/episodes =>
      {
        "episode_id": 7
      }
