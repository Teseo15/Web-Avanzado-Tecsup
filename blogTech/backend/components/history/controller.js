import { response,reque } from "../../../network";
let libro = {
    id:'1',
    title:'El Tungsteno',
    author:"Cesar Vallejo",
    text:"Es una novela iniciadora del relismo social en el Perú",
    datetime:"30/03/1998"
   };
export const addhistory = (req,res)=>{
    const {id,title,author,text,datetime}=req.body;
    return response({
        res,
        data: {id,title,author,text,datetime},
    });
};

export const readhistory = (req,res)=>{
 
    return response({
        res,
        status:200,
        data:libro
    });
};
export const update = (req,res)=> {
    const { name,lastname,email,password} = req.body;
    return response({
    res,    
    data: { name,lastname,email,password},

    });
};
export const eliminar= (req,res)=>{
    
    return response({
        res,
    });
};