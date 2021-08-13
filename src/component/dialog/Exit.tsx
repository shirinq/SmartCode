import React from 'react';
import BaseDialog from './BaseDialog';
import { StyleSheet, Text, View } from 'react-native';
import { ButtonOutStyle, ButtonStyle, MainFont, MainFontBold, onNormalize, RowContainer } from '../../style/Styles';
import { BLACK } from '../../style/Colors';
import { Button } from 'react-native-elements';
import { StackActions, useNavigation } from '@react-navigation/native';
import { LOGIN } from '../../utils/Const';

const Exit = ({ visible, setVisible }: { visible: boolean, setVisible: (arg: boolean) => void }) => {
  const navigation = useNavigation();

  const onExit = () =>{
    setVisible(false)
    navigation.dispatch(StackActions.popToTop);
    navigation.dispatch(StackActions.replace(LOGIN))
  }

  return (
    <BaseDialog visible={visible} setVisible={setVisible} width="90%">
      <Text style={styles.title}>خروج از حساب کاربری</Text>
      <Text style={styles.text}>برای خروج از حساب کاربری خود اطمینان دارید؟</Text>
      <View style={[RowContainer,{marginTop:35}]}>
        <Button title="لغو" type="outline" buttonStyle={[ButtonOutStyle, {height:onNormalize(40)}]} onPress={() => setVisible(false)} containerStyle={{ flex: 1 }} titleStyle={[styles.btnTitle, {color:BLACK}]} />
        <Button title="خروج" type="solid" buttonStyle={[ButtonStyle, {height:onNormalize(40)}]} onPress={onExit} containerStyle={{ flex: 1, marginStart:15 }} titleStyle={styles.btnTitle} />
      </View>
    </BaseDialog>
  );
};

export default Exit;
const styles = StyleSheet.create({
  title: {
    fontFamily: MainFontBold,
    fontSize: onNormalize(16),
    color: BLACK,
    marginBottom:15
  },
  text: {
    fontFamily: MainFont,
    fontSize: onNormalize(15),
    color: BLACK
  },
  btnTitle: {
    fontFamily: MainFont,
    fontSize: onNormalize(14)
  }
});
