import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BLACK, MEDIUM, WHITE } from '../../../style/Colors';
import { _Disabled, MainFont, MainFontBold, onNormalize, Shadow7 } from '../../../style/Styles';
import TextInput from '../../../component/TextInput';
import { Icon } from 'react-native-elements';
import { useTranslation } from 'react-i18next';

interface _InitProps {
  password: string,
  setPassword: (val: string) => void,
  confPassword: string,
  setConfPassword: (val: string) => void,
  title: string,
  description: string,
  onNext: () => void
  nextDisable: boolean,
  nextTitle: string,
}


const Component = (prop: _InitProps) => {
  const { title, confPassword, setPassword, password, setConfPassword, onNext, nextDisable, nextTitle, description } = prop;
  const [visibPass, setVisibPass] = useState(true);
  const [visibConf, setVisibConf] = useState(true);
  const { t } = useTranslation();

  return (
    <View>
      <View style={{ marginTop: onNormalize(80) }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{description}</Text>
        <View style={{ marginTop: 50, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center' }}>
          <TextInput placeholder={t('password')} blurOnSubmit value={password} onChangeText={setPassword} secureTextEntry={visibPass} keyboardType={'numeric'} maxLength={4}
                     rightIcon={<Icon name="eye" type="feather" size={onNormalize(20)} color={BLACK} onPress={() => {}}
                                      onPressIn={() => setVisibPass(false)} onPressOut={() => setVisibPass(true)} />}
                     leftIcon={<Icon name="lock" type="feather" size={onNormalize(20)} color={MEDIUM} />} inputStyle={{ textAlign: 'left' }} />
          <TextInput placeholder={t('confirmPass')} blurOnSubmit value={confPassword} onChangeText={setConfPassword} secureTextEntry={visibConf} keyboardType="numeric" maxLength={4}
                     rightIcon={<Icon name="eye" type="feather" size={onNormalize(20)} color={BLACK} onPress={() => {}}
                                      onPressIn={() => setVisibConf(false)} onPressOut={() => setVisibConf(true)} />}
                     leftIcon={<Icon name="lock" type="feather" size={onNormalize(20)} color={MEDIUM} />} inputStyle={{ textAlign: 'left' }} />
        </View>
      </View>
      <TouchableOpacity disabled={nextDisable} style={[styles.nextBtn, nextDisable ? _Disabled : {}]} onPress={onNext}>
        <Text style={styles.nextLabel}>{nextTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Component;

const styles = StyleSheet.create({
  nextBtn: {
    alignSelf: 'flex-end',
    marginTop: onNormalize(50),
    backgroundColor: BLACK,
    height: onNormalize(60),
    width: onNormalize(130),
    ...Shadow7,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  nextLabel: {
    color: WHITE,
    fontFamily: MainFontBold,
    fontSize: onNormalize(15)
  },
  title: {
    marginTop: 20,
    color: BLACK,
    fontSize: onNormalize(20),
    fontFamily: MainFontBold
  },
  subtitle: {
    fontFamily: MainFont,
    fontSize: onNormalize(14),
    color: '#4b4b4b',
    marginTop: 20
  }
});
