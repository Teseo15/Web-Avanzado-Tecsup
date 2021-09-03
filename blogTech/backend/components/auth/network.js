import express from "express";
import { login, signUp, update } from "./controller";

const authRouter = express.Router();

// ----------------------------------------------------------------
authRouter.route("/login").post(login);
authRouter.route("/signUp").post(signUp);

// ----------------------------------------------------------------

export default authRouter;
