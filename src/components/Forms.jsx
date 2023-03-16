import React, {useState} from "react";
import db from "../db/db.json";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";

const Forms = () => {
    let initialData = JSON.parse(JSON.stringify(db.items));
    const [data, setData] = useState(db.items);
    
    const enviarFormulario = (e) => {
        e.preventDefault();
        const db = getFirestore();
        const coleccion = collection(db, "usuarios");

        const agregarDatos = async () => {
            try {
                const docRef = await addDoc(coleccion, {respuesta: data});
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        };
       
        agregarDatos();
        setData(initialData);

        document.getElementById("formulario-encuesta").reset();



    //   if (window.confirm("Formulario enviado con exito!")) {
    //     window.location.href = "http://localhost:3000/";
    //   }

    };

    const guardarCambios = (e, item, index) => {
        let itemAux = data[index];
        itemAux.value = item.type === "checkbox" ? e.target.checked : e.target.value;
        data[index] = itemAux;
        
        setData(data);
        
    }

    // creo una funcion que si el formulario se envio con exito, me redirija a la pagina principal
    // const confirmarFormulario = () => {
    //     if (window.confirm("Formulario enviado con exito!")) {
    //              window.location.href = "http://localhost:3000/";
    //            }
    // }

  
   

    
    return (
        
        <div className="bg-gray-200  flex flex-col items-center">
            <div>
               
                <h1 className="text-4xl text-center text-gray-700 font-bold mt-8">Formulario</h1>
            </div>
            <form className=" m-1  flex flex-col justify-center items-center mt-5 w-1/3" id="formulario-encuesta"
            
                onSubmit={enviarFormulario}>
                {data.map((item, index) => {
                    if (item.type === "text") {
                        return (
                            <div className="container m-1 bg-white shadow-lg rounded-lg border border-2 border-dark flex flex-col justify-center items-center" key={index}>
                                <label htmlFor={index}>{item.label}</label>
                                <input
                                    className="form-select form-select-lg m-5 rounded-lg shadow-sm border border-2 border-dark"
                                    type={item.type}
                                    id={index}
                                    name={item.name}
                                    value={item.value}
                                    required={item.required}
                                    onChange={(e) => guardarCambios(e, item, index)}
                                />
                            </div>
                        );
                    }
                    if (item.type === "email") {
                        return (
                            <div className="container m-1 bg-white shadow-lg rounded-lg border border-2 border-dark flex flex-col justify-center items-center" key={index}>
                                <label htmlFor={index}>{item.label}</label>
                                <input
                                    className="form-select form-select-lg m-5 rounded-lg shadow-sm border border-2 border-dark"
                                    type={item.type}
                                    id={index}
                                    value={item.value}
                                    name={item.name}
                                    required={item.required}
                                    onChange={(e) => guardarCambios(e, item, index)}
                                />
                            </div>
                        );
                    }
                    if (item.type === "date") {
                        return (
                            <div className="container m-1 bg-white shadow-lg rounded-lg border border-2 border-dark flex flex-col justify-center items-center" key={index}>
                                <label htmlFor={index}>{item.label}</label>
                                <input
                                    className="form-select form-select-lg m-5 rounded-lg shadow-sm border border-2 border-dark"
                                    type={item.type}
                                    id={index}
                                    name={item.name}
                                    value={item.value}
                                    required={item.required}
                                    onChange={(e) => guardarCambios(e, item, index)}
                                />
                            </div>
                        );
                    }
                    if (item.type === "select") {
                        return (
                            <div className="container m-1 bg-white shadow-lg rounded-lg border border-2 border-dark flex flex-col justify-center items-center" key={index}>
                                <label htmlFor={index} >{item.label}</label>
                                <select
                                    className="form-select form-select-lg m-5 rounded-lg shadow-sm border border-2 border-dark"
                                    type={item.type}
                                    id={index}
                                    name={item.name}
                                    value={item.value}
                                    required={item.required}
                                    onChange={(e) => guardarCambios(e, item, index)}
                    
                                >
                                    <option 
                                    value=""


                                    >Seleccione una opcion</option>
                                    {item.options.map((option) => {
                                        return (
                                            <option key={option.id} value={option.value}>
                                                {option.label}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                        );
                    }
                    if (item.type === "checkbox") {
                        return (
                            <div className="container m-1 bg-white shadow-lg rounded-lg border border-2 border-dark flex flex-row justify-center items-center" key={index}>
                                <label className="form-check-label" htmlFor={index}>
                                    {item.label}
                                </label>
                                <input
                                    className="form-check-input m-5"
                                    type={item.type}
                                    id={index}
                                    name={item.name}
                                    value={item.value}
                                    required={item.required}
                                    onChange={(e) => guardarCambios(e, item, index)}
                                />
                                
                            </div>
                        );
                    }
                    if (item.type === "submit") {
                        return (
                            <div key={index}>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5 w-36" type={item.type} id={index}
                                //onClick={confirmarFormulario}
                                >
                                    {item.label}
                                </button>
                                
                            </div>
                        );
                    }
                })}
            </form>
            <div>
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-5 w-52">
            <Link to="/listaforms">Lista Forms</Link>
            </button>
                 <footer className="text-center text-gray-700 text-sm">
                    <p>Grey Dive Forms</p>
                 </footer>
             </div>
        </div>
    );
};

export default Forms