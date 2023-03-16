import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div  className="text-center bg-gray-200 flex flex-col items-center justify-center h-screen"
        >
            <div className="text-4xl text-center  font-bold mt-8 "
            >
            <h1>Home</h1>
            </div>
            <div className="text-4xl text-center text-gray-700 font-bold mt-8"
            >
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5 w-52">
            <Link to="/forms">Forms</Link>
            </button>
            </div>
            <div className="text-4xl text-center text-gray-700 font-bold mt-8"
            >
                 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5 w-52">
            <Link to="/listaforms">ListaForms</Link>
            </button>
            </div>
        </div>
    );
    }

export default Home;