import express from "express";
import { login, signup,show,update,reset,eliminar} from "./controller";

const userRouter = express.Router();
userRouter.route("/login").post(login);
userRouter.route("/signup").post(signup);
userRouter.get("/show",show);
userRouter.put("/update",update);
userRouter.route("/reset").post(reset);
userRouter.route("/delete").delete(eliminar);

export default userRouter;