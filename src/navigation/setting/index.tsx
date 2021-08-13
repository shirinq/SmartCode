import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container, MainFont, MainFontBold, onNormalize, RowContainer, Shadow3, Shadow7 } from '../../style/Styles';
import { BLACK, MEDIUM, WHITE } from '../../style/Colors';
import * as Info from 'react-native-device-info';
import { Icon } from 'react-native-elements';
import Language from '../../component/dialog/Language';

const Setting = () => {
  const [carrier, setCarrier] = useState<string>('');
  const [langV, setLandV] = useState<boolean>(false);

  useEffect(() => {
    Info.getCarrier().then(value => setCarrier(value));
  }, []);
  return (
    <View style={Container}>
      <View style={[styles.component, { ...Shadow3 }]}>
        <Text style={styles.title}>این دستگاه</Text>
        <Text style={styles.info}>{`${Info.getApplicationName()} ${carrier} ${Info.getVersion()}`}</Text>
        <Text style={styles.infoSub}>{`${Info.getBrand()}, ${Platform.OS} ${Info.getSystemVersion()} (${Platform.Version})`}</Text>
        <Text style={styles.infoSub}>token</Text>
      </View>
      <View style={styles.settingContainer}>
        <TouchableOpacity style={[styles.component, { flex: 1 }]} onPress={() => setLandV(true)}>
          <View style={[RowContainer, { marginBottom: 15 }]}>
            <Icon name="language" type="ionicon" color={BLACK} size={onNormalize(20)} />
            <Text style={styles.title}>زبان</Text>
          </View>
          <Text style={styles.infoSub}>فارسی</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.component, { flex: 1, marginLeft: 10 }]}>
          <View style={[RowContainer, { marginBottom: 15 }]}>
            <Icon name="keypad" type="ionicon" color={BLACK} size={onNormalize(20)} />
            <Text style={styles.title}>پین</Text>
          </View>
          <Text style={styles.infoSub}>\</Text>
        </TouchableOpacity>
      </View>

      <Language visible={langV} setVisible={setLandV} />
    </View>
  );
};

export default Setting;
const styles = StyleSheet.create({
  component: {
    ...Shadow7,
    borderRadius: 8,
    backgroundColor: WHITE,
    padding: 16
  },
  title: {
    fontFamily: MainFont,
    fontSize: onNormalize(16),
    color: MEDIUM,
    textTransform: 'capitalize'
  },
  info: {
    fontFamily: MainFontBold,
    fontSize: onNormalize(16),
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
    marginVertical: 25
  }
});
