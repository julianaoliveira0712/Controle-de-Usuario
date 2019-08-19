let db = require("mssql");

let config = {
    user:"tower",
    password:"!Carbon6",
    server:"servercarbontower.database.windows.net",
    database:"carbontower",
    options:{
        encrypt:true
    }
}

let temConexao = false;

function sqlquery(query){
    if(temConexao == true){
        return global.connection.request().query(query)
            .then(resultado=>{
                return resultado.recordset;
            });
    }else{
        return db.connect(config)
            .then(connection=>{
                global.connection= connection;
                temConexao = true;
                return global.connection.request().query(query);

            })
            .then(resultado=>{
                return resultado.recordset;
            })

    }
}

module.exports= sqlquery;

//sqlquery("select * from t_user;").then(resultado=>{
  //  console.log(resultado);
//})