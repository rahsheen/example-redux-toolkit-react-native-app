/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

'use strict';

import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, useWindowDimensions, View} from 'react-native';

const useViewportUnits = () => {
  const {width, height} = useWindowDimensions();

  const vh = height / 100;
  const vw = width / 100;

  return {vh, vw};
};

const useBounceAnimation = (value = 10) => {
  const bounce = useRef(new Animated.Value(0)).current;

  bounce.interpolate({
    inputRange: [-300, -100, 0, 100, 101],
    outputRange: [300, 0, 1, 0, 0],
  });

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounce, {
          toValue: value,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(bounce, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [bounce, value]);

  return bounce;
};

const Header = () => {
  const {vh} = useViewportUnits();
  const bounce = useBounceAnimation();
  const height = 40 * vh;

  return (
    <View style={styles.container}>
      <Animated.Image
        accessibilityRole={'image'}
        source={require('./logo.gif')}
        style={{height, transform: [{translateY: bounce}]}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
export default Header;
