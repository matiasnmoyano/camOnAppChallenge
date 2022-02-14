const mongoose  = require("mongoose")
const Schema = mongoose.Schema;
const mongoosePaginate = require ('mongoose-paginate-v2')
const VideoSchema = new Schema ({
    name: {type: String},
    description : {type: String},
    author:{type: String},
    path: {type: String}
})
VideoSchema.plugin(mongoosePaginate)

module.exports = Video = mongoose.model("Video", VideoSchema)