const {MongoClient} = require('mongodb');
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const database = require('./database/database.js')
const uri = "mongodb+srv://hstecnologiateste1:HSTecnologia123@mcpapp.p4y3oar.mongodb.net/test"
const client = new MongoClient(uri);
const port = process.env.PORT || 8080;
let reqs = 0 ;
app.use(bodyParser.json())

app.get("/", async (req,res) =>{  
    res.send("pagina inicial mcm_app")
})
app.get("/log", async(req,res)=>{
    try{
        reqs++;
        if(reqs==1){
            await client.connect();
        }
        const verificarLog = await database.getItem(client,"01");
        res.send(verificarLog)

    }catch(err){
        res.send("Ocorreu um erro: "+err)
    }finally{
        reqs--
        if(reqs==0){
        await client.close();
        }
    } 
})
//rota para ver o total
app.get("/total", async(req,res)=>{
    try{
        reqs++;
        if(reqs==1){
            await client.connect();
        }
        const verificarTotal = await database.getItem(client,"02");
        res.send(verificarTotal)

    }catch(err){
        res.send("Ocorreu um erro: "+err)
    }finally{
        reqs--
        if(reqs==0){
        await client.close();
        }
    } 
})
//rota para ver o estado dos totalizadores
app.get("/zerar", async(req,res)=>{
    try{
        reqs++;
        if(reqs==1){
            await client.connect();
        }
        const verificarTotal = await database.getItem(client,"03");
        res.send(verificarTotal)

    }catch(err){
        res.send("Ocorreu um erro: "+err)
    }finally{
        reqs--
        if(reqs==0){
        await client.close();
        }
    } 
})
//rota para atualizar um produto pelo json
app.put("/log", async (req,res) =>{
    try{
        reqs++;
        if(reqs==1){
            await client.connect();
        }
        await database.updateLogById(client,req.body,"01")
        res.send( req.body);
    }catch(err){
        res.send("Ocorreu um erro: " + err)
    }finally{
        reqs--
        if(reqs==0){
        await client.close();
        }
    }
})
//rota para atualizar o total pelo json
app.put("/total", async (req,res) =>{
    try{
        reqs++;
        if(reqs==1){
            await client.connect();
        }
        await database.updateLogById(client,req.body,"02")
        res.send( req.body);
    }catch(err){
        res.send("Ocorreu um erro: " + err)
    }finally{
        reqs--
        if(reqs==0){
        await client.close();
        }
    }
})
//rota para atualizar o totalizador
app.put("/zerar", async (req,res) =>{
    try{
        reqs++;
        if(reqs==1){
            await client.connect();
        }
        await database.updateLogById(client,req.body,"03")
        res.send( req.body);
    }catch(err){
        res.send("Ocorreu um erro: " + err)
    }finally{
        reqs--
        if(reqs==0){
        await client.close();
        }
    }
})
      
app.listen(port, () =>{
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
})