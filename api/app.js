import express, { json } from "express";
import cors from "cors";
import helmet from "helmet";
import session from "express-session";

import authRoute from "./routes/auth/auth.js";

const app = express();

app.use(
	cors({
		origin: "*",
	})
);
app.use(json());
app.use(helmet());

app.use("/auth", authRoute);

export default app;
