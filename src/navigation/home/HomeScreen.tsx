import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Container, MainFontBold, onNormalize } from '../../style/Styles';
import { WHITE } from '../../style/Colors';


const HomeScreen = () => {
  return (
    <View style={Container}>
      <StatusBar barStyle="dark-content" backgroundColor={WHITE} />
      <Text style={styles.title}>سلام شیرین قدوسی!</Text>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  title: {
    fontFamily: MainFontBold,
    fontSize: onNormalize(16),
    alignSelf: 'center'
  }
});
