import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { CompanyType } from '../../types';

import { notFound } from '../../utils/imageNotFound';

type Props = {
  company: CompanyType;
};

const styles = StyleSheet.create({
  company: {
    alignItems: 'center',
    margin: 3,
    width: 150
  },
  logo: {
    height: 100,
    objectFit: 'contain',
    marginBottom: 5,
    width: 100,
  },
});

const Company = ({ company }: Props): React.JSX.Element => {
  const [imageUri, setImageUri] = useState<string>(
    `https://image.tmdb.org/t/p/w185/${company.logo_path}`,
  );

  return (
    <View style={styles.company}>
      <Image
        source={{ uri: imageUri }}
        style={styles.logo}
        onError={() => setImageUri(notFound)}
      />
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Text style={{ flexShrink: 1, flexWrap: 'wrap' }}>{company.name}</Text>
      </View>
    </View>
  );
};

export default Company;
