import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container, MainFont, MainFontBold, onNormalize, RowContainer, Shadow3, Shadow7 } from '../../style/Styles';
import { BLACK, ERROR, MEDIUM, WHITE } from '../../style/Colors';
import * as Info from 'react-native-device-info';
import { Icon } from 'react-native-elements';
import Language from '../../component/dialog/Language';
import Exit from '../../component/dialog/Exit';
import Keyboard from './Keyboard';
import { getKeyboardSetting } from '../../asyncStorage';
import { useTranslation } from 'react-i18next';

const Setting = () => {
  const [langV, setLandV] = useState<boolean>(false);
  const [exitV, setExitV] = useState(false);
  const [keyV, setKeyV] = useState(false);
  const [keyboard, setKeyboard] = useState('');

  const { t } = useTranslation();

  useEffect(() => {
    getKeyboardSetting().then(value => {
      const text = value.isSystem ? t('system') : 'Smart code';
      setKeyboard(text);
    });
  }, []);

  return (
    <View style={Container}>
      <View style={styles.settingContainer}>
        <TouchableOpacity onPress={() => setExitV(true)} style={styles.component}>
          <View style={[RowContainer, { marginBottom: 15 }]}>
            <Text style={[styles.title, { color: ERROR }]}>{t('logout')}</Text>
            <Text style={styles.title}>{t('thisApp')}</Text>
          </View>
          <Text style={styles.infoSub}>{`${Info.getApplicationName()} ${Info.getVersion()}`}</Text>
        </TouchableOpacity>
        <View style={[styles.component, { ...Shadow3, marginLeft: 10 }]}>
          <Text style={[styles.title, { marginBottom: 15 }]}>{t('thisDevice')}</Text>
          <Text style={styles.infoSub}>{`${Info.getBrand()}, ${Platform.OS} ${Info.getSystemVersion()}`}</Text>
        </View>
      </View>
      <View style={styles.settingContainer}>
        <TouchableOpacity style={styles.component} onPress={() => setLandV(true)}>
          <View style={[RowContainer, { marginBottom: 15 }]}>
            <Icon name="language" type="ionicon" color={BLACK} size={onNormalize(20)} />
            <Text style={styles.title}>{t('language')}</Text>
          </View>
          <Text style={styles.infoSub}>فارسی</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setKeyV(true)} style={[styles.component, { marginLeft: 10 }]}>
          <View style={[RowContainer, { marginBottom: 15 }]}>
            <Icon name="keypad" type="ionicon" color={BLACK} size={onNormalize(20)} />
            <Text style={styles.title}>{t('Keyboard')}</Text>
          </View>
          <Text style={styles.infoSub}>{keyboard}</Text>
        </TouchableOpacity>
      </View>

      <Language visible={langV} setVisible={setLandV} />
      <Exit visible={exitV} setVisible={setExitV} />
      <Keyboard visible={keyV} setVisible={setKeyV} />
    </View>
  );
};

export default Setting;
const styles = StyleSheet.create({
  component: {
    ...Shadow7,
    borderRadius: 8,
    backgroundColor: WHITE,
    padding: 16,
    height: onNormalize(100),
    flex: 1
  },
  title: {
    fontFamily: MainFont,
    fontSize: onNormalize(16),
    color: MEDIUM,
    textTransform: 'capitalize'
  },
  info: {
    fontFamily: MainFontBold,
    fontSize: onNormalize(15),
    color: BLACK,
    textTransform: 'capitalize'
  },
  infoSub: {
    fontFamily: MainFont,
    fontSize: onNormalize(15),
    color: BLACK,
    textTransform: 'capitalize'
  },
  settingContainer: {
    ...RowContainer,
    marginVertical: 15
  }
});
