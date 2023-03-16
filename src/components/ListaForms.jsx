import React,{useEffect, useState} from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";


const ListaForms = () => {
    const [lista, setLista] = useState([]);

    const traerDatos = async () => {
        const db = getFirestore();
        const coleccion = collection(db, "usuarios");
        const querySnapshot = await getDocs(coleccion);
        setLista(querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() }
        }) );
        
    };

    useEffect(() => {
        traerDatos();
    }, []);


    return (
        <div className="bg-gray-200  flex flex-col  items-center h-screen w-screen">
            <div>
                <h1 className="text-4xl text-center text-gray-700 font-bold mt-8">Lista de Formularios</h1>
            </div>
            <div className="container mt-10 bg-white shadow-lg rounded-lg border border-2 border-dark flex flex-col  items-center w-1/2">
                <table className="table table-striped m-5 border-separate border border-slate-400 ">
                    <thead>
                        <tr>
                            <th className=" border border-slate-600" scope="col">Nombre Completo</th>
                            <th className=" border border-slate-600" scope="col">Correo Electrónico</th>
                            <th className=" border border-slate-600" scope="col">Fecha de nacimiento</th>
                            <th className=" border border-slate-600" scope="col">País de Origen</th>

                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 "
                    >
                        {lista.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.respuesta[0].value}</td>
                                    <td>{item.respuesta[1].value}</td>
                                    <td>{item.respuesta[2].value}</td>
                                    <td>{item.respuesta[3].value}</td>
                                </tr>
                            );
                        }
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListaForms;

