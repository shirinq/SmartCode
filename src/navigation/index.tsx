import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { AUTH, CODE, HOME, LOGIN, LOGIN_UP, SPLASH } from '../utils/Const';
import Login from './login/Login';
import Splash from './Splash';
import { onHeaderBasicStyle } from '../style/Styles';
import UserPass from './login/UserPass';
import Authentication from './authentication';
import Home from './home';
import Code from './Code';

export type RootStackParamList = {
  Splash: undefined,
  ChooseLanguage: undefined,
  Login: undefined,
  LoginUserPass: undefined,
  Authentication: undefined,
  Home: undefined,
  Code: undefined,
};

const Stack = createStackNavigator<RootStackParamList>();

export type Props = { navigation: StackNavigationProp<RootStackParamList> };

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName={HOME}>
      <Stack.Screen name={SPLASH} component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name={LOGIN} component={Login} options={onHeaderBasicStyle('')} />
      <Stack.Screen name={LOGIN_UP} component={UserPass} options={onHeaderBasicStyle('')} />
      <Stack.Screen name={AUTH} component={Authentication} options={{ headerShown: false }} />
      <Stack.Screen name={CODE} component={Code} options={{ headerShown: false }} />
      <Stack.Screen name={HOME} component={Home} options={{ headerShown: false}} />
    </Stack.Navigator>
  );
};
export default Navigation;
