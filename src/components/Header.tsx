/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

'use strict';

import React from 'react';
import {Image, View, useWindowDimensions, StyleSheet} from 'react-native';

const useViewportUnits = () => {
  const {width, height} = useWindowDimensions();

  const vh = height / 100;
  const vw = width / 100;

  return {vh, vw};
};

const Header = () => {
  const {vh} = useViewportUnits();

  const logoStyle = {
    height: 40 * vh,
  };

  return (
    <View style={styles.container}>
      <Image
        accessibilityRole={'image'}
        source={require('./logo.gif')}
        style={logoStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
export default Header;
