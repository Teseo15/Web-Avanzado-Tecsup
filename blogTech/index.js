import express from "express";

const app = express()
app.get ("/",(req,res)=>{
    res.status(200).json({
        message: "Hello world!"
    });
});
const PUERTO= 9080
app.listen(PUERTO,()=>console.log('el servidor inicio en el puerto: '+PUERTO))