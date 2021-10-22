import React, { useState } from 'react';
import { MainFont, onNormalize } from '../../style/Styles';
import { Button, Icon } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import Language from '../../component/dialog/Language';
import { useTranslation } from 'react-i18next';
import { BLACK } from '../../style/Colors';

const Footer = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Button type="clear" titleStyle={styles.footerText} icon={<Icon name="language" type="ionicon" color='#6d6d6d' size={onNormalize(20)} />} onPress={() => setVisible(true)} />
      <Button type="clear" titleStyle={styles.footerText} title={t('terms')} />
      <Button type="clear" titleStyle={styles.footerText} title={t('privacy')} />
      <Button type="clear" titleStyle={styles.footerText} title={t('support')} />
      <Language visible={visible} setVisible={setVisible} />
    </View>
  );
};
export default Footer;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignSelf: 'center',
    width: '100%',
    bottom: onNormalize(30),
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  footerText: {
    fontFamily: MainFont,
    fontSize: onNormalize(12),
    color: '#6d6d6d'
  }
});
