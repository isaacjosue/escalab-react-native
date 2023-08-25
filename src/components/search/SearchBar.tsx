import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

const styles = StyleSheet.create({
  searchBar: {
    alignItems: 'center',
    borderColor: 'darkgray',
    borderRadius: 10,
    borderWidth: 3,
    flexDirection: 'row',
    height: 'auto',
    margin: 12,
    padding: 10,
  },
  icon: {
    color: 'blue',
    fontSize: 30,
    marginLeft: 10,
    position: 'absolute',
  },
  input: {
    color: 'black',
    fontSize: 20,
    paddingLeft: 40,
  },
});

const SearchBar = ({ query, setQuery }: Props): React.JSX.Element => {
  const handleChange = (text: string) => {
    setQuery(text);
  };

  return (
    <View style={styles.searchBar}>
      <Icon name="search" style={styles.icon} />
      <TextInput
        style={styles.input}
        onChangeText={handleChange}
        value={query}
        placeholder="Search..."
        autoFocus
      />
    </View>
  );
};

export default SearchBar;
