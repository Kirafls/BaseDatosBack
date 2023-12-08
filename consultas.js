const mysql =require("mysql");
//Codigos anteriores base para la creacion del nuevo codigo
function login(conection,data,callback){
    let query="SELECT 'contraseña' WHERE Id=? "
}
function registro(conection,data,callback){
    let insertQuery="INSERT INTO `cuenta`(`id_Cuenta`, `id_Estudiante`, `saldo`, `contraseña`, `fecha_creacion`) VALUES (?,?,?,?,?)";
}
/*function nuevo(conection,data,callback){
    let insertQuery="INSERT INTO `user`(`Nombre`, `Apellido`, `Prepa`, `Carrera`, `Fecha_na`, `Genero`, `Promedio`) VALUES (?,?,?,?,?,?,?)";
    let query =mysql.format(insertQuery, [data.nombre,data.apellido,data.prepa,data.carrera,data.fecha,data.genero,data.promedio]);
    conection.query(query,function(err,result){
        if(err) throw err;
        callback(result);
    });
}

function mostrar(conection,callback){
    let query="SELECT * FROM `user`";
    conection.query(query,function(err,result){
        if(err) throw err;
        callback(result);
    });
}
function eliminar(conection,data,callback){
    let insertQuery="DELETE FROM `user` WHERE `ID`=?";
    let query =mysql.format(insertQuery, [data.id]);
    conection.query(query,function(err,result){
        if(err) throw err;
        callback(result);
    });
}*/

module.exports={login,registro};