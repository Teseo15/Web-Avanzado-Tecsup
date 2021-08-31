import express from "express";

const router = express.Router();

router.get ("/",(req,res)=>{
    res.status(200).json({
        status:200,
        message: "Hello world!"
    });
});
router.get("/",greet);
router.route("/api".get(greetApi));

//Se usa export default solo cuando es un metodo
export default router;
