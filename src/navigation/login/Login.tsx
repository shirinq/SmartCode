import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, Icon } from 'react-native-elements';
import { Props } from '../index';
import { BLACK, WHITE } from '../../style/Colors';
import { ButtonStyle, MainFont, MainFontBold, onNormalize, RowContainer } from '../../style/Styles';
import Footer from './Footer';
import { AUTH, LOGIN_UP } from '../../utils/Const';

const Login = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={WHITE} />
      <Avatar source={require('../../assets/images/logoBlack.png')} size={150} containerStyle={{ marginBottom: 40 }} />
      <Text style={styles.welcome}>خوش آمدید</Text>
      <Text style={styles.subtitle}>برای ورود QR code ارائه شده توسط سایت را اسکن کنید.</Text>
      <Button titleStyle={styles.btnTitle} buttonStyle={[ButtonStyle]} containerStyle={{ width: '80%', marginVertical: 50 }} title="QR Code Scanner"  onPress={()=>navigation.navigate(AUTH)}/>
      <Icon name="cloud" type="feather" iconStyle={{ alignSelf: 'center', marginTop: 100 }} onPress={() => navigation.navigate(LOGIN_UP)} />
      <Footer />
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  lottie: {
    position: 'relative',
    marginLeft: 'auto',
    marginRight: 'auto',
    top: 10,
    flexDirection: 'row',
    left: 0,
    right: 0
  },
  welcome: {
    marginTop: 20,
    alignSelf: 'flex-end',
    color: BLACK,
    fontSize: 20,
    fontFamily: MainFontBold
  },
  container: {
    alignItems: 'center',
    backgroundColor: WHITE,
    padding: 16,
    flex: 1
  },
  btnTitle: {
    fontFamily: MainFont,
    fontSize: onNormalize(14)
  },
  subtitle: {
    alignSelf: 'flex-end',
    fontFamily: MainFont,
    fontSize: onNormalize(14),
    color: '#4b4b4b',
    marginTop: 20
  }
});
