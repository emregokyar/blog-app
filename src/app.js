import express from "express";
import indexRoutes from "./routes/index.js"; //Importing routes

//Path Imports
import path from "path";
import { fileURLToPath } from "url";

//Setting up __dirname  variable
const __filename= fileURLToPath(import.meta.url);
const __dirname= path.dirname(__filename);

//Initializing app
const app = express();
const PORT = 3000;

//Setting view engine
app.set("views", path.join(__dirname, "views"))
app.set('view engine', 'ejs');

//Middleware set up - Functions that process requests before reaching the route handlers
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Port set up
app.listen(PORT, () => {
    console.log("Server runnin on port: " + PORT);
})

// Contoller Routes
app.use("/", indexRoutes);

