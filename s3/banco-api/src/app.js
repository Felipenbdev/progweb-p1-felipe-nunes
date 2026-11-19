
import express from "express";
import clientesRoutes from "./routes/clientes.js";
import { logger } from "./middleware/logger.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(express.json());

app.use(logger);

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/clientes", clientesRoutes);

app.use(errorHandler);

export default app;
