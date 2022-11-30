import React, {useEffect, useState, Component} from "react";
import axios from "axios";
import {Link, useHistory} from "react-router-dom";




const   ModeladoInfantilCliente = () => {

    const [modelados, setModelados] = useState([]);
    
    const history = useHistory();

  

    useEffect(() => {
        axios.get("http://localhost:8000/api/modelados", {withCredentials: true})
            .then(res =>  {setModelados(res.data)})
            .catch(err => {
                if(err.response.status === 401) {
                    history.push("/");
                }
            });
    }, [history])

    


   

   
      
    const [valor, setValor] = useState(0);

    const sumar = () => {
        setValor(valor+1);
    }

    const cerrarSesion = () => {
        axios.get('http://localhost:8000/api/logout', {withCredentials:true})
            .then(res => history.push('/'))
            .catch(err => console.log(err));
    }

    return (
        <div className="mx-auto">
            <h5 className="flex justify-center font-bold text-slate-50 bg-[#44413a] ">¡ATENCION! los pedidos  solo se  agendan con la mitad del anticipo</h5>
            <nav className='bg-[#ffe5b1] flex justify-between lg:justify-start items-center sticky top-0 z-40 border-b-2 border-[#44413a] '>
                
                <div className='logo p-2 -m-10'>
                    <img src="/img/logo.png" width="200" alt=''/>
                </div>
                <div className='links lg:block hidden w-100 md:w-100 ml-[50px]'>
                    <ul className='menu flex items-center justify-start gap-10 '>
                        <li class="mr-2" ><a href='/InicioCliente' className="link inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-[#ffc757] dark:hover:bg-gray-800 dark:hover:text-gray-300">Inicio</a></li>
                        <li><a href='#' className='link inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-[#ffc757] dark:hover:bg-gray-800 dark:hover:text-gray-300'>Cursos</a></li>
                        <li><a href='/InsumosCortadoresCliente' className='link inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-[#ffc757] dark:hover:bg-gray-800 dark:hover:text-gray-300'>Insumos</a></li>
                        <li><a href='/ModeladoInfantilCliente' className='link inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-[#ffc757] dark:hover:bg-gray-800 dark:hover:text-gray-300'>Modelados</a></li>
                        <li><a href='/QuienSoyCliente' className='link inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-[#ffc757] dark:hover:bg-gray-800 dark:hover:text-gray-300'>Quien soy</a></li>
                    </ul>
                </div>
                <div className='links lg:block hidden w-100 md:w-100 ml-20'>
                    <ul className='menu flex justify-end gap-9'>        
                      <form class="flex items-center">   
                          <label for="simple-search" class="sr-only">Que quieres buscar?</label>
                          <div class="relative w-full">
                              <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Que quieres buscar?" required/>
                          </div>
                          <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-black bg-[#A8C7EB] rounded-lg border border-blue-700 hover:bg-[#B9CBF0] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                              <span class="sr-only">Search</span>
                          </button>
                      </form>
                      <button onClick={cerrarSesion}class="py-1 px-4  bg-[#ff3b3b] text-white font-bold border-transparent border-2 border-black text-1 rounded-3xl hover:border-black hover:bg-[#ff3b3b]] hover:text-black transition duration-200'" type="submit">
                                        Cerrar Sesion
                            </button>
                    </ul>
                </div>
                <div className='links lg:hidden w-100 md:w-100 ml-20'>
                    <ul className="mobile-links hidden w-full absolute z-50 left-0 text-center bg-gray-800">
                        <Link to="/">Inicio</Link>
                        <li><a href='#' className='link'>Cursos</a></li>
                        <li><a href='#' className='link'>Insumos</a></li>
                        <li><a href='#' className='link'>Modelados</a></li>
                        <Link to="/quienSoy">Quien soy</Link>
                    </ul>
                </div>
                <div className='links lg:hidden w-100 md:w-100 ml-20'>
                <a href="#" class="link" id="mobile-menu">Menu</a>
                    <ul className="mobile-links hidden w-full absolute z-50 left-0 text-center bg-gray-800">        
                      <form class="flex items-center">   
                          <label for="simple-search" class="sr-only">Que quieres buscar?</label>
                          <div class="relative w-full">
                              <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Que quieres buscar?" required/>
                          </div>
                          <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-black bg-[#A8C7EB] rounded-lg border border-blue-700 hover:bg-[#B9CBF0] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                              <span class="sr-only">Search</span>
                          </button>
                      </form>
                        <li class="flex items-center" ><a href='#' className='py-1 px-4 bg-[#A8C7EB] text-white font-bold border-transparent border-2 border-black text-1 rounded-3xl hover:border-black hover:bg-white hover:text-black transition duration-200'>Registrate</a></li>
                        <li class="flex items-center" ><a href='#'  className='py-1 px-4 bg-[#A8C7EB] text-white font-bold border-transparent border-2 border-black text-1 rounded-3xl hover:border-black hover:bg-white hover:text-black transition duration-200'>Inicia Sesion</a></li>
                    </ul>
                </div>
            </nav >
           
   
            
        <div class="bg-[url('../public/img/fondo.png')]">
                <div className="bg-zinc-300 bg-opacity-80 pb-14">
                
                    <div className="flex flex-row gap-6 mb-6 pt-5 md:grid-cols-2 font-bold">
                        <div className="clear-left ml-20 w-[350px] pt-10">
                        <h2 class="mb-2 text-3xl font-semibold text-gray-900 dark:text-white pt-14">Modelados</h2>
                            <ul class="space-y-1 max-w-md list-inside text-black dark:text-gray-400">
                                <li>
                                    <a href='/ModeladoAnimalesCliente' class="font-medium  dark:text-blue-500 hover:underline text-1xl">Animales</a>
                                    
                                </li>
                                <li>
                                <a href='/ModeladoNoviosCliente' class="font-medium  dark:text-blue-500 hover:underline text-1xl">
                                     Novios
                                </a>
                                   
                                </li>
                                <li>
                                <a href='/ModeladoInfantilCliente' class="font-medium  dark:text-blue-500 hover:underline text-1xl">Infantil</a>
                                
                                </li>
                            </ul>
                       
                        </div>
                        <div className="flex-row justify-center ">
                        <div className="clear-left ml-20 w-[350px] pb-10 mb-2 text-3xl font-semibold text-gray-900 dark:text-white">
                                <h3 className="text-5xl ">Infantil</h3>
                            </div>
                        {modelados.map((modelado, index) => (
                                        <tr key={index}>
                                          
                                            <div class="flex p-6 font-mono">
                                <div class="flex-none w-48 mb-10 relative  z-30 before:absolute before:top-1 before:left-1 before:w-full before:h-full before:bg-teal-400 rounded-lg">
                                    <img src={modelado.imagen } alt="" class="absolute z-10 inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
                                </div>
                                <form class="flex-auto pl-6">
                                 
                                    <div class="relative flex flex-wrap items-baseline pb-6 before:bg-black before:absolute before:-top-6 before:bottom-0 before:-left-60 before:-right-6 w-[220px]">
                                        <p  class="relative text-lg text-white">Estilo: </p>
                                        <h1 class="relative w-full flex-none mb-2 text-2xl font-semibold text-white">
                                        {
                                                    modelado.estilo 
                                        }
                                        </h1>
                                        <div class="relative text-lg text-white">
                                            {modelado.nombre_modelado } 
                                        </div>
                                        <div class="relative uppercase text-teal-400 ml-3">
                                        {
                                                    modelado.precio 
                                                }
                                        </div>
                                        <div class="relative uppercase text-teal-400 ml-3">
                                        <p  class="relative text-lg text-white">Modelado: </p>
                                        {
                                                    modelado.categoria 
                                                }
                                        </div>
                                    </div>
                                    <div class="flex space-x-2 mb-4 text-sm font-medium">
                                    <div class="flex space-x-4 pt-6">
                                        
                                        <button  class="py-1 px-4  bg-[#2ccc3f] text-white font-bold border-transparent border-2 border-black text-1 rounded-3xl hover:border-black hover:bg-[#a9fc76] hover:text-black transition duration-200'" type="submit">
                                        Agregar al carrito
                                        </button>
                                    </div>
                                    
                                    <button onClick={sumar} class="flex-none flex items-center justify-center text-red-500 text-9xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300" type="button" aria-label="Like">
                                        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" width="20" height="20"/>
                                        </svg>
                                        <p className="text-2xl">{valor}</p>
                                    </button>
                                    </div>
                                    
                                </form>

                            </div>
                                        </tr>
                                        
                                    ))
                                }
                           
                        </div>
                    </div> 
                </div>
                  
      
        
                <section class="bg-[#bcbdf5] flex gap-5 flex-row h-[150px]">
            
            <div class="xsm:w-full sm:container w-2/3 mx-auto md:flex justify-center items-center text-center py-6 pr-[1px] pl-[60px]">
                <div class="left lg:w-1/2 p-5">
                    <h3 class="text-black font-black  xsm:text-2xl  sm:text-[25px] border-b-2 border-[#44413a]">
                        Redes sociales
                    </h3>
                    <div class="sm:flex  sm:justify-between  scale-75 pr-[]">
      
                            <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0 pt-5 pr-[200px]">
                                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                    <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                    <span class="sr-only">Facebook page</span>
                                </a>
                                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                    <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
                                    <span class="sr-only">Instagram page</span>
                                </a>
                                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                    <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                    <span class="sr-only">Twitter page</span>
                                </a>
                            
                            
                            </div>
                    </div>
                    

                </div>

                <div class="right xl:w-1/3 lg:w-1/2">
                    <img src="img/activity_img3.png" class="md:w-full" alt=""/>
                </div>
            </div>

            <img className="pl-[20px] scale-75 ml-[100px] mr-[100px]" src="img/Stefa.PNG"/>


            <div class="xsm:w-full sm:container w-2/3 mx-auto md:flex justify-center items-center text-center py-6 pr-[1px] pl-[60px]">
                <div class="left lg:w-1/2 p-5">
                    <h3 class="text-black font-black  xsm:text-2xl  sm:text-[25px] border-b-2 border-[#44413a]">
                        Medios de pago
                    </h3>
                
      
                            <div class=" mt-4 space-x-6 sm:justify-end sm:mt-0 pt-5 pl-[70px]">
                            <img src="img/mercado.png " className=" rounded-full w-[100px] h-[50px]  right-[100px] " alt=''/>
                            
                            
                            </div>
                    </div>
                    

            

               
            </div>
        </section>
        </div>
       
      
        <footer class="p-1 bg-amber-300 rounded-lg  md:px-1 md:py-1 dark:bg-black">
            
            <hr class="my-1 " />
            <span class="block text-[18px] text-black sm:text-center dark:text-black font-bold ">© 2022 <a href="https://flowbite.com/" class="hover:underline">Stefanny Arteaga™</a>. All Rights Reserved.
            </span>
        </footer>

        
       
    </div>
        
    )
}

export default ModeladoInfantilCliente;
