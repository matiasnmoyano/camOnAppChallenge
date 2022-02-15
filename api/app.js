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
    console.log(req.file.originalname)
   let video = new Video({
       name,
       description,
       author,
       path: req.file.originalname,
       fav:false
   }) 
   video.save((err,video) => {
       err && res.status(500).send(err.message)
       res.status(200).sendFile(__dirname + "/views/succes.html")
   })
})
app.route("/getVideo/:id").get((req,res) => {
    const {id} = req.params
    Video.findById(id,function(err,video){
        err && res.status(500).send(err.message)
        res.send(video)
    })
})
app.route("/addFav/:id").post((req,res) => {
    const {id} = req.params
    Video.findOneAndUpdate({_id:id},{fav:true},function(err,video){
        err && res.status(500).send(err.message)
        console.log(id)
        console.log(video._id)
        res.status(200).send(video)
    })

})
app.route("/quitFav/:id").post((req,res) => {
    const {id} = req.params
    Video.findOneAndUpdate({_id:id},{fav:false},function(err,video){
        err && res.status(500).send(err.message)
        console.log(id)
        console.log(video._id)
        res.status(200).send(video)
    })

})
app.route("/getVideos").get((req,res) => {
    Video.paginate({},options,(err,videos) => {
        err && res.status(500).send(err.message)
        res.status(200).send(videos)
    })
})
app.route("/deleteVideo/:id").delete((req,res) => {
    const {id} = req.params
    Video.findByIdAndDelete({_id:id},(err,video) => {
        err && res.status(500).send(err.message)
        res.status(200).send(video)
    })
})
mongoose.connect('mongodb://localhost:27017/camonapp')
.then(() => {
    app.listen(port, () => {
        console.log(`corriendo en puerto ${port}`)
    })
})
.catch(error => console.log(error));