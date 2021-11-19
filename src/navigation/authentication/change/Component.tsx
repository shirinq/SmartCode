import React, { PropsWithChildren } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ButtonStyle, Container, MainFont, MainFontBold, onNormalize } from '../../../style/Styles';
import { BLACK } from '../../../style/Colors';
import TextInput from '../../../component/TextInput';
import { Button } from 'react-native-elements';
import { useTranslation } from 'react-i18next';

interface Props extends PropsWithChildren<any> {
  passNum: number,
  onConfirm: (args?: any) => void,
}

const PassComponent = ({ passNum, onConfirm, children }: Props) => {
  const {t} = useTranslation()

  return (
    <ScrollView contentContainerStyle={Container}>
      <Text style={styles.title}>{t('changePass'+passNum)}</Text>
      <TextInput placeholder={t('currentPass')} containerStyle={{ marginBottom: 10 }} keyboardType={'numeric'} />
      <TextInput placeholder={t('newPass')} keyboardType={'numeric'} />
      <TextInput placeholder={t('confirmPass')} keyboardType={'numeric'} />
      {children}
      <Button title={t('updatePass')} type="solid" buttonStyle={ButtonStyle} onPress={onConfirm} containerStyle={{ width: '100%', marginVertical: 30 }} titleStyle={styles.btnTitle} />
      <Button title={t('forgetPass')} type="clear" containerStyle={{ width: "100%" }} titleStyle={[styles.btnTitle, { fontSize: onNormalize(12), color: BLACK }]} />
    </ScrollView>
  );
};

export default PassComponent;
const styles = StyleSheet.create({
  title: {
    marginVertical: 20,
    color: BLACK,
    fontSize: 20,
    fontFamily: MainFontBold
  },
  btnTitle: {
    fontFamily: MainFont,
    fontSize: onNormalize(14)
  }
});
