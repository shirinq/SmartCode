import React, { useEffect, useState } from 'react';
import Component from './Component';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TextInput from '../../component/TextInput';
import { Icon } from 'react-native-elements';
import { BLACK } from '../../style/Colors';
import { onNormalize } from '../../style/Styles';

const ChangePass1 = () => {
  const [cap, setCap] = useState<{ num1: number, num2: number, result: number | null, operator: number }>({ num1: 13, num2: 5, result: 8, operator: 0 });
  const [userRes, setUserRes] = useState<number | null>();

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const operator = Math.floor(Math.random() * 2);
    let number_1 = Math.floor(Math.random() * 100) + 1;
    let number_2 = Math.floor(Math.random() * 100) + 1;
    let result: number | null = null;

    switch (operator) {
      case 0:
        result = number_1 + number_2;
        break;
      case 1:
        const max = number_1 > number_2 ? number_1 : number_2;
        number_2 = number_1 > number_2 ? number_2 : number_1;
        number_1 = max;
        result = number_1 - number_2;
    }

    setCap({ num1: number_1, num2: number_2, result, operator: operator });
  };

  return <Component passName={'اول'} onConfirm={() => {}}>
    <View style={styles.captcha_view}>
      <Text style={{ fontSize: 22, textAlign: 'center', color: '#000' }}>
        {cap.num1} {cap.operator == 0 ? '+' : '-'} {cap.num2} {'= '}
      </Text>

      <TextInput
        placeholder="پاسخ"
        onChangeText={text => setUserRes(Number(text))}
        containerStyle={styles.textInputStyle}
        keyboardType='number-pad'
      />
      <Icon name='reload1' type='antdesign' color={BLACK} size={onNormalize(20)} onPress={generateCaptcha}/>
    </View>
  </Component>;
};

export default ChangePass1;

const styles = StyleSheet.create({
  captcha_view: {
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 5
  },

  textInputStyle: {
    height: 40,
    width: 200,
    margin:10,
  },

  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    padding: 5
  }

});
