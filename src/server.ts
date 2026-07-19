import app from "./app.js";
import { db } from "./config/database.js";
import { config } from "./config/index.js";

async function bootstrap() {
  try {
    await db.query("SELECT NOW()");
    console.log("Database connected");

    app.listen(config.port, () => {
      console.log(`Server running on port ${config.port}`);
    });
  } catch (error) {
    console.error("Failed to start server", error);
    process.exit(1);
  }
}

bootstrap();
