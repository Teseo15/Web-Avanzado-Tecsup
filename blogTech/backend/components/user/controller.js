import { response,reque } from "../../../network";
let usuario = {
    email:'hoja@gmail.com',
    password: '123'
   };
export const login = (req,res)=>{
    usuario=req.body;
    return response({
        res,
        data: {usuario},
    });
};

export const signup = (req,res)=> {
    const { name,lastname,email,password} = req.body;
    return response({
    res,    
    data: { name,lastname,email,password},

    });
};
export const show = (req,res)=> {

    return response({
        res,
        status:200,
        data:usuario
    });
};
export const update = (req,res)=> {
    const { name,lastname,email,password} = req.body;
    return response({
    res,    
    data: { name,lastname,email,password},

    });
};
export const reset = (req,res)=>{
    const {email}=req.body;
    return response({
        res,
        data:email,
    });
};
export const eliminar= (req,res)=>{
    
    return response({
        res,
    });
};