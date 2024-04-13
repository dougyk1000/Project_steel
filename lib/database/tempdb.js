  
  const mongoose = require('mongoose');  
  const TempDb = new mongoose.Schema({
    id: { type: String,  unique: true ,required: true, default:"𝚸𝚪𝚯𝐉𝚵𝐂𝚻_𝐒𝚻𝚵𝚵𝐋"},
    creator: { type: String, default: "𝐷𝛩𝑈𝐺𝑌_𝛫1000" },
    data: { type: Object, default: {} }
  });  
  const dbtemp = mongoose.model("dbtemp", TempDb)
  module.exports = { dbtemp }
  
