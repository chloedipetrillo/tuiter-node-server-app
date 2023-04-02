import mongoose from 'mongoose';
const schema = mongoose.Schema({
    topic: String,
    userName: String,
    title: String,
    time: String,
    image: String,
    liked: Boolean,
    disliked: Boolean,
    replies: Number,
    retuits: Number,
    likes: Number,
    dislikes: Number,
    tuit: String,
    handle: String,
}, {collection: 'tuits'});
export default schema;

