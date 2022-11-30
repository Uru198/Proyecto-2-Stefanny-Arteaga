const mongoose = require("mongoose");

const EsquemaInsumos = new mongoose.Schema({
    categoriaInsumos: {
        type: String,
        required: [true, "Categoria obligatoria"],
        
    },
    subCategoria: {
        type: String,

    },
    nombre: {
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

const Insumos = mongoose.model("Insumos", EsquemaInsumos);

module.exports = Insumos;