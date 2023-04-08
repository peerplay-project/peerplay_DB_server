const PouchDB = require("pouchdb");
PouchDB.plugin(require("comdb"));
const database_list = ["nodes","accounts"];
let databases = [];
console.log("Peerplay DB Server Starting");
const password = process.argv[2] || "" // Set Default Password here or pass it as an argumen
database_list.forEach((db_name) => {
  console.log(`Starting Database ${db_name}`);
  const database = new PouchDB(db_name);
  database.setPassword(password);
  databases.push(database);
  console.log(`Started Database ${db_name}`);
});
console.log("Peerplay DB Server Started on Port 5984");
while(true){
  // Keep the process alive
}