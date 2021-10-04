import mongoose from 'mongoose'
const {Schema} = mongoose;

const artSchema = new Schema
  ({
    author: { type: String, required:[true, 'please add an author'] },
    title: { type: String, required: [true, 'please what is the title of your post'] },
    snippet: { type: String, required: [true, 'write a little intro about your post'] },
    body: { type: String, required: [true, 'you cannot submit an empty post, write something'] },
  },
  { timestamps: true });


const Art = mongoose.model('art', artSchema);
export default Art;
  

// img, date, title, body