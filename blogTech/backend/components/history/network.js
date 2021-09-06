import express from "express";
import { create,read,up,destroy} from "./controller";

const historyRouter = express.Router();

historyRouter.route("/create").post(create);
historyRouter.route("/read/:id").get(read);
historyRouter.put("/update/:id",up);
historyRouter.route("/delete/:id").delete(destroy);

export default historyRouter;