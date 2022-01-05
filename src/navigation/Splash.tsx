import React, { useEffect } from 'react';
import { ActivityIndicator, StatusBar, StyleSheet, View } from 'react-native';
import { BLACK, WHITE } from '../style/Colors';
import { MainFontBold, onNormalize } from '../style/Styles';
import { Avatar } from 'react-native-elements';
import { NavProps } from './index';
import { HOME, LOGIN } from '../utils/Const';
import { getToken } from '../asyncStorage';
import { useDispatch } from 'react-redux';
import { AppSettingActions } from '../redux/slice/AppSetting';

const Splash = ({ navigation }: NavProps) => {
  const dispatch = useDispatch();


  useEffect(() => {
    getToken().then(data => {
      if (data.length > 0)
        setTimeout(() => {
          dispatch(AppSettingActions.setToken(data));
          navigation.replace(HOME);
        }, 2000);
      else setTimeout(() => {
        navigation.replace(LOGIN);
      }, 2000);
    }).catch(reason => console.log(reason));
  }, []);

  return <View style={styles.container}>
    <StatusBar barStyle="light-content" backgroundColor={BLACK} />
    <Avatar source={require('../assets/images/logo.png')} size={onNormalize(300)} />
    <ActivityIndicator size="small" color={WHITE} style={{ position: 'absolute', alignSelf: 'center', bottom: onNormalize(30) }} />
  </View>;
};
export default Splash;

const styles = StyleSheet.create({
  container: {
    backgroundColor: BLACK,
    flex: 1,
    alignItems: 'center'
  },
  text: {
    fontFamily: MainFontBold,
    fontSize: onNormalize(25),
    color: WHITE
  }
});
