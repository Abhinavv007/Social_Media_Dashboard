import mongoose from "mongoose";

const modelSchema = mongoose.Schema({
    imageurl: String,
    description: String,
    postedBy:String
   
});

const SocialModel = new mongoose.model("social", modelSchema);

export default SocialModel;
