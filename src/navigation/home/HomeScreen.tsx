import React from 'react';
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Container, MainFont, MainFontBold, onNormalize } from '../../style/Styles';
import { BLACK, WHITE } from '../../style/Colors';


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={WHITE} />
      <Text style={styles.title}>سلام شیرین قدوسی!</Text>
      <Image source={require('../../assets/images/logoBlack.png')} />
      <View>
        <Text style={styles.text}>زمان آخرین تغییر رمز اول:
          <Text> 1400/12/12 </Text>
        </Text>
        <Text style={styles.text}> زمان آخرین تغییر رمز دوم:
          <Text> 1400/12/12 </Text>
        </Text>
      </View>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    ...Container,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  title: {
    fontFamily: MainFontBold,
    fontSize: onNormalize(16),
    alignSelf: 'center'
  },
  text: {
    fontFamily: MainFont,
    marginBottom: 10,
    fontSize: onNormalize(14),
    color: BLACK
  }
});
