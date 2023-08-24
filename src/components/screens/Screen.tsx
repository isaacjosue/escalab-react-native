import React, { PropsWithChildren } from 'react';
import { View, StyleSheet } from 'react-native';

import Header from './Header';
import { navBarHeight } from '../../utils/navBarHeight';

const styles = StyleSheet.create({
  screen: {
    paddingBottom: navBarHeight,
  },
});

const Screen = ({ children }: PropsWithChildren): React.JSX.Element => {
  return (
    <View style={styles.screen}>
      <Header />
      {children}
    </View>
  );
};

export default Screen;
