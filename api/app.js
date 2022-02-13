const express = require ("express");
const multer = require ('multer')
const mimeTypes = require('mime-types')
const cors = require('cors')
const busboy = require ('connect-busboy')
const mongoose = require ("mongoose")
const Video = require ("./modelVideo")
const app = express()
const port = 4000
const options = {
    page:1,
    limit:10,
    page: 1, // cambiar página
}
app.use(cors())
app.use(busboy())
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
      },
    filename: function(req,file,cb){
        cb("",file.originalname)
    }
})
const upload = multer({
    storage: storage
})
app.get("/",(req,res) => {
   res.sendFile(__dirname + "/views/index.html")
})
app.post("/upload",upload.single("video"),(req,res) => {
    const {name,description,author} = req.body
    const {file} = req.file
    console.log(req.file.originalname)
   let video = new Video({
       name,
       description,
       author,
       path: req.file.originalname
   }) 
   video.save((err,video) => {
       err && res.status(500).send(err.message)
       res.status(200).send("video cargado")
   })
})
app.route("/getVideo").get((req,res) => {
    res.sendFile(__dirname + "/uploads/Captura de pantalla 2022-01-17 142711.png")
})
app.route("/getVideos").get((req,res) => {
    Video.paginate({},options,(err,videos) => {
        err && res.status(500).send(err.message)

        res.status(200).send(videos)
    })
})
mongoose.connect('mongodb://localhost:27017/camonapp')
.then(() => {
    app.listen(port, () => {
        console.log(`corriendo en puerto ${port}`)
    })
})
.catch(error => console.log(error));