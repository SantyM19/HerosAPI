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
export const List = () => {
    const { dispatch, state } = useContext(Store);
  
    useEffect( async() => {
      fetch(HOST_API + "/heroes", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((list) => {
          dispatch({ type: "update-list", list });
        });
    }, [dispatch]);
    return (
      <div className="container flex-column flex-md-row justify-content-center align-items-center h-100">
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