export const greet = (req,res)=>{
    res.status(200).json({
        status:200,
        message: " ola mundo"
    });
};
export const greetApi = (req,res)=>{
    res.status(200).json({
        status:200,
        message: "Hola mundo de api ui"
    });
};
