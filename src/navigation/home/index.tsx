import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './HomeScreen';
import { Icon } from 'react-native-elements';
import { MainFont, MainFontBold, onHeaderBasicStyle, onNormalize } from '../../style/Styles';
import { BLACK, MEDIUM } from '../../style/Colors';
import { MAIN, NOTIF_ARCHIVE, PASS1, PASS2, SERVICES, SETTING } from '../../utils/Const';
import ChangePass1 from '../authentication/change/ChangePass1';
import ChangePass2 from '../authentication/change/ChangePass2';
import Setting from '../setting';
import Service from '../service';
import { useTranslation } from 'react-i18next';
import Notification from '../notification';

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
  const { t } = useTranslation();

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
        options={{ title: t('homeMenu'), drawerLabel: t('homeMenu'), drawerLabelStyle: styles.label, drawerIcon: () => <Icon name="home" type="feather" /> }}
      />
      <Drawer.Screen
        name={PASS1}
        component={ChangePass1}
        options={{
          title: t('changePass1'), drawerLabel: t('changePass1'), drawerLabelStyle: styles.label, drawerIcon: () => <View>
            <Icon name="lock" type="feather" />
            <Text style={{ position: 'absolute', alignSelf: 'center', top: 9, fontSize: onNormalize(12) }}>1</Text>
          </View>
        }}
      />
      <Drawer.Screen
        name={PASS2}
        component={ChangePass2}
        options={{
          title: t('changePass2'), drawerLabel: t('changePass2'), drawerLabelStyle: styles.label, drawerIcon: () => <View>
            <Icon name="lock" type="feather" />
            <Text style={{ position: 'absolute', alignSelf: 'center', top: 9, fontSize: onNormalize(12) }}>2</Text>
          </View>
        }}
      />
      <Drawer.Screen
        name={SERVICES}
        component={Service}
        options={{ title: t('serviceMenu'), drawerLabel: t('serviceMenu'), drawerLabelStyle: styles.label, drawerIcon: () => <Icon name="package" type="feather" /> }}
      />
      <Drawer.Screen
        name={NOTIF_ARCHIVE}
        component={Notification}
        options={{ title: t('notificationMenu'), drawerLabel: t('notificationMenu'), drawerLabelStyle: styles.label, drawerIcon: () => <Icon name="bell" type="feather" /> }}
      />
      <Drawer.Screen
        name={SETTING}
        component={Setting}
        options={{ title: t('settingMenu'), drawerLabel: t('settingMenu'), drawerLabelStyle: styles.label, drawerIcon: () => <Icon name="settings" type="feather" /> }}
      />
    </Drawer.Navigator>
  );
};
export default Home;
const styles = StyleSheet.create({
  label: {
    fontFamily: MainFont,
    color: BLACK,
    fontSize: onNormalize(13.7)
  },
  headerTitle: {
    fontFamily: MainFontBold,
    color: BLACK,
    fontSize: onNormalize(16)
  }
});
