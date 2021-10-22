import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, Icon } from 'react-native-elements';
import { NavProps } from '../index';
import { BLACK, WHITE } from '../../style/Colors';
import { ButtonStyle, MainFont, MainFontBold, onNormalize } from '../../style/Styles';
import Footer from './Footer';
import { AUTH, LOGIN_UP } from '../../utils/Const';
import { useTranslation } from 'react-i18next';
import BarcodeScanner from '../../component/BarcodeScanner';
import { useSelector } from 'react-redux';
import { AppSettingModel } from '../../model/StoreModels';

const Login = ({ navigation }: NavProps) => {
  const { alignment } = useSelector(({ appSetting }: { appSetting: AppSettingModel }) => appSetting);
  const [scanner, setScanner] = useState<boolean>(false);
  const [id, setID] = useState<string>('');
  const { t } = useTranslation();

  useEffect(() => {
    if (id.length > 0) {
      //todo: validate user and get token
    }
  }, [id]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={WHITE} />
      <Avatar source={require('../../assets/images/logoBlack.png')} size={150} containerStyle={{ marginBottom: 40 }} />
      <Text style={[styles.welcome, { alignSelf: alignment }]}>{t('welcome')}</Text>
      <Text style={[styles.subtitle, { alignSelf: alignment }]}>{t('qrScanDes')}</Text>
      <Button titleStyle={styles.btnTitle} buttonStyle={[ButtonStyle]} containerStyle={{ width: '80%', marginVertical: 50 }} title="QRCode Scanner"
              onPress={() => setScanner(true)} />
      <Icon name="cloud" type="feather" iconStyle={{ alignSelf: 'center'}} containerStyle={{marginTop: onNormalize(100) }} onPress={() => navigation.navigate(LOGIN_UP)} />
      <Footer />
      <BarcodeScanner visible={scanner} setVisible={setScanner} setScan={setID} />
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
