
import React, {
  useContext,
  useReducer,
  useEffect,
  useRef,
  useState,
  createContext,
} from "react";
import { useHistory } from 'react-router';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "react-bootstrap";
import { reducer } from "../Reducer/Reducer";
import { Store } from "../App";

const HOST_API = "https://app-heroes-of-legends.herokuapp.com";
export const Form = () => {
  const history = useHistory();
  const { dispatch } = useContext(Store);
  const formRef = useRef(null);
  const [state, setState] = useState({});

  const onAdd =  (event) => {
    event.preventDefault();
    const request = {
      nombre: state.nombre,
      raza: state.raza,
      habilidad: state.habilidad,
      nivelDePoder: state.nivelDePoder,
      urlImagen: state.urlImagen,
    };
      
        
        if (request.nombre != null && request.raza != null && request.habilidad != null && request.nivelDePoder != null && request.urlImagen != null) {
          
      
           axios
            .post(HOST_API + "/heroes/crear", request)
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
      
            alert("Heroe creado")
            
        }
        else {
            alert("Llenar todos los campos")
        }
  };
  
  return (
    <form ref={formRef} >
      <div className="col-md-5 p-5 mx-auto" >
        <div className="card ">
          <div className="card-header text-center">
            <h5> Ingresa tu héroe favorito </h5>
          </div>
          <div className="card-body">
            <div className="mb-3">
              <label for="Nombre" className="form-label">
                {" "}
                Nombre{" "}
              </label>
              <input
                type="text"
                className="form-control"
                id="Nombre"
                placeholder="Ingrese el nombre de su heroe"
                autoFocus
                required
                onChange={(event) => {
                  setState({ ...state, nombre: event.target.value });
                }}
              />
            </div>
            <div className="mb-3">
              <label for="Raza" className="form-label">
                {" "}
                Raza{" "}
              </label>
              <input
                type="text"
                className="form-control"
                id="Raza"
                placeholder="Ingrese su raza de origen"
                required
                onChange={(event) => {
                  setState({ ...state, raza: event.target.value });
                }} 
              />
            </div>
            <div className="mb-3">
              <label for="Habilidad" className="form-label">
                {" "}
                Habilidad{" "}
              </label>
              <input
                type="text"
                className="form-control"
                id="Habilidad"
                placeholder="Ingrese su habilidad"
                required
                onChange={(event) => {
                  setState({ ...state, habilidad: [event.target.value] });
                }}
                
              />
            </div>
            <div className="mb-3">
              <label for="Nivel de Poder" className="form-label">
                {" "}
                Nivel de poder{" "}
              </label>
              <input
                type="text"
                className="form-control"
                id="NivelPoder"
                placeholder="Ingrese su nivel de poder"
                required
                onChange={(event) => {
                  setState({ ...state, nivelDePoder: event.target.value });
                }}   
              />
            </div>
            <div className="mb-3">
              <label for="Link de la imagen" className="form-label">
                {" "}
                Link de la imagen{" "}
              </label>
              <input
                type="text"
                className="form-control"
                id="LinkImagen"
                placeholder="Ingrese el link de la imagen"
                required
                onChange={(event) => {
                  setState({ ...state, urlImagen: event.target.value });
                }}
              />
            </div>
            <div className="d-grid gap-2 col-6 mx-auto">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onAdd}
              >
                Agregar
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};