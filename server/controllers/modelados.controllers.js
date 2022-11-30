
const Model = require("../models/modelados.model");


module.exports.get_all = (req, res) => {
    Model.find().sort({nombre_modelado: 1})
        .then(Modelados => res.json(Modelados))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
}

module.exports.create_modelado = (req, res) => {
    Model.create(req.body)
        .then(modelado => res.json(modelado))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
}

module.exports.get_modelado = (req, res) => {
    Model.findOne({_id: req.params.id})
        .then(modelado => res.json(modelado))
        .catch(err => res.status(400).json(err));
}

module.exports.update_modelado = (req, res) => {
    //new:true nos regresa el documento ya modificado
    //runValidators: true nos revisa una vez más las validaciones del modelo
    Model.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(modelado => res.json(modelado))
        .catch(err => res.status(400).json(err));
}

module.exports.delete_modelado = (req, res) => {
    Model.deleteOne({_id: req.params.id})
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err));
}


