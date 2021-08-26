import express from "express";
import router from "./router";

const app = express()
app.use(router);
const PUERTO= 9080
app.listen(PUERTO,()=>console.log('el servidor inicio en el puerto: '+PUERTO))