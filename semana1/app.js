const http = require('http');
const fs = require("fs");
/*
function hello(req,res){
    const html = fs.readFile("./index.html")

  res.write(html);
  res.end;

};*/
/*
const renderHtml = (req,res) =>{
    fs.readFile("./index.html",(err,html)=>{
        if(err){
            res.write("Hubo un error");
            res.end();
        }
        res.write(html);
        res.end();
    });
};*/

function ruta(ruta,res) {
    
    fs.readFile("./"+ruta+".html",(err,html)=>{
        if(err){
            res.write("Hubo un error");
            res.end();
        }
        res.write(html);
        res.end();
    });

}

const renderHtml = (req,res) =>{
    const {url} = req;

    if (url == "/") {
        ruta('index',res);
    }
    if(url=="/contacto"){
        ruta('contacto',res);
    } 
    if(url =="/catalogo"){
        ruta('catalogo',res);
    }
    if(url =="/nosotros"){
        ruta('nosotros',res);
    }
    if(url =="/nuestros"){
        ruta('nuestros',res);
    }
}
const server = http.createServer(renderHtml);
server.listen(9080);



