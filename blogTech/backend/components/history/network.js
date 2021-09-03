import express from "express";
import { create,read,update,destroy} from "./controller";

const historyRouter = express.Router();

historyRouter.route("/create").post(create);
historyRouter.route("/read/:id").get(read);
historyRouter.put("/update/:id",update);
historyRouter.route("/delete/:id").delete(destroy);

export default historyRouter;