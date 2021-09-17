import express from "express";
import { getComments,save,read,up,destroy } from "./controller";

const commentRouter = express.Router();

commentRouter.route("/").get(getComments);
commentRouter.route("/create").post(save);
commentRouter.route("/read/:id").get(read);
commentRouter.put("/update/:id",up);
commentRouter.route("/delete/:id").delete(destroy);
export default commentRouter;
