
const Cursos = require("../models/cursos.model");

module.exports.get_all = (req, res) => {
    Cursos.find().sort({nombre: 1})
        .then(curso => res.json(curso))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
}

module.exports.create_curso = (req, res) => {
    Cursos.create(req.body)
        .then(curso => res.json(curso))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
}

module.exports.get_curso = (req, res) => {
    Cursos.findOne({_id: req.params.id})
        .then(curso => res.json(curso))
        .catch(err => res.status(400).json(err));
}

module.exports.update_curso = (req, res) => {
    //new:true nos regresa el documento ya modificado
    //runValidators: true nos revisa una vez más las validaciones del modelo
    Cursos.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(curso => res.json(curso))
        .catch(err => res.status(400).json(err));
}

module.exports.delete_curso = (req, res) => {
    Cursos.deleteOne({_id: req.params.id})
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err));
}
