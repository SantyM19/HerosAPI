import "./App.css";
import React, {
  createContext,
} from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "react-bootstrap";
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
