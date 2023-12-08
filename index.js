const express = require("express");  
const app = express();
const puerto=3000;
const mysql=require("mysql");

//Requiere actualizacion con el nuevo codigo
//const {nuevo, mostrar, eliminar}=require("./consultas");


const cors=require('cors');
const bodyparse=require("body-parser");


app.use(cors());
app.use(bodyparse.json());
app.use(bodyparse.urlencoded({extended:false}));

const connection =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"dbbeca",
});

connection.connect((err)=>{
    if(err) throw err;
    console.log("Conexion exitosa con DB ...");
})

//app.use(require("./routes/coreoRuta"));


app.get("/",(req,res)=>{
    res.send("Servidor corriendo");
})

app.post("/registro",(req,res)=>{
    let id_Estudiante=req.body.id_Estudiante;
    let saldo=0;
    let contraseña=req.body.contraseña;
    let fecha=new Date();
})
app.post("/login",(req,res)=>{
    let id_Cuenta=req.body.id_Cuenta;
    let contraseña=req.body.contraseña;
    
    nuevo(connection,{id_Cuenta:id_Cuenta},result=>{
        res.send(result);
    })
})
//Requiere actualizacion con el nuevo codigo 
/*app.post("/nuevo",(req,res)=>{
    let nombre=req.body.nombre;
    let apellido=req.body.apellido;
    let carrera=req.body.carrera;
    let fecha=req.body.fecha;
    let promedio=req.body.promedio;
    let genero=req.body.genero;
    let prepa=req.body.prepa;
    nuevo(connection,{nombre:nombre,apellido:apellido,prepa:prepa,carrera:carrera,fecha:fecha,genero:genero,promedio:promedio},result=>{
        res.send(result);
    });
})*/

/*app.post("/eliminar",(req,res)=>{
    let id=req.body.id;
    eliminar(connection,{id:id},result=>{
        res.send(result);
    });
})


app.get("/mostrar",(req,res)=>{
    mostrar(connection,result=>{
        res.send(result);
    })
})*/

app.listen(puerto, () => {
  console.log(`Servidor corriendo en el puerto `+puerto);
});
 
