import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link, useHistory, useParams } from "react-router-dom";

const ActualizarInsumoCortadores = () => {

    const {id} = useParams();

    const [categoriaInsumos, setCategoriaInsumos] = useState("");
    const [subCategoria, setSubCategoria] = useState("");
    const [nombre, setNombre] = useState("");
    const [imagen, setImagen] = useState("");
    const [precio, setPrecio] = useState("");

    const [errors, setErrors] = useState({});


    const history = useHistory();

    useEffect(() => {
        axios.get("http://localhost:8000/api/insumos/"+id, {withCredentials: true})
            .then(res => {
                setCategoriaInsumos(res.data.categoriaInsumos);
                setSubCategoria(res.data.subCategoria);
                setNombre(res.data.nombre);
                setImagen(res.data.imagen);
                setPrecio(res.data.precio);
            })
            .catch(err => history.push("/error"));
    }, [id, history])

    const updateInsumo = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/insumos/"+id, {
            categoriaInsumos,
            subCategoria,
            nombre,
            imagen,
            precio
        }, {withCredentials: true})
            .then(res => history.push('/InsumosCortadores'))
            .catch(err => setErrors(err.response.data.errors));
    }



    return (
        
        <div className="   bg-zinc-300 bg-opacity-75 fixed inset-0 z-40">

            <div className="flex h-screen justify-center items-center ">

                <div className="flex-col justify-center  bg-white  pr-100 pl-100 border-4 border-sky-500 rounded-xl ">

                    <form onSubmit={updateInsumo}>
                        <Link to="/InsumosCortadores">  <img src="/img/close.png" width="25" className="ml-[565px] pt-1     " alt='' /></Link>
                        
                      
                        <div className="container mx-auto px-20 h-5/6">
                            
                            <h1 className="text-4xl font-medium flex justify-center">Nuevo Insumo</h1>
                            <br/>
                            <div class="grid gap-6 mb-6 md:grid-cols-2">
                                <div>
                                    <label htmlFor="categoriaInsumos" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Categoria</label>
                                    <select  id="categoriaInsumos" name="categoriaInsumos" value={categoriaInsumos} onChange={e=> setCategoriaInsumos(e.target.value)}  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option selected>Escoge una categoria</option>
                                        <option value="Moldes de silicona">Moldes de silicona</option>
                                        <option value="Cortadores">Cortadores</option>
                                        <option value="Tonalizadores">Tonalizadores</option>
                                    </select>
                                    {errors.categoriaInsumos ? <div id="alert-2" class="flex p-2 mb-4 bg-red-100 rounded-lg dark:bg-red-200" role="alert">
                                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 pr-1 text-red-700 dark:text-red-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                                <div class="ml-3 text-sm font-medium text-red-500 dark:text-blue-800">
                                {errors.categoriaInsumos.message}</div>
                              
                                </div> : null}
                                </div>
                                <div>
                                    <label htmlFor="subCategoria" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sub categoria</label>
                                    <select  id="subCategoria" name="subCategoria" value={subCategoria} onChange={e=> setSubCategoria(e.target.value)}  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option selected>Escoge una Sub-categoria</option>
                                        <option value="Animales">Animales</option>
                                        <option value="Navidad">Navidad</option>
                                        <option value="Accesorios">Accesorios   </option>
                                    </select>
                                    {errors.subCategoria ? <div id="alert-2" class="flex p-2 mb-4 bg-red-100 rounded-lg dark:bg-red-200" role="alert">
                                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 pr-1 text-red-700 dark:text-red-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                                <div class="ml-3 text-sm font-medium text-red-500 dark:text-blue-800">
                                {errors.subCategoria.message}</div>
                               
                                </div> : null}
                                </div>
                                <div>
                                    <label htmlFor="nombre" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre </label>
                                    <input type="text" id="nombre"  name="nombre" value={nombre} onChange={e=> setNombre(e.target.value)}class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                                    {errors.nombre ? <div id="alert-2" class="flex p-2 mb-4 bg-red-100 rounded-lg dark:bg-red-200" role="alert">
                                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 pr-1 text-red-700 dark:text-red-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                                <div class="ml-3 text-sm font-medium text-red-500 dark:text-blue-800">
                                {errors.nombre.message}</div>
                              
                                </div> : null}
                                </div> 
                                <div>
                                <label htmlFor="precio" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio</label>
                                <input type="text" id="precio"  name="precio" value={precio} onChange={e=> setPrecio(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"placeholder="$" />
                                {errors.precio ? <div id="alert-2" class="flex p-2 mb-4 bg-red-100 rounded-lg dark:bg-red-200" role="alert">
                                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 pr-1 text-red-700 dark:text-red-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                                <div class="ml-3 text-sm font-medium text-red-500 dark:text-blue-800">
                                {errors.precio.message}</div>
                              
                                </div> : null}

                                </div>   
                            </div>
                            <div class="mb-6">
                            <label htmlFor="imagen" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Imagen</label>
                                    <input type="text" id="imagen"  name="imagen" value={imagen} onChange={e=> setImagen(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
                                    {errors.imagen ? <div id="alert-2" class="flex p-2 mb-4 bg-red-100 rounded-lg dark:bg-red-200" role="alert">
                                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 pr-1 text-red-700 dark:text-red-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                                <div class="ml-3 text-sm font-medium text-red-500 dark:text-blue-800">
                                {errors.imagen.message}</div>
                                    </div> : null}
                            </div> 
                            <div className="pb-5">
                                <input type="submit"  value="Agregar" class="text-white bg-green-600 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )  

}

export default ActualizarInsumoCortadores;

