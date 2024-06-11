import mongoose from "mongoose";


const schema = new mongoose.Schema({
  name: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  parentFolder: { type: mongoose.Schema.Types.ObjectId, ref: 'Folder', default: null },
});

const Folder = mongoose.model("folder", schema);

export default Folder;