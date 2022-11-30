const CursosControllers = require("../controllers/cursos.controllers");
const InsumosControllers = require("../controllers/insumos.controllers");
const ModeladosControllers = require("../controllers/modelados.controllers");
const UserControllers = require("../controllers/user.controllers");

const {authenticate} = require("../config/jwt.config");

module.exports = app => {
    //Cursos

    app.get("/api/cursos", authenticate, CursosControllers.get_all);
    app.post("/api/cursos/new", authenticate, CursosControllers.create_curso);
    app.get("/api/cursos/:id", authenticate, CursosControllers.get_curso);
    app.put("/api/cursos/:id", authenticate, CursosControllers.update_curso);
    app.delete("/api/cursos/:id", authenticate, CursosControllers.delete_curso);

    //Insumos

    app.get("/api/insumos", authenticate, InsumosControllers.get_all);
    app.post("/api/insumos/new", authenticate, InsumosControllers.create_insumo);
    app.get("/api/insumos/:id", authenticate, InsumosControllers.get_insumo);
    app.put("/api/insumos/:id", authenticate, InsumosControllers.update_insumo);
    app.delete("/api/insumos/:id", authenticate, InsumosControllers.delete_insumo);

    //Modelados

    app.get("/api/modelados", authenticate, ModeladosControllers.get_all);
    app.post("/api/modelados/new", authenticate, ModeladosControllers.create_modelado);
    app.get("/api/modelados/:id", authenticate, ModeladosControllers.get_modelado);
    app.put("/api/modelados/:id", authenticate, ModeladosControllers.update_modelado);
    app.delete("/api/modelados/:id", authenticate, ModeladosControllers.delete_modelado);

    //Usuario

    app.post("/api/register", UserControllers.register);
    app.post("/api/login", UserControllers.login);
    app.get("/api/logout", UserControllers.logout);



    app.get('/api/vistaUsuario/:rol', authenticate, UserControllers.get_admi)
}