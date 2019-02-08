USE litlabDB;

INSERT INTO categories (`Type`) VALUES ("Poem");
INSERT INTO categories (`Type`) VALUES ("Song");
INSERT INTO categories (`Type`) VALUES ("Story");

INSERT INTO Tags (Tag, CategoryID) VALUES ("Haiku", "1");
INSERT INTO Tags (Tag, CategoryID) VALUES ("Limmerick", "1");
INSERT INTO Tags (Tag, CategoryID) VALUES ("Sonnet", "1");
INSERT INTO Tags (Tag, CategoryID) VALUES ("Rock", "2");
INSERT INTO Tags (Tag, CategoryID) VALUES ("HipHop", "2");
INSERT INTO Tags (Tag, CategoryID) VALUES ("Opera", "2");
INSERT INTO Tags (Tag, CategoryID) VALUES ("Fable", "3");
INSERT INTO Tags (Tag, CategoryID) VALUES ("FlashFicton", "3");
INSERT INTO Tags (Tag, CategoryID) VALUES ("SketchStory", "3");
