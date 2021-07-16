import './App.css';
import React, {useContext, useReducer, useEffect, useRef,useState,createContext } from 'react';

const HOST_API = "https://app-heroes-of-legends.herokuapp.com";
const initialState = {
  list:[]
}

const Store = createContext(initialState)

const Form = () => {
  const {dispatch} = useContext(Store);
  const formRef = useRef(null);
  const [state, setState] = useState({});

  const onAdd = (event) => {
    event.preventDefault();

    const request = {
      nombre: state.nombre,
      raza: "",
      habilidad: "", 
      nivelDePoder: 0,
      urlImagen: ""
    };

    fetch(HOST_API + '/heroes/crear',{
      //mode: 'no-cors',
      method: "POST",
      body: JSON.stringify(request),
      headers:{
        'Content-Type':'application/json'
      }
    })
    .then(response =>response.json())
    .then((hero) => {
      dispatch({type:"add-item", item:hero});
      setState({nombre:""});
      formRef.current.reset();
    });
  }

  return<form ref={formRef}>
  <input type="text" name="nombre" onChange={(event)=>{
    setState({...state, nombre: event.target.value})
  }}></input>
  <button onClick={onAdd}>Agregar</button>
</form>
}

const List =() =>{
  const {dispatch, state} = useContext(Store);

  useEffect(()=>{
    fetch(HOST_API+"/heroes",{
      //mode: 'no-cors',
      method: "GET",
      }
    )
    .then(response => response.json())
    .then((list)=>{
      dispatch({type:"update-list",list})
    })
  },[state.list.length, dispatch]);

  return<div>
    <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>NOMBRE</td>
          <td>RAZA</td>
          <td>HABILIDAD</td>
          <td>NIVEL PODER</td>
          <td>IMAGEN</td>
        </tr>
      </thead>
      <tbody>
        {state.list.map((hero)=>{
          return <tr key={hero.id}>
            <td>{hero.id}</td>
            <td>{hero.nombre}</td>
            <td>{hero.raza}</td>
            <td>{hero.habilidad}</td>
            <td>{hero.nivelDePoder}</td>
            <td><img src={hero.urlImagen} alt="Hero" width="200" height="200"/></td>
          </tr>
        })}
      </tbody>
    </table>
  </div>
}

function reducer(state,action){
  switch(action.type){
    case 'update-list':
      return{...state,list: action.list}
    case 'add-item':
      const newList = state.list;
      newList.push(action.item);
      return{...state,list:newList}
    default:
      return state;
  }
}


const StoreProvider = ({children}) =>{
  const [state, dispatch] = useReducer(reducer, initialState);
  return<Store.Provider value={{state, dispatch}}>
    {children}
    </Store.Provider> 
}

function App() {
  return <StoreProvider>
    <Form/>
    <List/>
  </StoreProvider>
}

export default App;