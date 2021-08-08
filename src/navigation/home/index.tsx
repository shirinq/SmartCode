import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './HomeScreen';
import { Icon } from 'react-native-elements';
import { MainFont, MainFontBold, onHeaderBasicStyle, onNormalize } from '../../style/Styles';
import { BLACK, MEDIUM } from '../../style/Colors';
import { LOGOUT, MAIN, PASS1, PASS2, SERVICES, SETTING } from '../../utils/Const';
import ChangePass1 from '../authentication/ChangePass1';
import ChangePass2 from '../authentication/ChangePass2';

type DrawerList = {
  Main: undefined,
  Password1: undefined,
  Password2: undefined,
  Services: undefined,
  Setting: undefined,
  Logout: undefined,
}
const Drawer = createDrawerNavigator<DrawerList>();

const Empty = () => {
  return <View />;
};


const Home = () => {

  return (
    <Drawer.Navigator initialRouteName={MAIN} screenOptions={{
      drawerType: 'front',
      drawerPosition: 'left',
      drawerActiveTintColor: MEDIUM,
      ...onHeaderBasicStyle('')
    }}>
      <Drawer.Screen
        name={MAIN}
        component={HomeScreen}
        options={{ title: 'صفحه اصلی', drawerLabel: 'صفحه اصلی', drawerLabelStyle: styles.label, drawerIcon: () => <Icon name="home" type="feather" /> }}
      />
      <Drawer.Screen
        name={PASS1}
        component={ChangePass1}
        options={{ title: 'تغییر رمز اول', drawerLabel: 'تغییر رمز اول', drawerLabelStyle: styles.label, drawerIcon: () => <Icon name="lock" type="feather" /> }}
      />
      <Drawer.Screen
        name={PASS2}
        component={ChangePass2}
        options={{ title: 'تغییر رمز دوم', drawerLabel: 'تغییر رمز دوم', drawerLabelStyle: styles.label, drawerIcon: () => <Icon name="lock" type="feather" /> }}
      />
      <Drawer.Screen
        name={SERVICES}
        component={Empty}
        options={{ title: 'سرویس های فعال', drawerLabel: 'سرویس های فعال', drawerLabelStyle: styles.label, drawerIcon: () => <Icon name="package" type="feather" /> }}
      />
      <Drawer.Screen
        name={SETTING}
        component={Empty}
        options={{ title: 'تنظیمات', drawerLabel: 'تنظیمات', drawerLabelStyle: styles.label, drawerIcon: () => <Icon name="settings" type="feather" /> }}
      />

      <Drawer.Screen
        name={LOGOUT}
        component={Empty}
        options={{ title: 'خروج', drawerLabel: 'خروج', drawerLabelStyle: styles.label, drawerIcon: () => <Icon name="log-out" type="feather" /> }}
      />
    </Drawer.Navigator>
  );
};
export default Home;
const styles = StyleSheet.create({
  label: {
    fontFamily: MainFont,
    color: BLACK,
    fontSize: onNormalize(16)
  },
  headerTitle: {
    fontFamily: MainFontBold,
    color: BLACK,
    fontSize: onNormalize(16)
  }
});
