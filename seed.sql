DROP TABLE IF EXISTS conspiracy;

CREATE TABLE conspiracy (
  keyword TEXT,
  description TEXT,
  proof TEXT,
  mainstream_science TEXT,
  year TEXT,
  location_id INTEGER);

INSERT INTO conspiracy VALUES (
  "Saqqara Bird",
  "The bird was a miniature model of an ancient alien aircraft.",
  "It looks more like a plane than a bird.",
  "It is speculated that this could be a model of an aircraft, but even if that were true, there is no evidence of alien spacecraft in ancient Egypt.",
  "200 BCE",
  1
);
INSERT INTO conspiracy VALUES (
  "Vimana",
  "Vimana were flying machines given to humans by ancient aliens",
  "Ancient Hindu epics mention vimana as aircraft used by the gods. The Vaimanika Shastra details their blueprints",
  "The Vaimanika Shastra is a pseudoscientific text written in 1923. It was originally believed to be a thousand years old but that was quickly disproven. The author was not an expert in aerodynamics.",
  "700-300 BCE (first mentioned by name in the Ramayana)",
  2
);
INSERT INTO conspiracy VALUES (
  "Pumaa Punkuu",
  "Ancient aliens either provided tools and/or plans for the stone structures at Puma Punku",
  "The stones are cut so precisely that they could not have been carved with simple stone-age tools.",
  "Absence of evidence is not evidence of absence. Large hammers have been found in abundance nearby, the stones were hammered and then ground and polished with flat stones and sand.",
  "600 CE",
  3
);
INSERT INTO conspiracy VALUES (
  "The Great Pyramid",
  "The Great Pyramid of Giza sent a microwave beam out of the top to a satellite.",
  "The inner chamber could have been filled with gasses to create a reaction, like a power plant.",
  "OKAY this one is just ridiculous.",
  "2580 BCE",
  1
);
INSERT INTO conspiracy VALUES (
  "Annunaki",
  "Humanity (adamu) was originally created through genetic mutation to mine gold so the Annunaki aliens could repair the atmosphere on their home planet.",
  "Ancient Sumerian texts detail the story of the Annunaki",
  "There's a lot to unpack here",
  "2144 BCE",
  4
);
INSERT INTO conspiracy VALUES (
  "Animal Mutilation",
  "Aliens are harvesting animal and human DNA for hybrid experimentation and have been doing so for thousands of years.",
  "There have been numerous reports of livestock being mutilated and killed with surgical precision, as well as reports of human abduction. In Egypt, the tomb of an Apis bull was discovered with the bones of multiple animals.",
  'The FBI launched an investigation in 1979 called "Operation Animal Mutilation" but their results were inconclusive. While most mutilations are from natural predation, some clearly are not and remain unexplained.',
  "1606 CE",
  5
);
INSERT INTO conspiracy VALUES (
  "Crop Circles",
  "Aliens either make crop circles deliberately as messages or they are made by spaceship landings.",
  "In 1991 Bower and Chorley of England claimed they began the crop circle craze, but there are thousands all over the world that they obviously could not have made.",
  "Crop circles can be easily created by humans and are usually located in areas of high traffic and population density. Even the most complex patterns could still be made by a group of people in the dead of night. But you know, I want to believe...",
  "1686 CE",
  5
);
INSERT INTO conspiracy VALUES (
  "Crystal Skulls",
  "These highly realistic skulls were created by aliens as storage devices and they can interface with each other to exchange information.",
  "Quartz has long been studied and used for its vibrational energy, for example, quartz clocks are known to be more accurate than others. Ancient aliens could have adapted the vibrational frequencies of quartz to store info with their advanced technology.",
  "These skulls were all made in the 19th century despite claims that they are much older, as proven by markings made from jeweler's equipment. They were likely made by Germans during a time of great fascination *cough*fetishization*cough* of ancient and distant cultures, seeing as there are no Mesoamerican tales of crystal skulls.",
  "Circa 1800s",
  5
);
INSERT INTO conspiracy VALUES (
  "Black Plague",
  "Extraterrestrials created the plague as a bio-weapon to eradicate humanity.",
  "There aren't enought reports about rat infestations, instead there are reports of dancing lights in the skies, thick mists where people could 'see the plague coming', and of grim reapers haunting Europe.",
  "People create art and legends around traumatic events. 7 million people died of plague, a shadow could become the grim reaper to someone who had witnessed so much death. There is plenty of evidence to suggest plague was carried on the fleas of rodents.",
  "1350 CE",
  5
);

DROP TABLE IF EXISTS locations;

CREATE TABLE locations (
  location TEXT);

INSERT INTO locations VALUES ("Egypt");
INSERT INTO locations VALUES ("India");
INSERT INTO locations VALUES ("Tiwanaku");
INSERT INTO locations VALUES ("Mesopotamia");
INSERT INTO locations VALUES ("Global");
INSERT INTO locations VALUES ("Lubantun");
INSERT INTO locations VALUES ("Ceballos");
INSERT INTO locations VALUES ("Lovelock");
INSERT INTO locations VALUES ("Dulce");
INSERT INTO locations VALUES ("Pakistan");
INSERT INTO locations VALUES ("USA");

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
INSERT INTO episodes VALUES (2, 1, "Mysterious Places", "Oct 28, 2010");
INSERT INTO episodes VALUES (2, 2, "Gods & Aliens", "Nov 4, 2010");
INSERT INTO episodes VALUES (2, 3, "Underwater Worlds", "Nov 11, 2010");
INSERT INTO episodes VALUES (2, 4, "Underground Aliens", "Nov 18, 2010");
INSERT INTO episodes VALUES (2, 5, "Aliens & the Third Reich", "Nov 25, 2010");
INSERT INTO episodes VALUES (2, 6, "Alien Tech", "Dec 2, 2010");
INSERT INTO episodes VALUES (2, 7, "Angels and Aliens", "Dec 9, 2010");
INSERT INTO episodes VALUES (2, 8, "Unexplained Structures", "Dec 16, 2010");
INSERT INTO episodes VALUES (2, 9, "Alien Devastations", "Dec 23, 2010");
INSERT INTO episodes VALUES (2, 10, "Alien Contacts", "Dec 30, 2010");
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
