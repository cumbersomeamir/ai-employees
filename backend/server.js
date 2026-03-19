const cors = require("cors");
const express = require("express");

const env = require("./src/config/env");
const routes = require("./src/routes");
const errorHandler = require("./src/middleware/errorHandler");

const app = express();

app.use(
  cors({
    origin: env.clientOrigin,
  })
);
app.use(express.json());
app.use(routes);
app.use(errorHandler);

app.listen(env.port, () => {
  // Keeping startup output intentionally small for local dev.
  console.log(`ai-employees backend listening on http://localhost:${env.port}`);
});
