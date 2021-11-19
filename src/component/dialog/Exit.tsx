import React, { useState } from 'react';
import BaseDialog from './BaseDialog';
import { StyleSheet, Text, View } from 'react-native';
import { ButtonOutStyle, ButtonStyle, MainFont, MainFontBold, onNormalize, RowContainer } from '../../style/Styles';
import { BLACK, ERROR } from '../../style/Colors';
import { Button } from 'react-native-elements';
import { StackActions, useNavigation } from '@react-navigation/native';
import { LOGIN } from '../../utils/Const';
import TextInput from '../TextInput';
import { useTranslation } from 'react-i18next';
import { setToken } from '../../asyncStorage';

const Exit = ({ visible, setVisible }: { visible: boolean, setVisible: (arg: boolean) => void }) => {
  const navigation = useNavigation();
  const [text, setText] = useState<string>();
  const { t } = useTranslation();

  const onExit = () => {
    setVisible(false);
    setToken('');
    navigation.dispatch(StackActions.popToTop);
    navigation.dispatch(StackActions.replace(LOGIN));
  };

  return (
    <BaseDialog visible={visible} setVisible={setVisible} width="90%">
      <Text style={styles.title}>{t('logoutTitle')}</Text>
      <Text style={styles.text}>{t('logoutDesc')}</Text>
      <Text style={styles.text}>{t('logoutText')} <Text style={{ fontFamily: MainFontBold, color: ERROR }}>DELETE</Text> {t('logoutText2')}</Text>

      <TextInput value={text} onChangeText={setText} containerStyle={{ marginTop: 35 }} />
      <View style={[RowContainer, { marginTop: 35 }]}>
        <Button title={t('cancel')} type="outline" buttonStyle={[ButtonOutStyle, { height: onNormalize(40) }]} onPress={() => setVisible(false)}
                containerStyle={{ flex: 1 }}
                titleStyle={[styles.btnTitle, { color: BLACK }]} />
        <Button title={t('logout')} type="solid" disabled={text !== 'DELETE'} buttonStyle={[ButtonStyle, { height: onNormalize(40) }]} onPress={onExit}
                containerStyle={{ flex: 1, marginStart: 15 }}
                titleStyle={styles.btnTitle} />
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
    marginBottom: 15
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
