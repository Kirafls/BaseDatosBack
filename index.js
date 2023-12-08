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
    database:"bd",
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

app.post('/agregarDocumento', (req, res) => {
    const { nombreDocumento, descripcionDocumento, descripcionSolicitud, fechaSolicitud, comentarios, tipobeca } = req.body;
  
    const sql = `INSERT INTO documentos (Nombre, Descripcion) VALUES (?, ?)`;
  
    connection.query(sql, [nombreDocumento, descripcionDocumento], (err, result) => {
      if (err) {
        console.error('Error al agregar el documento:', err);
        return res.status(500).send('Error interno del servidor');
      }
      console.log('Documento agregado correctamente');
    });
  
    const sql2 = `INSERT INTO tipo_beca (Nombre, Descripcion) VALUES (?, ?)`;
    const nombreTipoBeca = (tipobeca === '1') ? 'Calificacion' : 'Deportes';
    connection.query(sql2, [nombreTipoBeca, descripcionSolicitud], (err, result) => {
      if (err) {
        console.error('Error al agregar el documento:', err);
        return res.status(500).send('Error interno del servidor');
      }
      console.log('Documento agregado correctamente');
      res.status(200).send('Documento agregado correctamente');
    });
  });

  app.get('/mostrarDocumentos', (req, res) => {
    const sql = 'SELECT beca.*, tipo_beca.Nombre AS TipoBeca FROM beca INNER JOIN tipo_beca ON beca.id_Tipo = tipo_beca.id_Tipo';
    
    connection.query(sql, (err, result) => {
        if (err) {
            console.error('Error al obtener becas:', err);
            res.status(500).send('Error interno del servidor');
        } else {
            res.status(200).json(result);
        }
    });
});



// En tu servicio de Express
app.delete('/eliminarDocumento/:id', (req, res) => {
    const idDocumento = req.params.id;
    const sql = 'DELETE FROM documentos WHERE id_Documentos = ?'; // Ajusta según la estructura de tu tabla
    const sql2= 'DELETE FROM documentos WHERE id_Tipo = ?';
    connection.query(sql, [idDocumento], (err, result) => {
        if (err) {
            console.error('Error al eliminar documento:', err);
            res.status(500).send('Error interno del servidor');
        } else {
            console.log('Documento eliminado correctamente');
            res.status(200).send('Documento eliminado correctamente');
        }
    });

});



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
 
