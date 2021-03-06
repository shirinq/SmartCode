import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AUTH, CODE, HOME, LOGIN, LOGIN_UP, SPLASH } from '../utils/Const';
import Login from './login/Login';
import Splash from './Splash';
import { onHeaderBasicStyle } from '../style/Styles';
import UserPass from './login/UserPass';
import Authentication from './authentication/init';
import Home from './home';
import Code from './Code';
import { NativeStackScreenProps } from 'react-native-screens/native-stack';
import { getLocale, getToken } from '../asyncStorage';
import { useDispatch } from 'react-redux';
import { AppSettingActions } from '../redux/slice/AppSetting';
import { _Direction } from '../model/StoreModels';

const Langs = require('../assets/lang/Langs.json');

export type RootStackParamList = {
  Splash: undefined,
  Login: undefined,
  LoginUserPass: undefined,
  Authentication: undefined,
  Home: undefined,
  Code: { title: string, pinTitle: string, code: number, isRegister:boolean },
};

const Stack = createStackNavigator<RootStackParamList>();

export type NavProps = NativeStackScreenProps<RootStackParamList, typeof SPLASH | typeof LOGIN | typeof LOGIN_UP | typeof AUTH | typeof CODE | typeof HOME>
export type CodeProps = NativeStackScreenProps<RootStackParamList, typeof CODE>

const Navigation = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getLocale().then(value => {
      dispatch(AppSettingActions.setLanguage(value));
      dispatch(AppSettingActions.setDirection(Langs.find((item: { name: string, locale: string, direction: _Direction }) => item.locale == value).direction));
    });
  }, []);

  return (
    <Stack.Navigator initialRouteName={SPLASH}>
      <Stack.Screen name={SPLASH} component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name={LOGIN} component={Login} options={onHeaderBasicStyle('')} />
      <Stack.Screen name={LOGIN_UP} component={UserPass} options={onHeaderBasicStyle('')} />
      <Stack.Screen name={AUTH} component={Authentication} options={{ headerShown: false }} />
      <Stack.Screen name={CODE} component={Code} options={{ headerShown: false }} />
      <Stack.Screen name={HOME} component={Home} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
export default Navigation;
