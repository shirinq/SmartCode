import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { BLACK, MEDIUM, WHITE } from '../../style/Colors';
import { Avatar, Button, Icon, Input } from 'react-native-elements';
import { ButtonStyle, MainFont, MainFontBold, onNormalize } from '../../style/Styles';
import Footer from './Footer';
import { Props } from '../index';
import TextInput from '../../component/TextInput';
import { AUTH } from '../../utils/Const';
import { StackActions } from '@react-navigation/native';

const UserPass = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={WHITE} />
      <Avatar source={require('../../assets/images/logoBlack.png')} size={100} containerStyle={{ marginBottom: 15 }} />
      <Text style={styles.title}>ورود</Text>
      <Text style={styles.subtitle}>نام کاربری و رمز عبور خود را وارد کنید.</Text>
      <View style={{ marginTop: 50, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center' }}>
        <TextInput placeholder="نام کاربری" blurOnSubmit leftIcon={<Icon name="user" type="feather" size={onNormalize(20)} color={MEDIUM} />} />
        <TextInput placeholder="رمز عبور" blurOnSubmit leftIcon={<Icon name="lock" type="feather" size={onNormalize(20)} color={MEDIUM} />} />
      </View>
      <Button title="ورود" type="solid" buttonStyle={ButtonStyle} onPress={() => {
        navigation.popToTop();
        navigation.dispatch(StackActions.replace(AUTH));
      }}
              containerStyle={{ width: '100%', marginVertical: 30 }} titleStyle={styles.btnTitle} />
      <Button title="رمز عبور خود را فراموش کرده اید؟" type="clear" containerStyle={{ width: '100%' }} titleStyle={[styles.btnTitle, { fontSize: onNormalize(12), color: BLACK }]} />
      <Button title="عضو سایت نیستید؟ ثبت نام" type="clear" containerStyle={{ width: '100%' }} titleStyle={[styles.btnTitle, { fontSize: onNormalize(12), color: BLACK }]} />
      <Footer />
    </View>
  );
};
export default UserPass;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: WHITE,
    padding: 16,
    flex: 1
  },
  title: {
    marginTop: 20,
    alignSelf: 'flex-end',
    color: BLACK,
    fontSize: 20,
    fontFamily: MainFontBold
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
