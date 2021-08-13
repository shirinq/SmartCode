import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BLACK, MEDIUM, PRIMARY, WHITE } from '../../style/Colors';
import { Container, MainFont, MainFontBold, onNormalize, Shadow7 } from '../../style/Styles';
import Header from './Header';
import { Props } from '../index';
import { HOME } from '../../utils/Const';
import TextInput from '../../component/TextInput';
import { Icon } from 'react-native-elements';
import { StackActions } from '@react-navigation/native';


const Authentication = ({ navigation }: Props) => {
  const [step, setStep] = useState<number>(1);
  const [title, setTitle] = useState<string>('رمز اول');

  const onNext = () => {
    if (step < 2) {
      setStep(step + 1);
      if (step + 1 == 1)
        setTitle('رمز دوم');
    } else {
      navigation.popToTop();
      navigation.dispatch(StackActions.replace(HOME));
    }
  };

  return (
    <View style={Container}>
      <StatusBar barStyle="dark-content" backgroundColor={WHITE} />
      <Header step={step} stepCount={2} title={title} />
      <TouchableOpacity style={[styles.nextBtn]} onPress={onNext}>
        <Text style={styles.nextLabel}>{'ثبت و ادامه'}</Text>
      </TouchableOpacity>
      <View style={{ marginTop: onNormalize(80) }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>برای استفاده از امکانات کیف پول و مواردی که بعدا به وجود خواهد آمد.</Text>
        <View style={{ marginTop: 50, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center' }}>
          <TextInput placeholder="رمز" blurOnSubmit
                     rightIcon={<Icon name="eye" type="feather" size={onNormalize(20)} color={PRIMARY} />}
                     leftIcon={<Icon name="lock" type="feather" size={onNormalize(20)} color={MEDIUM} />} inputStyle={{ textAlign: 'left' }} />
          <TextInput placeholder="تکرار رمز" blurOnSubmit
                     rightIcon={<Icon name="eye" type="feather" size={onNormalize(20)} color={PRIMARY} />}
                     leftIcon={<Icon name="lock" type="feather" size={onNormalize(20)} color={MEDIUM} />} inputStyle={{ textAlign: 'left' }} />
        </View>
      </View>
    </View>
  );
};
export default Authentication;

const styles = StyleSheet.create({
  nextBtn: {
    position: 'absolute',
    bottom: onNormalize(100),
    right: 0,
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
