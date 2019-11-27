DROP TABLE IF EXISTS conspiracy;

CREATE TABLE conspiracy (
  keyword TEXT,
  description TEXT,
  proof TEXT,
  mainstream_science TEXT,
  year TEXT,
  location_id INTEGER);

INSERT INTO conspiracy VALUES ( "Saqqara Bird", "The bird was a miniature model of an ancient alien aircraft.", "It looks more like a plane than a bird.", "It is speculated that this could be a model of an aircraft, but even if that were true, there is no evidence of alien spacecraft in ancient Egypt.", "200 BCE", 1);
INSERT INTO conspiracy VALUES ( "Vimana", "Vimana were flying machines provided by ancient aliens", "Ancient Hindu epics mention vimana as aircraft used by the gods. The Vaimanika Shastra details their blueprints", "The Vaimanika Shastra is a pseudoscientific text written in 1923. It was originally believed to be a thousand years old but that was quickly disproven. The author was not an expert in aerodynamics.", "700-300 BCE (first mentioned by name in the Ramayana)", 2);
INSERT INTO conspiracy VALUES ( "Puma Punku", "Ancient aliens either provided tools and/or plans for the stone structures at Puma Punku", "The stones are cut so precisely that they could not have been carved with simple stone-age tools.", "Absence of evidence is not evidence of absence. Large hammers have been found in abundance nearby, the stones were hammered and then ground and polished with flat stones and sand.", "600 CE", 3);
INSERT INTO conspiracy VALUES ( "The Great Pyramid", "The Great Pyramid of Giza sent a microwave beam out of the top to a satellite.", "The inner chamber could have been filled with gasses to create a reaction, like a power plant.", "OKAY this one is just ridiculous.", "2580 BCE", 1);

DROP TABLE IF EXISTS location;

CREATE TABLE location (
  name TEXT);

INSERT INTO location VALUES ("Egypt");
INSERT INTO location VALUES ("India");
INSERT INTO location VALUES ("Tiwanaku");

DROP TABLE IF EXISTS episodes;

CREATE TABLE episodes (
  season INTEGER,
  episode INTEGER,
  title TEXT,
  release_date TEXT);

INSERT INTO episodes VALUES (1, 0, "Pilot", "Mar 8, 2009");
INSERT INTO episodes VALUES (1, 1, "The Evidence", "Apr 20, 2010");
INSERT INTO episodes VALUES (1, 2, "The Visitors", "Apr 27, 2010");
INSERT INTO episodes VALUES (1, 3, "The Mission", "May 4, 2010");
INSERT INTO episodes VALUES (1, 4, "Closer Encounters", "May 18, 2010");
INSERT INTO episodes VALUES (1, 5, "The Return", "May 25, 2010");
INSERT INTO episodes VALUES (3, 6, "Aliens and Ancient Engineers", "Sep 1, 2011");
INSERT INTO episodes VALUES (4, 6, "The Mystery of Puma Punku", "Mar 16, 2012");

DROP TABLE IF EXISTS conspiracy_episodes;

CREATE TABLE conspiracy_episodes (
  conspiracy_id INTEGER,
  episode_id INTEGER);

INSERT INTO conspiracy_episodes VALUES (1, 2);
INSERT INTO conspiracy_episodes VALUES (2, 2);
INSERT INTO conspiracy_episodes VALUES (2, 7);
INSERT INTO conspiracy_episodes VALUES (3, 2);
INSERT INTO conspiracy_episodes VALUES (3, 8);
INSERT INTO conspiracy_episodes VALUES (4, 2);
