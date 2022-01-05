import React, { useState } from 'react';
import { StatusBar, View } from 'react-native';
import { WHITE } from '../../../style/Colors';
import { Container } from '../../../style/Styles';
import Header from './Header';
import { NavProps } from '../../index';
import { CODE } from '../../../utils/Const';
import { useTranslation } from 'react-i18next';
import Component from './Component';
import { onRegister } from '../../../services/Requests';
import { getDeviceNameSync, getUniqueId } from 'react-native-device-info';
import { setToken } from '../../../asyncStorage';
import { useDispatch } from 'react-redux';
import { AppSettingActions } from '../../../redux/slice/AppSetting';
import { onErrorMessage } from '../../../utils';


const Authentication = ({ navigation }: NavProps) => {
  const { t } = useTranslation();
  const [step, setStep] = useState<1 | 2>(1);
  const [pass1, setPass1] = useState<string>('');
  const [confPass1, setConfPass1] = useState<string>('');
  const [pass2, setPass2] = useState<string>('');
  const [confPass2, setConfPass2] = useState<string>('');

  const dispatch = useDispatch();

  const onNext = () => {
    onRegister({
      imeI1: getUniqueId(), imeI2: getUniqueId(), phone: 'HUAWEI G7-L01',
      pni: '1234', serialNumber: 'string', piN1: pass1, piN2: pass2
    }).then(data => {
      if (data) {
        dispatch(AppSettingActions.setToken(data));
        if (navigation.canGoBack())
          navigation.popToTop();
        navigation.replace(CODE, { title: 'ثبت نام', code: 111111, pinTitle: 'کد را وارد کنید', isRegister: true });
        //navigation.dispatch(StackActions.replace(HOME));
      } else {
        onErrorMessage('Some thing went wrong!')
      }
    }).catch(e => {
      onErrorMessage(e.toString())
    });
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
