import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Navigation, Route } from '../../types';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#34d399',
    flexDirection: 'row',
    padding: 5,
  },
  route: {
    color: 'black',
    fontSize: 16,
    margin: 5,
  },
  currentRoute: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

const Header = (): React.JSX.Element => {
  const navigation = useNavigation<Navigation>();
  const route = useRoute<Route>();

  return (
    <View style={styles.header}>
      <Pressable onPress={() => navigation.navigate('Home')}>
        <Text
          style={[
            styles.route,
            route.name === 'Home' ? styles.currentRoute : null,
          ]}>
          Home
        </Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Search')}>
        <Text
          style={[
            styles.route,
            route.name === 'Search' ? styles.currentRoute : null,
          ]}>
          Search
        </Text>
      </Pressable>
    </View>
  );
};

export default Header;
