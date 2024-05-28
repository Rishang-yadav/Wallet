// import mongoose from "mongoose";

// const ImageSchema = new mongoose.Schema({
//   image: {
//     type: String,
//     required: true,
//   },
//   cardinal_address: {
//     type: String,
//     required: true,
//   },
//   ordinal_address: {
//     type: String,
//     required: true,
//   },
//   cardinal_pubkey: {
//     type: String,
//     required: true,
//   },
//   wallet: {
//     type: String,
//     required: true,
//   },
//   order_id: {
//     type: String,
//     unique: true,
//     required: true,
//   },
//   status: {
//     type: String,
//     enum: [
//       "pending",
//       "cancelled",
//       "funded",
//       "pending confirmation",
//       "inscribed",
//     ],
//     required: true,
//   },
// });

// const Image = mongoose.model("Image", ImageSchema);

// export default Image;
import mongoose from 'mongoose';

const { Schema } = mongoose;

const imageSchema = new Schema({
  image: {
    type: String,
    required: true,
  },
  cardinal_address: {
    type: String,
    required: true,
  },
  cardinal_pubkey: {
    type: String,
    required: true,
  },
  ordinal_address: {
    type: String,
    required: true,
  },
  ordinal_pubkey: {
    type: String,
    required: true,
  },
  wallet: {
    type: String,
    required: true,
  },
  order_id: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

// Check if the model already exists before defining it
const Image = mongoose.models.Image || mongoose.model('Image', imageSchema);

export default Image;
