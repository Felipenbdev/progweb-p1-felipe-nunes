
import express from "express";
import { logger } from "./middleware/logger.js";
import { errorHandler } from "./middleware/errorHandler.js";
import tutoresRoutes from "./routes/tutores.js";
import petsRoutes from "./routes/pets.js";

const app = express();

app.use(express.json());
app.use(logger);

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use("/tutores", tutoresRoutes);
app.use("/pets", petsRoutes);

app.use(errorHandler);

export default app;
