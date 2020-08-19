import React from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSafeArea} from 'react-native-safe-area-context';
import RowBreed from './RowBreed';

export default function ResultsList({breeds}) {
  const navigation = useNavigation();
  const insets = useSafeArea();

  const selectedItem = (item) => {
    navigation.navigate('ResultsShow', {
      nameReed: item,
    });
  };

  if (!breeds.length) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <SafeAreaView
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        flex: 1,
      }}>
      <FlatList
        data={breeds}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => selectedItem(item)}>
              <RowBreed result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
}
