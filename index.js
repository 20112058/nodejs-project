const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/api/esan",(req,res)=>{
    //res.sendStatus(200);
    res.json("Hola");

});

app.listen(port, () => {
    console.log("Servidor ejecutándose en: http://localhost:" + port)
});