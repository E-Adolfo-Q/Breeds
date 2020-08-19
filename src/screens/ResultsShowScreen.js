import React, {useContext, useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Image} from 'react-native-elements';
import BreedContext from '../context/breeds/breedContext';

export default function ResultsShowScreen({route}) {
  const {nameReed} = route.params;
  //extraer los valores del context
  const breedContext = useContext(BreedContext);
  const {breed, selectedBreed, cleanBreed} = breedContext;

  useEffect(() => {
    selectedBreed(nameReed);
    return () => {
      console.log('componentWillUnmount');
      cleanBreed();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!breed) {
    return null;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={breed}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return <Image style={styles.image} source={{uri: item}} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  image: {
    height: 200,
    width: 200,
    borderWidth: 4,
    borderColor: '#20232a',
    marginBottom: 10,
  },
});
