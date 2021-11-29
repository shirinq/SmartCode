import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, Icon } from 'react-native-elements';
import { NavProps } from '../index';
import { BLACK, WHITE } from '../../style/Colors';
import { ButtonStyle, Container, MainFont, MainFontBold, onNormalize } from '../../style/Styles';
import Footer from './Footer';
import { AUTH, LOGIN_UP } from '../../utils/Const';
import { useTranslation } from 'react-i18next';
import BarcodeScanner from '../../component/BarcodeScanner';
import { useSelector } from 'react-redux';
import { AppSettingModel } from '../../model/StoreModels';
import { onRegister } from '../../services/Requests';
import { setToken } from '../../asyncStorage';
import { StackActions } from '@react-navigation/native';
import { getUniqueId } from 'react-native-device-info';

const Login = ({ navigation }: NavProps) => {
  const { alignment } = useSelector(({ appSetting }: { appSetting: AppSettingModel }) => appSetting);
  const [scanner, setScanner] = useState<boolean>(false);
  const { t } = useTranslation();

  const setID = (id: string) => {
    if (new RegExp(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i).test(id)) {
      navigation.popToTop();
      navigation.dispatch(StackActions.replace(AUTH));
    }
  };

  return (
    <View style={Container}>
      <StatusBar barStyle="dark-content" backgroundColor={WHITE} />
      <View style={{flex:1}}>
        <Avatar source={require('../../assets/images/logoBlack.png')} size={onNormalize(120)} containerStyle={{ marginBottom: onNormalize(40), alignSelf:'center' }} />
        <Text style={[styles.welcome, { alignSelf: alignment }]}>{t('welcome')}</Text>
        <Text style={[styles.subtitle, { alignSelf: alignment }]}>{t('qrScanDes')}</Text>
        <Button titleStyle={styles.btnTitle} buttonStyle={[ButtonStyle]} containerStyle={{ width: '80%', marginVertical: onNormalize(50), alignSelf:'center' }} title="QRCode Scanner"
                onPress={() => setScanner(true)} />
      </View>
      <View>
        <Button type='clear' containerStyle={{width:'25%', alignSelf: 'center'}} icon={<Icon name="cloud" type="feather" />} onPress={() => navigation.navigate(LOGIN_UP)}/>
        <Footer />
      </View>
      <BarcodeScanner visible={scanner} setVisible={setScanner} setScan={setID} />
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  main: {
    flex:1,
    padding:16
  },
  welcome: {
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
