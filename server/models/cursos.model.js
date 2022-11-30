const mongoose = require("mongoose");

const EsquemaCursos = new mongoose.Schema({
    nombre_curso: {
        type: String,
        required: [true, "Nombre obligatorio"],
        minLength: [3, "Nombre debe tener almenos 3 caracteres"]
    },
    descripcion: {
        type: String
    },
    video: {
        type: String
    },
    imagen: {
        type: String
    }
    
}, {timestamps: true, versionKey: false})

//timestamps crea los campos de createAt y updateAt
//versionKey: false elimina el atributo _v

const Cursos = mongoose.model("Cursos", EsquemaCursos);

module.exports = Cursos;