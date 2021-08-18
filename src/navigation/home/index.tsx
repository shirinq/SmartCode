import React, { useState } from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './HomeScreen';
import { Icon } from 'react-native-elements';
import { MainFont, MainFontBold, onHeaderBasicStyle, onNormalize } from '../../style/Styles';
import { BLACK, MEDIUM } from '../../style/Colors';
import { LOGOUT, MAIN, NOTIF_ARCHIVE, PASS1, PASS2, SERVICES, SETTING } from '../../utils/Const';
import ChangePass1 from '../authentication/ChangePass1';
import ChangePass2 from '../authentication/ChangePass2';
import Setting from '../setting';
import Exit from '../../component/dialog/Exit';
import Service from '../service';
import { Props } from '../index';

type DrawerList = {
  Main: undefined,
  Password1: undefined,
  Password2: undefined,
  Services: undefined,
  Setting: undefined,
  NotificationArchive: undefined
}
const Drawer = createDrawerNavigator<DrawerList>();


const Home = () => {

  return (
    <Drawer.Navigator initialRouteName={MAIN} screenOptions={{
      drawerType: 'front',
      drawerPosition: 'left',
      swipeEnabled: true,
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
        options={{
          title: 'تغییر رمز اول', drawerLabel: 'تغییر رمز اول', drawerLabelStyle: styles.label, drawerIcon: () => <View>
            <Icon name="lock" type="feather" />
            <Text style={{ position: 'absolute', alignSelf: 'center', top: 9, fontSize: onNormalize(12) }}>1</Text>
          </View>
        }}
      />
      <Drawer.Screen
        name={PASS2}
        component={ChangePass2}
        options={{
          title: 'تغییر رمز دوم', drawerLabel: 'تغییر رمز دوم', drawerLabelStyle: styles.label, drawerIcon: () => <View>
            <Icon name="lock" type="feather" />
            <Text style={{ position: 'absolute', alignSelf: 'center', top: 9, fontSize: onNormalize(12) }}>2</Text>
          </View>
        }}
      />
      <Drawer.Screen
        name={SERVICES}
        component={Service}
        options={{ title: 'سرویس های فعال', drawerLabel: 'سرویس های فعال', drawerLabelStyle: styles.label, drawerIcon: () => <Icon name="package" type="feather" /> }}
      />
      <Drawer.Screen
        name={NOTIF_ARCHIVE}
        component={() => null}
        options={{ title: 'اعلان ها', drawerLabel: 'اعلان ها', drawerLabelStyle: styles.label, drawerIcon: () => <Icon name="bell" type="feather" /> }}
      />
      <Drawer.Screen
        name={SETTING}
        component={Setting}
        options={{ title: 'تنظیمات', drawerLabel: 'تنظیمات', drawerLabelStyle: styles.label, drawerIcon: () => <Icon name="settings" type="feather" /> }}
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
