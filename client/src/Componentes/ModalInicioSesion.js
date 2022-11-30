import React, {useState} from "react";
import axios from "axios";
import {Link, useHistory} from "react-router-dom";


const ModalInicioSesion = ({ setModalOn1, setChoice1 }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    //Para Formulario de Inicio de Sesión
    const [emailLogin, setEmailLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");

    const [errorRegistro, setErrorsRegistro] = useState({});
    /*
    errorRegistro = {
        firstName: {
            message: "El nombre es obligatorio"
        }
        email:
    }
    
    
    */
    const [errorLogin, setErrorLogin] = useState("");

    const history = useHistory();

    const registro = e => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/register',{
            firstName,
            lastName,
            userName,
            phone,
            email,
            password,
            confirmPassword
        }, {withCredentials: true})
            .then(res => history.push('/SesionAbierta'))
            .catch(err => setErrorsRegistro(err.response.data.errors));
    }
    const login = e => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/login', {
            email: emailLogin,
            password: passwordLogin
        }, {withCredentials: true})
            .then(res => {
               
                    if(res.data.user.rol ==="cliente"){
                        history.push('/InicioCliente');
                    } else if (res.data.user.rol ==="Administrador"){
                        history.push('/InicioAdmi');
                    }
                
            })
            .catch(err => console.log(err));
    }


  

    return (

        <div className=" bg-zinc-300 bg-opacity-80 fixed inset-0 z-40">

            <div className="flex h-screen justify-center items-center ">

                <div className="flex-col justify-center  bg-white  pr-100 pl-100 border-4 border-sky-500 rounded-xl drop-shadow-xl">
                    <form onSubmit={login}>
                        <Link to="/">  <img src="/img/close.png" width="25" className="ml-[515px] pt-1 pr-1" alt=''  /></Link>
                            <div className="container mx-auto px-20 h-5/6">
                                <h1 className="text-4xl font-medium flex justify-center">Inicia Sesion</h1>
                                <br/>
                              
                                    <div class="mb-6">
                                        <label htmlFor="emailLogin" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo Electronico</label>
                                        <input type="email" name="emailLogin" id="emailLogin"  value={emailLogin} onChange={e=>setEmailLogin(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com"/>
                                    </div>
                                    <div >
                                        <label htmlFor="passwordLogin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <input type="password" name="passwordLogin" id="passwordLogin"  value={passwordLogin} onChange={e=>setPasswordLogin(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••"/>
                                    </div>
                                    <div>
                                        {errorLogin !== "" ? <div id="alert-2" class="flex p-2 mb-4 bg-red-100 rounded-lg dark:bg-red-200" role="alert">
                                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 pr-1 text-red-700 dark:text-red-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                                <div class="ml-3 text-sm font-medium text-red-500 dark:text-blue-800">
                                {errorLogin}</div>
                              
                                </div> : null }
                                    </div>
                                    <div className="pb-9 pt-5"   >
                                        <input type="submit"  value="Iniciar Sesion" class="text-white bg-green-600 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"/>
                                    </div>

                            </div>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default ModalInicioSesion;