DROP TABLE IF EXISTS conspiracy;

CREATE TABLE conspiracy (
  description TEXT,
  proof TEXT,
  mainstream_science TEXT,
  year TEXT);

INSERT INTO conspiracy VALUES ( "Akhenaten was an alien-human hybrid", "His elongated skull and weird monotheism", "Egyptian royal families imbred, he could have had a number of genetic disorders that caused his odd physical appearance", "1350 BCE");
INSERT INTO conspiracy VALUES ( "Extraterrestrials warned Noah about the flood to ensure humanity would survive the catastrophe", "God is an extraterrestrial", "Natural disasters happen and people are prone to exaggeration for the sake of good storytelling", "2348 BCE");
INSERT INTO conspiracy VALUES ( "Aliens telepathically communicated with Leonardo da Vinci", "His circular car looks like a flying saucer and he said many of his ideas came from visitations from angels", "Dude was hella smart and also definitely insane, he studied anatomy by dissecting human corpses", "1500 CE");
INSERT INTO conspiracy VALUES ( "The Annunaki created humanity as alien-neanderthal hybrids to use as slaves", "The fossil record and some nice reliefs of Annunaki", "There's like...so much to unpack here", "The dawn of humanity");
INSERT INTO conspiracy VALUES ( "Ancient Druids used vibrational technology to levitate the stones into Stonehenge", "Nobody knows how the hell they moved those damn giant rocks", "You can't prove it didn't happen I guess but you can't prove it did either", "2500 BCE");

DROP TABLE IF EXISTS location;

CREATE TABLE location (
  name TEXT);

INSERT INTO location VALUES ("Egypt");
INSERT INTO location VALUES ("Stonehenge");
INSERT INTO location VALUES ("Italy");

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
