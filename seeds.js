function seed(db, syncOptions) {
  db.category.create({ Type: "Poem" });
  db.category.create({ Type: "Song" });
  db.category.create({ Type: "Story" });

  db.tags.create({ Tag: "Acrostic", CategoryID: "1" });
  db.tags.create({ Tag: "Ballad", CategoryID: "1" });
  db.tags.create({ Tag: "Elegy", CategoryID: "1" });
  db.tags.create({ Tag: "Epic", CategoryID: "1" });
  db.tags.create({ Tag: "Epitaph", CategoryID: "1" });
  db.tags.create({ Tag: "Free verse", CategoryID: "1" });
  db.tags.create({ Tag: "Haiku", CategoryID: "1" });
  db.tags.create({ Tag: "Limerick", CategoryID: "1" });
  db.tags.create({ Tag: "Narrative", CategoryID: "1" });
  db.tags.create({ Tag: "Ode", CategoryID: "1" });
  db.tags.create({ Tag: "Pastoral", CategoryID: "1" });
  db.tags.create({ Tag: "Quatrain", CategoryID: "1" });
  db.tags.create({ Tag: "Refrain", CategoryID: "1" });
  db.tags.create({ Tag: "Sonnet", CategoryID: "1" });
  db.tags.create({ Tag: "Lyric", CategoryID: "1" });
  db.tags.create({ Tag: "Tanka", CategoryID: "1" });

  db.tags.create({ Tag: "Blues", CategoryID: "2" });
  db.tags.create({ Tag: "Country", CategoryID: "2" });
  db.tags.create({ Tag: "Electronic", CategoryID: "2" });
  db.tags.create({ Tag: "Folk", CategoryID: "2" });
  db.tags.create({ Tag: "Gospel", CategoryID: "2" });
  db.tags.create({ Tag: "Hip-Hop", CategoryID: "2" });
  db.tags.create({ Tag: "Indie", CategoryID: "2" });
  db.tags.create({ Tag: "Jazz", CategoryID: "2" });
  db.tags.create({ Tag: "Metal", CategoryID: "2" });
  db.tags.create({ Tag: "Opera", CategoryID: "2" });
  db.tags.create({ Tag: "Pop", CategoryID: "2" });
  db.tags.create({ Tag: "Punk", CategoryID: "2" });
  db.tags.create({ Tag: "R&B", CategoryID: "2" });
  db.tags.create({ Tag: "Reggae", CategoryID: "2" });
  db.tags.create({ Tag: "Rock", CategoryID: "2" });
  db.tags.create({ Tag: "World", CategoryID: "2" });

  db.tags.create({ Tag: "Adventure", CategoryID: "3" });
  db.tags.create({ Tag: "Children", CategoryID: "3" });
  db.tags.create({ Tag: "Educational", CategoryID: "3" });
  db.tags.create({ Tag: "Fantasy", CategoryID: "3" });
  db.tags.create({ Tag: "Historical", CategoryID: "3" });
  db.tags.create({ Tag: "Literary", CategoryID: "3" });
  db.tags.create({ Tag: "Mystery", CategoryID: "3" });
  db.tags.create({ Tag: "Philosophical", CategoryID: "3" });
  db.tags.create({ Tag: "Political", CategoryID: "3" });
  db.tags.create({ Tag: "Pulp", CategoryID: "3" });
  db.tags.create({ Tag: "Religious", CategoryID: "3" });
  db.tags.create({ Tag: "Romantic", CategoryID: "3" });
  db.tags.create({ Tag: "Horror", CategoryID: "3" });
  db.tags.create({ Tag: "Sci-Fi", CategoryID: "3" });
  db.tags.create({ Tag: "Thriller", CategoryID: "3" });
  db.tags.create({ Tag: "Western", CategoryID: "3" });
}

module.exports = seed;
