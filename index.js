import express from "express";
const app = express();
const port = process.env.PORT || 3001;

// Import routes
import indexRoutes from "./api/routes/index.routes.js";

// Routes
app.use(indexRoutes);

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;