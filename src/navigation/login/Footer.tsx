import React, { useState } from 'react';
import { MainFont, onNormalize } from '../../style/Styles';
import { Button } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import Language from '../../component/dialog/Language';

const Footer = () => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <Button type="clear" titleStyle={styles.footerText} title="Lang" onPress={() => setVisible(true)} />
      <Button type="clear" titleStyle={styles.footerText} title="Terms" />
      <Button type="clear" titleStyle={styles.footerText} title="Privacy" />
      <Button type="clear" titleStyle={styles.footerText} title="About us" />
      <Button type="clear" titleStyle={styles.footerText} title="Support" />
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
