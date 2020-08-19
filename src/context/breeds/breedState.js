import React, {useReducer} from 'react';
import BreedContext from './breedContext';
import BreedReducer from './breedReducer';
import {LIST_BREEDS, TO_SELECT_BREED, CLEAN_BREED} from '../../types';

import clienteAxios from '../../config/axios';

const breedState = (props) => {
  const initialState = {
    breeds: [],
    breed: [],
  };

  //Crear dispatch y state
  const [state, dispatch] = useReducer(BreedReducer, initialState);

  //Crear la funciones

  //Obtener lista de razas de perros
  const ListBreeds = async () => {
    try {
      const resultado = await clienteAxios.get('/breeds/list');
      dispatch({type: LIST_BREEDS, payload: resultado.data.message});
    } catch (error) {
      console.log(error);
    }
  };

  //Selecciona una opcion del listado y retorna imagenes asociada a la raza seleccionada.
  const selectedBreed = async (breedName) => {
    try {
      const resultado = await clienteAxios.get(`/breed/${breedName}/images`);
      dispatch({type: TO_SELECT_BREED, payload: resultado.data.message});
    } catch (error) {
      console.log(error);
    }
  };

  //función que limpia el estado breed
  const cleanBreed = () => {
    dispatch({
      type: CLEAN_BREED,
    });
  };

  return (
    <BreedContext.Provider
      value={{
        breeds: state.breeds,
        breed: state.breed,
        ListBreeds,
        selectedBreed,
        cleanBreed,
      }}>
      {props.children}
    </BreedContext.Provider>
  );
};

export default breedState;
