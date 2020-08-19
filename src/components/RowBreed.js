import React from 'react';
import {ListItem} from 'react-native-elements';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';

export default function RowBreed({result}) {
  return (
    <ListItem
      title={result}
      leftIcon={<AwesomeIcon name="dog" size={30} color="#000" />}
      bottomDivider
      titleStyle={{color: 'black'}}
      chevron={{color: 'black'}}
    />
  );
}
