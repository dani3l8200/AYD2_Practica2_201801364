const { Schema, model } = require("mongoose");

const usuarioSchema = new Schema(
  {
    firstnames: { type:String, required: true },
    lastnames: { type: String, required: true },
    dpi: { type: Number, required: true, unique: true },
    accountNumber: { type: String , required: true,unique: true },
    balance: { type: Number , required: true},
    email: {type: String, required: true},
    password: {type: String , required: true}
  },
  {
    versionKey: false,
  }
);

module.exports = model('Users', usuarioSchema)