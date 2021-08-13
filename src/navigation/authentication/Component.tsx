import React, { PropsWithChildren } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ButtonStyle, Container, MainFont, MainFontBold, onNormalize } from '../../style/Styles';
import { BLACK } from '../../style/Colors';
import TextInput from '../../component/TextInput';
import { Button } from 'react-native-elements';

interface Props extends PropsWithChildren<any> {
  passName: string,
  onConfirm: (args?: any) => void,
}

const PassComponent = ({ passName, onConfirm, children }: Props) => {
  return (
    <ScrollView contentContainerStyle={Container}>
      <Text style={styles.title}>{`تغییر رمز ` + passName}</Text>
      <TextInput placeholder="رمز عبور فعلی" containerStyle={{ marginBottom: 10 }} keyboardType={'numeric'} />
      <TextInput placeholder="رمز جدید" keyboardType={'numeric'} />
      <TextInput placeholder="تکرار رمز جدید" keyboardType={'numeric'} />
      {children}
      <Button title="ثبت" type="solid" buttonStyle={ButtonStyle} onPress={onConfirm} containerStyle={{ width: '100%', marginVertical: 30 }} titleStyle={styles.btnTitle} />
      <Button title="رمز عبور خود را فراموش کرده اید؟" type="clear" containerStyle={{ width: "100%" }} titleStyle={[styles.btnTitle, { fontSize: onNormalize(12), color: BLACK }]} />
    </ScrollView>
  );
};

export default PassComponent;
const styles = StyleSheet.create({
  title: {
    marginVertical: 20,
    alignSelf: 'flex-end',
    color: BLACK,
    fontSize: 20,
    fontFamily: MainFontBold
  },
  btnTitle: {
    fontFamily: MainFont,
    fontSize: onNormalize(14)
  }
});
