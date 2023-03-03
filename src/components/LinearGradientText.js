import React, { FC } from 'react';
import { TextStyle, StyleSheet } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import MyText from './MyText';

export const LinearGradientText = (props) => {
  const {
    text,
    textStyle = {},
    colors,
    start = { x: 0, y: 1 },
    end = { x: 1, y: 1 },
  } = props;

  return (
    <MaskedView
      maskElement={<MyText style={[styles.maskText, textStyle]}>{text}</MyText>}
    >
      <LinearGradient colors={colors} start={start} end={end}>
        <MyText style={[styles.text, textStyle]}>{text}</MyText>
      </LinearGradient>
    </MaskedView>
  );
};

const styles = StyleSheet.create({
  maskText: {
    backgroundColor: 'transparent',
  },
  text: {
    opacity: 0,
  },
});
