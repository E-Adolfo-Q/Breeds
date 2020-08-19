import React, {useEffect, useContext} from 'react';
import BreedContext from '../context/breeds/breedContext';
import ResultsList from '../components/ResultsList';

export default function ListBreedsScreen() {
  //extraer los valores del context
  const breedContext = useContext(BreedContext);
  const {breeds, ListBreeds} = breedContext;

  useEffect(() => {
    ListBreeds();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ResultsList breeds={breeds} />
    </>
  );
}
