import express from "express";
const app = express();
const PORT = process.env.PORT || 3001;

// Import Middlewares
import { setLanguage } from "./middlewares/language.middleware.js";

// Middlewares
app.use(setLanguage);

// Import routes
import indexRoutes from "./api/routes/index.routes.js";
import familiesRoutes from "./api/routes/families.routes.js";
import associationsRoutes from "./api/routes/associations.routes.js";
import breedsRoutes from "./api/routes/breeds.routes.js";
import traitsRoutes from "./api/routes/traits.routes.js";

// Routes
app.use(indexRoutes);
app.use(familiesRoutes);
app.use(associationsRoutes);
app.use(breedsRoutes);
app.use(traitsRoutes);

const server = app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
    console.log(`Database config: \nPORT: ${process.env.DB_HOST} \nUSER: ${process.env.DB_USER} \nPASSWORD: ${process.env.DB_PASSWORD} \nPORT: ${process.env.DB_PORT} \nNAME:${process.env.DB_NAME}`);
});

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;