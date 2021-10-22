import React, { useEffect, useRef, useState } from 'react';
import { Animated, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container, MainFont, MainFontBold, onNormalize, Shadow1 } from '../style/Styles';
import { BLACK, ERROR, MEDIUM, WHITE } from '../style/Colors';
import { NavProps } from './index';
import { Button } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
import { getKeyboardSetting } from '../asyncStorage';
import TextInput from '../component/TextInput';

const Code = ({ navigation }: NavProps) => {
  const [pin, setPin] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>('');
  const [isSystem, setSystem] = useState(false);

  const shake = useRef(new Animated.Value(0)).current;

  const { t } = useTranslation();

  useEffect(() => {
    getKeyboardSetting().then(value => {
      setSystem(value.isSystem);
    });
  }, []);

  const startShake = () => {
    Animated.sequence([
      Animated.timing(shake, { toValue: 10, duration: 70, useNativeDriver: true }),
      Animated.timing(shake, { toValue: -10, duration: 70, useNativeDriver: true }),
      Animated.timing(shake, { toValue: 10, duration: 70, useNativeDriver: true }),
      Animated.timing(shake, { toValue: 0, duration: 70, useNativeDriver: true })
    ]).start();
  };

  const onPinChange = (number: number) => {
    if (pin.length < 4) {
      setPin(pin + number.toString());
      setError(false);
    }
  };

  useEffect(() => {
    if (pin.length == 4) {
      if (pin == '1234') {
        setError(true);
        setErrorText(t('tryAgain'));
        startShake();
        setPin('');
      } else
        navigation.goBack();
    }
  }, [pin]);

  return (
    <View style={Container}>
      <Text style={styles.title}>کارت به کارت</Text>
      <Text style={styles.code}>1234</Text>
      <Text style={styles.pinTitle}>رمز اول را وارد کنید</Text>
      <Text style={styles.errorText}>{errorText}</Text>
      {
        isSystem ? <SystemKeyboard pin={pin} onPinChange={onPinChange} setPin={setPin} shake={shake} error={error} /> :
          <SmartCodeKeyboard pin={pin} onPinChange={onPinChange} setPin={setPin} shake={shake} error={error} />
      }
    </View>
  );
};
export default Code;

const SmartCodeKeyboard = ({
                             pin,
                             setPin,
                             error,
                             onPinChange,
                             shake
                           }: { pin: string, setPin: (arg: string) => void, error: boolean, onPinChange: (arg: number) => void, shake: Animated.Value }) => {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  useEffect(() => {
    getKeyboardSetting().then(value => {
      if (value.isRandom)
        setData(data.sort(() => .5 - Math.random()));
    });
  }, []);


  return (
    <View>
      <Animated.View style={{ flexDirection: 'row', justifyContent: 'space-between', width: onNormalize(100), alignSelf: 'center', transform: [{ translateX: shake }] }}>
        <View style={[styles.pin, { backgroundColor: pin && pin.length >= 1 ? BLACK : WHITE, borderColor: error ? ERROR : pin && pin.length >= 1 ? BLACK : MEDIUM }]} />
        <View style={[styles.pin, { backgroundColor: pin && pin.length >= 2 ? BLACK : WHITE, borderColor: error ? ERROR : pin && pin.length >= 2 ? BLACK : MEDIUM }]} />
        <View style={[styles.pin, { backgroundColor: pin && pin.length >= 3 ? BLACK : WHITE, borderColor: error ? ERROR : pin && pin.length >= 3 ? BLACK : MEDIUM }]} />
        <View style={[styles.pin, { backgroundColor: pin && pin.length >= 4 ? BLACK : WHITE, borderColor: error ? ERROR : pin && pin.length >= 4 ? BLACK : MEDIUM }]} />
      </Animated.View>
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
                  }} type="clear" title="CANCEL" onPress={() => setPin('')} /> :
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

const SystemKeyboard = ({
                          pin,
                          setPin,
                          error,
                          onPinChange,
                          shake
                        }: { pin: string, setPin: (arg: string) => void, error: boolean, onPinChange: (arg: number) => void, shake: Animated.Value }) => {
  return (
    <View>
      <TextInput />
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
  }
});
