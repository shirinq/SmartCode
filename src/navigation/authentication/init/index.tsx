import React, { useState } from 'react';
import { StatusBar, View } from 'react-native';
import { WHITE } from '../../../style/Colors';
import { Container } from '../../../style/Styles';
import Header from './Header';
import { NavProps } from '../../index';
import { HOME } from '../../../utils/Const';
import { StackActions } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import Component from './Component';


const Authentication = ({ navigation }: NavProps) => {
  const { t } = useTranslation();
  const [step, setStep] = useState<1 | 2>(1);
  const [pass1, setPass1] = useState<string>('');
  const [confPass1, setConfPass1] = useState<string>('');
  const [pass2, setPass2] = useState<string>('');
  const [confPass2, setConfPass2] = useState<string>('');

  const onNext = () => {
    if (navigation.canGoBack())
      navigation.popToTop();
    navigation.dispatch(StackActions.replace(HOME));
  };

  return (
    <View style={Container}>
      <StatusBar barStyle="dark-content" backgroundColor={WHITE} />
      <Header step={step} stepCount={2} title={step == 1 ? t('first') : t('second')} />
      {step == 1 ? <Component password={pass1} setPassword={setPass1} confPassword={confPass1} setConfPassword={setConfPass1} title={t('first')} description={t('descriptionP1')}
                              onNext={() => setStep(2)} nextDisable={pass1.length < 4 || pass1 != confPass1} nextTitle={t('continue')} /> :
        <Component password={pass2} setPassword={setPass2} confPassword={confPass2} setConfPassword={setConfPass2} title={t('second')} description={t('descriptionP2')}
                   onNext={onNext} nextDisable={false} nextTitle={pass2.length == 4 && pass2 == confPass2 ? t('continue') : t('later')} />
      }
    </View>
  );
};
export default Authentication;
