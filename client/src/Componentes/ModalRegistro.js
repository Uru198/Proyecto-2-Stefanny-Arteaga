import React, {useState} from "react";
import axios from "axios";
import {Link, useHistory} from "react-router-dom";


const ModalRegistro = () => {
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
            .then(res => history.push('/InicioCliente'))
            .catch(err => setErrorsRegistro(err.response.data.errors));
    }

    const login = e => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/login',{
            email: emailLogin,
            password: passwordLogin    
        }, {withCredentials: true})
            .then(res => {
                console.log(res.data.user)
                if(res.data.user.rol =="cliente"){
                    history.push('/SesionAbierta')
                } else if (res.data.user.rol =="administrador"){
                    history.push('/SesionAbiertaAdmi');
                }
            })
            .catch(err => console.log(err));
    }


    

    return (

        <div className="   bg-zinc-300 bg-opacity-75 fixed inset-0 z-40">

            <div className="flex h-screen justify-center items-center ">

                <div className="flex-col justify-center  bg-white  pr-100 pl-100 border-4 border-sky-500 rounded-xl ">

                    <form onSubmit={registro}>
                        <Link to="/">  <img src="/img/close.png" width="25" className="ml-[515px] pt-1" alt=''  /></Link>
                      
                        <div className="container mx-auto px-20 h-5/6">
                            
                            <h1 className="text-4xl font-medium flex justify-center">Registro</h1>
                            <br/>
                            <div class="grid gap-6 mb-6 md:grid-cols-2">
                                <div>
                                    <label htmlFor="firstName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                                    <input type="text" id="firstName" name="firstName" value={firstName} onChange={e=> setFirstName(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John"/>
                                    {errorRegistro.firstName ? <div id="alert-2" class="flex p-2 mb-4 bg-red-100 rounded-lg dark:bg-red-200" role="alert">
                                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 pr-1 text-red-700 dark:text-red-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                                <div class="ml-3 text-sm font-medium text-red-500 dark:text-blue-800">
                                {errorRegistro.firstName.message}</div>
                              
                                </div> : null}
                                </div>
                                <div>
                                    <label htmlFor="lastName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido</label>
                                    <input type="text" id="lastName" name="lastName" value={lastName} onChange={e=> setLastName(e.target.value)}class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe"/>
                                    {errorRegistro.lastName ? <div id="alert-2" class="flex p-2 mb-4 bg-red-100 rounded-lg dark:bg-red-200" role="alert">
                                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 pr-1 text-red-700 dark:text-red-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                                <div class="ml-3 text-sm font-medium text-red-500 dark:text-blue-800">
                                {errorRegistro.lastName.message}</div>
                               
                                </div> : null}
                                </div>
                                <div>
                                    <label htmlFor="userName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre de usuario</label>
                                    <input type="text" id="userName"  name="userName" value={userName} onChange={e=> setUserName(e.target.value)}class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite"/>
                                    {errorRegistro.userName ? <div id="alert-2" class="flex p-2 mb-4 bg-red-100 rounded-lg dark:bg-red-200" role="alert">
                                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 pr-1 text-red-700 dark:text-red-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                                <div class="ml-3 text-sm font-medium text-red-500 dark:text-blue-800">
                                {errorRegistro.userName.message}</div>
                              
                                </div> : null}
                                </div> 
                                <div>
                                    <label htmlFor="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telefono</label>
                                    <input type="tel" id="phone"  name="phone" value={phone} onChange={e=> setPhone(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" />
                                    {errorRegistro.phone ? <div id="alert-2" class="flex p-2 mb-4 bg-red-100 rounded-lg dark:bg-red-200" role="alert">
                                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 pr-1 text-red-700 dark:text-red-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                                <div class="ml-3 text-sm font-medium text-red-500 dark:text-blue-800">
                                {errorRegistro.phone.message}</div>
                                
                                </div> : null}
                                </div>   
                            </div>
                            <div class="mb-6">
                                <label htmlFor="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo Electronico</label>
                                <input type="email" id="email"  name="email" value={email} onChange={e=> setEmail(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com"/>
                                {errorRegistro.email ? <div id="alert-2" class="flex p-2 mb-4 bg-red-100 rounded-lg dark:bg-red-200" role="alert">
                                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 pr-1 text-red-700 dark:text-red-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                                <div class="ml-3 text-sm font-medium text-red-500 dark:text-blue-800">
                                {errorRegistro.email.message}</div>
                              
                                </div> : null}
                            </div> 
                            <div class="mb-6">
                                <label htmlFor="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" id="password" name="password" value={password} onChange={e=> setPassword(e.target.value)}  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••"/>
                                {errorRegistro.password ? <div id="alert-2" class="flex p-2 mb-4 bg-red-100 rounded-lg dark:bg-red-200" role="alert">
                                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 pr-1 text-red-700 dark:text-red-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                                <div class="ml-3 text-sm font-medium text-red-500 dark:text-blue-800">
                                {errorRegistro.password.message}</div>
                                
                                </div> : null}
                            </div> 
                            <div class="mb-6">
                                <label htmlFor="confirmPassword" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                <input type="password" id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={e=> setConfirmPassword(e.target.value)}   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••"/>
                                {errorRegistro.confirmPassword ? <div id="alert-2" class="flex p-2 mb-4 bg-red-100 rounded-lg dark:bg-red-200" role="alert">
                                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 pr-1 text-red-700 dark:text-red-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                                <div class="ml-3 text-sm font-medium text-red-500 dark:text-blue-800">
                                {errorRegistro.confirmPassword.message}</div>
                                
                                </div>: null}
                            </div> 
                            <div className="pb-5">
                                <input type="submit"  value="Registrarme" class="text-white bg-green-600 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default ModalRegistro;