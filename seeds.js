function seed(db, syncOptions) {
  db.Category.create({ Type: "Poem" });
  db.Category.create({ Type: "Song" });
  db.Category.create({ Type: "Story" });

  db.Tags.create({ Tag: "Acrostic", CategoryID: "1" });
  db.Tags.create({ Tag: "Ballad", CategoryID: "1" });
  db.Tags.create({ Tag: "Elegy", CategoryID: "1" });
  db.Tags.create({ Tag: "Epic", CategoryID: "1" });
  db.Tags.create({ Tag: "Epitaph", CategoryID: "1" });
  db.Tags.create({ Tag: "Free verse", CategoryID: "1" });
  db.Tags.create({ Tag: "Haiku", CategoryID: "1" });
  db.Tags.create({ Tag: "Limerick", CategoryID: "1" });
  db.Tags.create({ Tag: "Narrative", CategoryID: "1" });
  db.Tags.create({ Tag: "Ode", CategoryID: "1" });
  db.Tags.create({ Tag: "Pastoral", CategoryID: "1" });
  db.Tags.create({ Tag: "Quatrain", CategoryID: "1" });
  db.Tags.create({ Tag: "Refrain", CategoryID: "1" });
  db.Tags.create({ Tag: "Sonnet", CategoryID: "1" });
  db.Tags.create({ Tag: "Lyric", CategoryID: "1" });
  db.Tags.create({ Tag: "Tanka", CategoryID: "1" });

  db.Tags.create({ Tag: "Blues", CategoryID: "2" });
  db.Tags.create({ Tag: "Country", CategoryID: "2" });
  db.Tags.create({ Tag: "Electronic", CategoryID: "2" });
  db.Tags.create({ Tag: "Folk", CategoryID: "2" });
  db.Tags.create({ Tag: "Gospel", CategoryID: "2" });
  db.Tags.create({ Tag: "Hip-Hop", CategoryID: "2" });
  db.Tags.create({ Tag: "Indie", CategoryID: "2" });
  db.Tags.create({ Tag: "Jazz", CategoryID: "2" });
  db.Tags.create({ Tag: "Metal", CategoryID: "2" });
  db.Tags.create({ Tag: "Opera", CategoryID: "2" });
  db.Tags.create({ Tag: "Pop", CategoryID: "2" });
  db.Tags.create({ Tag: "Punk", CategoryID: "2" });
  db.Tags.create({ Tag: "R&B", CategoryID: "2" });
  db.Tags.create({ Tag: "Reggae", CategoryID: "2" });
  db.Tags.create({ Tag: "Rock", CategoryID: "2" });
  db.Tags.create({ Tag: "World", CategoryID: "2" });

  db.Tags.create({ Tag: "Adventure", CategoryID: "3" });
  db.Tags.create({ Tag: "Children", CategoryID: "3" });
  db.Tags.create({ Tag: "Educational", CategoryID: "3" });
  db.Tags.create({ Tag: "Fantasy", CategoryID: "3" });
  db.Tags.create({ Tag: "Historical", CategoryID: "3" });
  db.Tags.create({ Tag: "Literary", CategoryID: "3" });
  db.Tags.create({ Tag: "Mystery", CategoryID: "3" });
  db.Tags.create({ Tag: "Philosophical", CategoryID: "3" });
  db.Tags.create({ Tag: "Political", CategoryID: "3" });
  db.Tags.create({ Tag: "Pulp", CategoryID: "3" });
  db.Tags.create({ Tag: "Religious", CategoryID: "3" });
  db.Tags.create({ Tag: "Romantic", CategoryID: "3" });
  db.Tags.create({ Tag: "Horror", CategoryID: "3" });
  db.Tags.create({ Tag: "Sci-Fi", CategoryID: "3" });
  db.Tags.create({ Tag: "Thriller", CategoryID: "3" });
  db.Tags.create({ Tag: "Western", CategoryID: "3" });

  db.User.create({
    username: "sfattal",
    email: "sheriffattal94@gmail.com",
    password: "12345"
  });
  db.Posts.create({
    PostTitle: "TEST",
    PostContent: "TEST2",
    CategoryId: "1",
    UserId: "1"
  });
}

module.exports = seed;
