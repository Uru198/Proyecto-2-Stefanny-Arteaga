import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Error from './Componentes/Error';
import Inicio from './Componentes/Inicio';
import ModalInicioSesion from './Componentes/ModalInicioSesion';
import ModalRegistro from './Componentes/ModalRegistro';
import QuienSoy from './Componentes/QuienSoy';
import InicioCliente from  './Componentes/InicioSesion/InicioCliente';
import QuienSoyCliente from './Componentes/InicioSesion/QuienSoyCliente';
import ModeladoAnimalesCliente from './Componentes/InicioSesion/ModeladoAnimalesCliente';
import ModeladoInfantilCliente from './Componentes/InicioSesion/ModeladoInfantilCliente';
import ModeladoNoviosCliente from './Componentes/InicioSesion/ModeladoNoviosCliente';
import InicioAdmi from './Componentes/Administrador/InicioAdmi';
import QuienSoyAdmi from './Componentes/Administrador/QuienSoyAdmi';
import ModeladoAnimales from './Componentes/Administrador/Modelados/ModeladoAnimales';
import ModeladoInfantil from './Componentes/Administrador/Modelados/ModeladoInfantil';
import ModeladoNovios from './Componentes/Administrador/Modelados/ModeladoNovios';
import NuevoModeladoInfantil from './Componentes/Administrador/Modelados/NuevoModeladoInfantil';
import ActualizarModeladoInfantil from './Componentes/Administrador/Modelados/ActualizarModeladoInfantil';
import InsumosCortadores from './Componentes/Administrador/Insumos/InsumosCortadores';
import InsumoMoldesSilicona from './Componentes/Administrador/Insumos/InsumosMoldesSilicona';
import InsumoTonalizadores from './Componentes/Administrador/Insumos/InsumosTonalizadores';
import NuevoInsumo from './Componentes/Administrador/Insumos/NuevoInsumo';
import ActualizarInsumoCortadores from './Componentes/Administrador/Insumos/ActualizarInsumoCortadores';
import InsumosCortadoresCliente from './Componentes/InicioSesion/InsumosCortadoresCliente';
import InsumosMoldesSiliconaCliente from './Componentes/InicioSesion/InsumosMoldesSiliconaCliente';
import InsumosTonalizadoresCliente from  './Componentes/InicioSesion/InsumosTonalizadoresCliente';
import CursosAdmi from './Componentes/Administrador/Cursos/CursosAdmi';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={() => <Inicio/>}/>
        <Route path="/Error" exact render={() => <Error/>}/>
        <Route path="/ModalRegistro" exact render={() => <ModalRegistro/>}/>
        <Route path="/ModalInicioSesion" exact render={() => <ModalInicioSesion/>}/>
        <Route path="/QuienSoy" exact render={() => <QuienSoy/>}/>
        <Route path="/InicioCliente" exact render={() => <InicioCliente/>}/>
        <Route path="/ModeladoAnimalesCliente" exact render={() => <ModeladoAnimalesCliente/>}/>
        <Route path="/ModeladoInfantilCliente" exact render={() => <ModeladoInfantilCliente/>}/>
        <Route path="/ModeladoNoviosCliente" exact render={() => <ModeladoNoviosCliente/>}/>
        <Route path="/InicioAdmi" exact render={() => <InicioAdmi/>}/>
        <Route path="/QuienSoyAdmi" exact render={() => <QuienSoyAdmi/>}/>
        <Route path="/ModeladoAnimales" exact render={() => <ModeladoAnimales/>}/>
        <Route path="/ModeladoInfantil" exact render={() => <ModeladoInfantil/>}/>
        <Route path="/ModeladoNovios" exact render={() => <ModeladoNovios/>}/>
        <Route path="/NuevoModeladoInfantil" exact render={() => <NuevoModeladoInfantil/>}/>
        <Route path="/ActualizarModeladoInfantil/:id" exact render={() => <ActualizarModeladoInfantil/>}/>
        <Route path="/InsumosCortadores" exact render={() => <InsumosCortadores/>}/>
        <Route path="/InsumoMoldesSilicona" exact render={() => <InsumoMoldesSilicona/>}/>
        <Route path="/InsumoTonalizadores" exact render={() => <InsumoTonalizadores/>}/>
        <Route path="/QuienSoyCliente" exact render={() => <QuienSoyCliente/>}/>
        <Route path="/NuevoInsumo" exact render={() => <NuevoInsumo/>}/>
        <Route path="/ActualizarInsumoCortadores/:id" exact render={() => <ActualizarInsumoCortadores/>}/>
        <Route path="/InsumosCortadoresCliente" exact render={() => <InsumosCortadoresCliente/>}/>
        <Route path="/InsumosMoldesSiliconaCliente" exact render={() => <InsumosMoldesSiliconaCliente/>}/>
        <Route path="/InsumosTonalizadoresCliente" exact render={() => <InsumosTonalizadoresCliente/>}/>
        <Route path="/CursosAdmi" exact render={() => <CursosAdmi/>}/>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
