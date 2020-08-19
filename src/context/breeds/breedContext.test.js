/* @jest-environment jsdom */
import React from 'react';
import 'react-native';
import BreedContext from './breedContext';
import BreedState from './breedState';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Text, Button} from 'react-native-elements';

configure({adapter: new Adapter()});

describe('breeds', () => {
  it('fetch all breeds dogs', () => {
    const TestComponent = () => {
      const {breeds, ListBreeds} = React.useContext(BreedContext);
      return (
        <>
          <Button onPress={ListBreeds} />
          {breeds.length > 0
            ? breeds.map((breed) => <Text>{breed}</Text>)
            : null}
        </>
      );
    };
    const wrapper = mount(
      <BreedState>
        <TestComponent />
      </BreedState>,
    );
    wrapper.find('Button').simulate('onPress');
  });
});
