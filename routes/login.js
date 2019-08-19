let express = require("express");
let router = express.Router();
let sqlquery = require("../database/db");
let BasicResponse = require("../modelo/BasicResponse");

router.post("/", (req,res)=>{
  let body = req.body;
  let username = body.username;
  let password = body.password;
  sqlquery(`select * from TableUser where username = '${username}' and password = '${password}'`)
    .then(resultado=>{
        if(resultado.length == 0){
            res.json(new BasicResponse(false, null, "Usuário não existe"));
        }else{
            res.json(new BasicResponse(true, null, "Login com sucesso"));
        }
    })
    .catch(erro=>{
        res.json(new BasicResponse(false,null, "Erro desconhecido: "+erro))
    })
    
})

module.exports=router;
