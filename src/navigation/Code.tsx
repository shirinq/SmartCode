import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container, MainFont, MainFontBold, onNormalize, Shadow1 } from '../style/Styles';
import { BLACK, ERROR, MEDIUM, WHITE } from '../style/Colors';
import { CodeProps } from './index';
import { Button } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
import { getKeyboardSetting, setToken } from '../asyncStorage';
import { onAuthentication, onConfirm } from '../services/Requests';
import { StackActions, useNavigation } from '@react-navigation/native';
import { Cursor, CodeField, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import { onErrorMessage } from '../utils';
import { HOME } from '../utils/Const';
import { useSelector } from 'react-redux';
import { AppSettingModel } from '../model/StoreModels';

const Code = ({ navigation, route }: CodeProps) => {
  const {token} = useSelector(({appSetting}: { appSetting: AppSettingModel }) => appSetting);
  const codeLength = route.params.isRegister ? 6 : 4;
  const [pin, setPin] = useState<string>('');
  const [isSystem, setSystem] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    getKeyboardSetting().then(value => {
      setSystem(value.isSystem);
    });
  }, []);

  const onPinChange = (number: number) => {
    if (pin.length < codeLength) {
      setPin(pin + number.toString());
    }
  };

  useEffect(() => {
    if (pin.length == codeLength) {
      if (route.params.isRegister)
        onConfirm(pin).then(value => {
          navigation.replace(HOME);
          setToken(token||'')
        }).catch(error => {
          setPin('')
          onErrorMessage(error.toString())
        });
      else onAuthentication(pin, '').then()
    }
  }, [pin]);

  return (
    <View style={Container}>
      <Text style={styles.title}>{t(route.params.title)}</Text>
      <Text style={styles.code}>{route.params.code}</Text>
      <Text style={styles.pinTitle}>{t(route.params.pinTitle)}</Text>
      {
        isSystem ? <SystemKeyboard pin={pin} onPinChange={onPinChange} setPin={setPin} /> :
          <SmartCodeKeyboard pin={pin} onPinChange={onPinChange} setPin={setPin} />
      }
    </View>
  );
};
export default Code;

interface Props {
  pin: string,
  setPin: (arg: string) => void,
  onPinChange: (arg: number) => void
}

const SmartCodeKeyboard = ({ pin, setPin, onPinChange }: Props) => {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const navigation = useNavigation();

  useEffect(() => {
    getKeyboardSetting().then(value => {
      if (value.isRandom)
        setData(data.sort(() => .5 - Math.random()));
    });
  }, []);

  const onCancel = () => {
    if (pin.length > 0)
      setPin('');
    else navigation.dispatch(StackActions.pop(1));
  };


  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: onNormalize(100), alignSelf: 'center' }}>
        <View style={[styles.pin, { backgroundColor: pin && pin.length >= 1 ? BLACK : WHITE, borderColor: pin && pin.length >= 1 ? BLACK : MEDIUM }]} />
        <View style={[styles.pin, { backgroundColor: pin && pin.length >= 2 ? BLACK : WHITE, borderColor: pin && pin.length >= 2 ? BLACK : MEDIUM }]} />
        <View style={[styles.pin, { backgroundColor: pin && pin.length >= 3 ? BLACK : WHITE, borderColor: pin && pin.length >= 3 ? BLACK : MEDIUM }]} />
        <View style={[styles.pin, { backgroundColor: pin && pin.length >= 4 ? BLACK : WHITE, borderColor: pin && pin.length >= 4 ? BLACK : MEDIUM }]} />
        <View style={[styles.pin, { backgroundColor: pin && pin.length >= 5 ? BLACK : WHITE, borderColor: pin && pin.length >= 5 ? BLACK : MEDIUM }]} />
        <View style={[styles.pin, { backgroundColor: pin && pin.length >= 6 ? BLACK : WHITE, borderColor: pin && pin.length >= 6 ? BLACK : MEDIUM }]} />
      </View>
      <FlatList data={[...data, -1, 0, -2]} keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{ alignSelf: 'center', alignItems: 'center', marginTop: 25 }} numColumns={3}
                renderItem={({ item }) => (item >= 0 ? <TouchableOpacity activeOpacity={0.5} onPress={() => onPinChange(item)} style={styles.keyboardContainer}>
                  <Text style={styles.keyboardText}>{item}</Text>
                </TouchableOpacity> : item == -1 ?
                  <Button containerStyle={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginHorizontal: onNormalize(13),
                    borderRadius: 100,
                    width: onNormalize(75),
                    height: onNormalize(55),
                    marginVertical: 15
                  }} type="clear" title="CANCEL" onPress={onCancel} /> :
                  <View style={[{
                    backgroundColor: 'transparent', alignItems: 'center',
                    justifyContent: 'center',
                    width: onNormalize(55),
                    height: onNormalize(55),
                    marginHorizontal: 20,
                    marginVertical: 15
                  }]} />)} />
    </View>
  );
};

const SystemKeyboard = ({ pin, setPin, onPinChange }: Props) => {
  const ref = useBlurOnFulfill({ value: pin, cellCount: 6 });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: pin,
    setValue: setPin
  });

  const navigation = useNavigation();

  const onCancel = () => {
    if (pin.length > 0)
      setPin('');
    else {
      if (navigation.canGoBack())
        navigation.goBack();
      else {
      }
    }
  };

  return (
    <View style={{ marginTop: 15 }}>
      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={pin}
        onChangeText={setPin}
        cellCount={6}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {(symbol ? '•' : symbol) || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      <Button containerStyle={{
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: onNormalize(13),
        borderRadius: 100,
        width: onNormalize(75),
        height: onNormalize(55),
        marginVertical: 15
      }} type="clear" title="CANCEL" onPress={onCancel} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: onNormalize(18),
    fontFamily: MainFontBold,
    color: BLACK,
    textAlign: 'center'
  },
  code: {
    fontWeight: 'bold',
    fontSize: onNormalize(45),
    color: BLACK,
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 50
  },
  pinTitle: {
    color: MEDIUM,
    textAlign: 'center',
    fontSize: onNormalize(14),
    fontFamily: MainFont
  },
  pin: {
    borderRadius: 100,
    borderWidth: 2,
    borderColor: BLACK,
    width: onNormalize(12),
    height: onNormalize(13)
  },
  keyboardContainer: {
    borderRadius: 100,
    backgroundColor: BLACK,
    width: onNormalize(55),
    height: onNormalize(55),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginVertical: 15,
    ...Shadow1
  },
  keyboardText: {
    color: WHITE,
    fontSize: onNormalize(20)
  },
  errorText: {
    color: ERROR,
    fontSize: onNormalize(14),
    fontFamily: MainFont,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 15
  },
  fieldRow: {
    marginTop: 20,
    flexDirection: 'row',
    marginLeft: 8
  },
  cell: {
    width: onNormalize(50),
    height: onNormalize(50),
    lineHeight: 40,
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    marginLeft: 8,
    borderRadius: 6,
    backgroundColor: '#eee'
  },
  focusCell: {
    borderColor: '#000'
  }
});
