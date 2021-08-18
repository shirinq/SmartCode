import React, { useEffect, useState } from 'react';
import BaseDialog from '../../component/dialog/BaseDialog';
import { StyleSheet, Text, View } from 'react-native';
import { Button, CheckBox } from 'react-native-elements';
import { ButtonOutStyle, ButtonStyle, MainFont, MainFontBold, onNormalize, RowContainer } from '../../style/Styles';
import { BLACK, WHITE } from '../../style/Colors';
import { getKeyboardSetting, setKeyboardSetting } from '../../asyncStorage';


const Keyboard = ({ visible, setVisible }: { visible: boolean, setVisible: (arg: boolean) => void }) => {
  const [isSystem, setSystem] = useState<boolean>(false);
  const [isRandom, setRandom] = useState<boolean>(false);

  const onSave = () => {
    setKeyboardSetting({ isRandom, isSystem });
    setVisible(false);
  };

  useEffect(() => {
    getKeyboardSetting().then(value => {
      setRandom(value.isRandom);
      setSystem(value.isSystem);
    });
  }, []);

  return (
    <BaseDialog visible={visible} setVisible={setVisible}>
      <Text style={styles.title}>نوع کیبورد</Text>
      <View style={[RowContainer, { marginBottom: 30 }]}>
        <CheckBox titleProps={{ style: styles.text }} containerStyle={styles.check} checkedColor={BLACK} checked={isSystem} title="سیستم"
                  onPress={() => setSystem(true)} />
        <CheckBox titleProps={{ style: styles.text }} containerStyle={styles.check} checkedColor={BLACK} checked={!isSystem} title="Smart code"
                  onPress={() => setSystem(false)} />
      </View>
      <Text style={styles.title}>چیدمان کیبورد</Text>
      <View style={RowContainer}>
        <CheckBox titleProps={{ style: styles.text }} disabled={isSystem} containerStyle={[styles.check, { opacity: isSystem ? 0.5 : 1 }]} checkedColor={BLACK} checked={!isRandom}
                  title="پیش فرض"
                  onPress={() => setRandom(false)} />
        <CheckBox titleProps={{ style: styles.text }} disabled={isSystem} containerStyle={[styles.check, { opacity: isSystem ? 0.5 : 1 }]} checkedColor={BLACK} checked={isRandom}
                  title="تصادفی"
                  onPress={() => setRandom(true)} />
      </View>
      <View style={[RowContainer, { marginTop: 35 }]}>
        <Button title="لغو" type="outline" buttonStyle={[ButtonOutStyle, { height: onNormalize(40) }]} onPress={() => setVisible(false)}
                containerStyle={{ flex: 1 }}
                titleStyle={[styles.btnTitle, { color: BLACK }]} />
        <Button title="ذخیره" type="solid" buttonStyle={[ButtonStyle, { height: onNormalize(40) }]} onPress={onSave} containerStyle={{ flex: 1, marginStart: 15 }}
                titleStyle={styles.btnTitle} />
      </View>
    </BaseDialog>
  );
};

export default Keyboard;
const styles = StyleSheet.create({
  title: {
    fontFamily: MainFontBold,
    fontSize: onNormalize(16),
    color: BLACK,
    marginBottom: 5
  },
  text: {
    fontFamily: MainFont,
    fontSize: onNormalize(15),
    color: BLACK,
    paddingHorizontal: 10
  },
  btnTitle: {
    fontFamily: MainFont,
    fontSize: onNormalize(14)
  },
  check: {
    backgroundColor: WHITE,
    borderColor: WHITE,
    padding: 5
  }
});
