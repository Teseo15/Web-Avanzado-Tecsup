import express from "express";
import {  addhistory, readhistory,update,eliminar} from "./controller";

const historyRouter = express.Router();
historyRouter.route("/create").post(addhistory);
historyRouter.route("/read").get(readhistory);
historyRouter.put("/uphistory",update);
historyRouter.route("/delete").delete(eliminar);

export default historyRouter;