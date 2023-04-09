const PouchDB = require("pouchdb");
const port = parseInt(process.argv[2]) || 5984;
// Liste des bases de données à créer et configurer
const database_list = ["nodes", "accounts"];
var app = require('express-pouchdb')({
  overrideMode: {
    include: ['routes/fauxton']
  }
});
// when not specifying PouchDB as an argument to the main function, you
// need to specify it like this before requests are routed to ``app``
app.setPouchDB(PouchDB);
// Création et configuration des bases de données
database_list.forEach((db_name) => {
  console.log(`Starting Database ${db_name}`);
  new PouchDB(db_name);
  console.log(`Started Database ${db_name}`);
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`PouchDB Server listening on port ${port}`);
});
