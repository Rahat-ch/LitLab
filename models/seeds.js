// var db = require("../models");
// var syncOptions = { force: true };

// function seed() {
//   db.sequelize.sync(syncOptions).then(function() {
//     db.categories.create({ Type: "Poem" });
//     db.categories.create({ Type: "Song" });
//     db.categories.create({ Type: "Story" });
//     db.tags.create({ Tag: "Haiku", CategoryID: "1" });
//     db.tags.create({ Tag: "Limmerick", CategoryID: "1" });
//     db.tags.create({ Tag: "Sonnet", CategoryID: "1" });
//     db.tags.create({ Tag: "Rock", CategoryID: "2" });
//     db.tags.create({ Tag: "HipHop", CategoryID: "2" });
//     db.tags.create({ Tag: "Opera", CategoryID: "2" });
//     db.tags.create({ Tag: "Fable", CategoryID: "3" });
//     db.tags.create({ Tag: "FlashFiction", CategoryID: "3" });
//     db.tags.create({ Tag: "SketchStory", CategoryID: "3" });
//   });
// }
// seed();
// db.sequelize.close();
