var db = require("./");
var syncOptions = { force: true };
console.log(db.sequelize);
function seed() {
  db.sequelize.sync(syncOptions).then(function() {
    db.category.create({ Type: "Poem" });
    db.category.create({ Type: "Song" });
    db.category.create({ Type: "Story" });
    db.tags.create({ Tag: "Haiku", CategoryID: "1" });
    db.tags.create({ Tag: "Limmerick", CategoryID: "1" });
    db.tags.create({ Tag: "Sonnet", CategoryID: "1" });
    db.tags.create({ Tag: "Rock", CategoryID: "2" });
    db.tags.create({ Tag: "HipHop", CategoryID: "2" });
    db.tags.create({ Tag: "Opera", CategoryID: "2" });
    db.tags.create({ Tag: "Fable", CategoryID: "3" });
    db.tags.create({ Tag: "FlashFiction", CategoryID: "3" });
    db.tags.create({ Tag: "SketchStory", CategoryID: "3" });
  });
}
seed().then(function() {
  console.log("closing connection");
  db.close();
});
