export const response = ({req,res,ok = true,status = 200, data}) => {

    res.status(status).json({
        ok,data
    });
   

};
