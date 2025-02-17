import express from 'express'

//creamos una instancia de express
const app = express();

//configuramos el puerto en el que escuchara el servidor
const PORT = 3000;

//ruta basica
app.get('/user/:id',(req, res) =>{
    let id = req.params.id;
    console.log(`id de usuario ${id}`)
    res.send(`id de usuario ${id}`);
});

app.get('/search',(req, res) =>{
    let {usuario,edad} = req.query;
    console.log(`nombre de usuario ${usuario}`);
    console.log(`edad de usuario ${edad}`);

    res.send(`nombre de usuario ${usuario} edad ${edad}`);
});

//inciamos el servidor 
app.listen(PORT,()=>{
    console.log(`servidor corriendo en http//:localhost${PORT}`);
})