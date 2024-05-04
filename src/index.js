const express =require("express")
const app = express()
console.clear()
//middlewares 
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes
app.use(require("./routes/index"))

app.listen(4444 , () =>{
    console.log("server en el puerto 4444")
})
