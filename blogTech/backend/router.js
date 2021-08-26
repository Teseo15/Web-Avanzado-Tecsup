import express from "express";

const router = express.Router();

router.get ("/",(req,res)=>{
    res.status(200).json({
        status:200,
        message: "Hello world!"
    });
});
router.get("/api",(erq,res)=>{
    res.status(200).json({
        status:200,
        message:"esto es desde router felicidades"
    });
});
export default router;
