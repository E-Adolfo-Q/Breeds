import 'react-native-gesture-handler';
import * as React from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BreedState from './src/context/breeds/breedState';
import ListBreeds from './src/screens/ListBreedsScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
const Stack = createStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ListBreeds"
            component={ListBreeds}
            options={{
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTitleAlign: 'center',
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            options={({route}) => ({
              title: route.params.nameReed,
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTitleAlign: 'center',
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            })}
            name="ResultsShow"
            component={ResultsShowScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default () => {
  return (
    <BreedState>
      <App />
    </BreedState>
  );
};
