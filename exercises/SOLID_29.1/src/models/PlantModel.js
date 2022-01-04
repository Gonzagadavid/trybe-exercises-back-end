const fs = require('fs');
const path = require('path');

class PlantModel {
  constructor() {
    this.dbPath = path.join(__dirname, '..', '..', 'db', 'defaultPlants.json');
  }

  getDb() {
    const dbJson = fs.readFileSync(this.dbPath, 'utf8');
    const db = JSON.parse(dbJson);

    return db;
  }

  postDb(content) {
    const contentJson = JSON.stringify(content);
    fs.writeFileSync(this.dbPath, contentJson);
  }

  generateId() {
    const db = this.getDb();
    const last = db.pop();
    return last.id + 1;
  }

  insertOne(item) {
    const db = this.getDb();
    const id = this.generateId();
    const itemId = { id, ...item };
    db.push(itemId);
    this.postDb(db);
    return itemId;
  }

  updateOne(id, item) {
    const db = this.getDb();
    const newDb = db.map((element) => (element.id === +id ? item : element));
    this.postDb(newDb);
  }

  getItemById(id) {
    const db = this.getDb();
    const item = db.find((itemDb) => itemDb.id === +id);
    return item;
  }

  removeItem(id) {
    const db = this.getDb();
    const newDb = db.filter((itemDb) => itemDb.id !== +id);
    this.postDb(newDb);
  }
}

module.exports = PlantModel;
