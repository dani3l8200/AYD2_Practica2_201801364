const { Schema, model } = require("mongoose");

const reportSchema = new Schema(
    {
        name1: { type: String, required: true }, // campo conformado por los nombres + apellidos
        name2: { type: String, required: false }, // la idea es que se pueda sacar del numero de cuenta2  
        accountNumber1: { type: String, required: true },
        accountNumber2: { type: String, required: true },
        balance1: { type: Number, required: true },
        balance2: { type: Number, required: true },
        transferredAmount: { type: Number, required: true },
    },
    {
        versionKey: false,
    }
);

module.exports = model('Reports', reportSchema)