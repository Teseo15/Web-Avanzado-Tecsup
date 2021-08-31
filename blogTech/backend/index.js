import express from "express";
import historyRouter from "./components/history";
//import router from "./router";
import userRouter from "./components/user";

const app = express()
app.use(express.json());

app.use(express.urlencoded({extended: true})) ;
app.use("/api/v1/",userRouter);
app.use("/api/v1/history/",historyRouter);
const PUERTO= 9080
app.listen(PUERTO,()=>console.log('el servidor inicio en el puerto: '+PUERTO))