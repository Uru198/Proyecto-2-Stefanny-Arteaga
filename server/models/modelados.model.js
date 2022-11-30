const mongoose = require("mongoose");

const EsquemaModel = new mongoose.Schema({
    categoria: {
        type: String,
        required: [true, "Categoria obligatoria"],
        
    },
    estilo: {
        type: String,
        minLength: [3, "Estilo debe tener almenos 2 caracteres"]

    },
    nombre_modelado: {
        type: String,
        required: [true, "Nombre obligatorio"],
        minLength: [3, "Nombre debe tener almenos 3 caracteres"]
    },
    imagen: {
        type: String,
    },
    precio: {
        type: String,
        required: [true, "Precio obligatorio"]
    }
    
}, {timestamps: true, versionKey: false})

//timestamps crea los campos de createAt y updateAt
//versionKey: false elimina el atributo _v

const Model = mongoose.model("Modelados", EsquemaModel);

module.exports = Model;