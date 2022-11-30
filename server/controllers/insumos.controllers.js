
const Insumos = require("../models/insumos.model");

module.exports.get_all = (req, res) => {
    Insumos.find().sort({nombre: 1})
        .then(Insumos => res.json(Insumos))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
}

module.exports.create_insumo = (req, res) => {
    Insumos.create(req.body)
        .then(insumo => res.json(insumo))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
}

module.exports.get_insumo = (req, res) => {
    Insumos.findOne({_id: req.params.id})
        .then(insumo => res.json(insumo))
        .catch(err => res.status(400).json(err));
}

module.exports.update_insumo = (req, res) => {
    //new:true nos regresa el documento ya modificado
    //runValidators: true nos revisa una vez más las validaciones del modelo
    Insumos.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(insumo => res.json(insumo))
        .catch(err => res.status(400).json(err));
}

module.exports.delete_insumo = (req, res) => {
    Insumos.deleteOne({_id: req.params.id})
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err));
}
