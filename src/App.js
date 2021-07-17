import "./App.css";
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
import { reducer } from "./Reducer/Reducer";
import {Form} from './Components/Form';
import { List } from "./Components/List";
import { StoreProvider } from "./store/StoreProvider";


const HOST_API = "https://app-heroes-of-legends.herokuapp.com";
export const initialState = {
  list: [],
};

export const Store = createContext(initialState);


function App() {
  
  return (
    <StoreProvider>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand> 
            Tú heroe favorito 
          </Navbar.Brand>
        </Navbar>
        <Form />
        <List />
      </div>
    </StoreProvider>
  );
}
export default App;
