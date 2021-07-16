import React, { useContext, useRef, useState } from "react";
import axios from "axios";
import { Store } from "../App";


const HOST_API = "https://app-heroes-of-legends.herokuapp.com";

const Form = () => {
  const { dispatch } = useContext(Store);
  const formRef = useRef(null);
  const [state, setState] = useState({});

  const onAdd = (event) => {
    event.preventDefault();

    const request = {
      nombre: state.nombre,
      raza: state.raza,
      habilidad: state.habilidad,
      nivelDePoder: state.nivelDePoder,
      urlImagen: state.urlImagen,
    };

    console.log(request);

    axios
      .post(HOST_API + "/heroes/crear", request)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      const List = () => {
        const { dispatch, state } = useContext(Store);
      
        useEffect(() => {
          fetch(HOST_API + "/heroes", {
            method: "GET",
          })
            .then((response) => response.json())
            .then((list) => {
              dispatch({ type: "update-list", list });
            });
        }, [state.list.length, dispatch]);
        return (
          <div className="container flex-column flex-md-row justify-content-center align-items-center h-100 ">
            <div className="row">
              {state.list.map((hero) => (
                <div className="col-md-4">
                  <div className="tamano-carta card text-center bg-dark animate__animated animate__fadeInUp mx-3 my-3">
                    <div className="overflow">
                      <img src={hero.urlImagen} alt="Hero" width="200" height="200"/>
                    </div>
                    <div className="card-body text-light">
                      <h4 className="card-title">{hero.nombre}</h4>
                      <hr />
                      <p className="card-text text-white">Raza: {hero.raza}</p>
                      <p className="card-text text-white">
                        Habilidad: {hero.habilidad}
                      </p>
                      <p className="card-text text-white">
                        Nivel de poder: {hero.nivelDePoder}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
  };

  return (
    <form ref={formRef}>
      <div className="col-md-5 p-4 mx-auto">
        <div className="card ">
          <div className="card-header text-center">
            <h3> Ingresa tu héroe favorito </h3>
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

export default Form;
