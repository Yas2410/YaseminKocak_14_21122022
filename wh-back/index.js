import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import EmployeeRoute from "./routes/EmployeeRoute.js";

//EXPRESS = Framework Backend qui fournit les outils pour les requêtes, le routage, etc
/*MONGOOSE = Module (POO) qui va créer une connexion entre 
MongDB(Système de gestion de BDD) et l'environnement d'exécution*/

//Ici, je vais établir la connexion avec la base de données
// "databaseUrl = url de connexion MongoDB
const app = express();
const databaseUrl =
  process.env.DATABASE_URL || "mongodb://localhost:27017/wh_db";
//Ajout l.17 sinon erreur (DeprecationWarning: Mongoose: the `strictQuery` option
//will be switched back to `false` by default in Mongoose 7)
mongoose.set("strictQuery", false);
mongoose.connect(databaseUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database Connected..."));

app.use(cors());
app.use(express.json());
app.use(EmployeeRoute);

app.listen(5000, () => console.log("Server up and running..."));
