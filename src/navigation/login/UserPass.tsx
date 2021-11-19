import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { BLACK, MEDIUM, WHITE } from '../../style/Colors';
import { Avatar, Button, Icon } from 'react-native-elements';
import { ButtonStyle, MainFont, MainFontBold, onNormalize } from '../../style/Styles';
import Footer from './Footer';
import { NavProps } from '../index';
import TextInput from '../../component/TextInput';
import { AUTH } from '../../utils/Const';
import { StackActions } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { AppSettingModel } from '../../model/StoreModels';

const UserPass = ({ navigation }: NavProps) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { alignment } = useSelector(({ appSetting }: { appSetting: AppSettingModel }) => appSetting);
  const { t } = useTranslation();

  const onLogin = () => {
    navigation.popToTop();
    navigation.dispatch(StackActions.replace(AUTH));
    //todo:get user token
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={WHITE} />
      <Avatar source={require('../../assets/images/logoBlack.png')} size={100} containerStyle={{ marginBottom: 15 }} />
      <Text style={[styles.title, { alignSelf: alignment }]}>{t('login')}</Text>
      <Text style={[styles.subtitle, { alignSelf: alignment }]}>{t('userPassTitle')}</Text>
      <View style={{ marginTop: 50, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center' }}>
        <TextInput value={username} onChangeText={setUsername} placeholder={t('username')} blurOnSubmit
                   leftIcon={<Icon name="user" type="feather" size={onNormalize(20)} color={MEDIUM} />} />
        <TextInput value={password} onChangeText={setPassword} secureTextEntry placeholder={t('password')} blurOnSubmit
                   leftIcon={<Icon name="lock" type="feather" size={onNormalize(20)} color={MEDIUM} />} />
      </View>
      <Button title={t('login')} type="solid" buttonStyle={ButtonStyle} disabled={password.length == 0 || username.length == 0} onPress={onLogin}
              containerStyle={{ width: '100%', marginVertical: 30 }} titleStyle={styles.btnTitle} />
      <Button title={t('forgetPass')} type="clear" containerStyle={{ width: '100%' }} titleStyle={[styles.btnTitle, { fontSize: onNormalize(12), color: BLACK }]} />
      <Button title={t('registerTitle')} type="clear" containerStyle={{ width: '100%' }} titleStyle={[styles.btnTitle, { fontSize: onNormalize(12), color: BLACK }]} />
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
