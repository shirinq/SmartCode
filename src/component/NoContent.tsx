import React from 'react';
import {Image} from 'react-native-elements';
import {StyleSheet, Text, View} from 'react-native';
import { MainFont, onNormalize } from '../style/Styles';
import {useTranslation} from 'react-i18next';

const NoContent = () => {
   const {t} = useTranslation();
   return (
      <View style={styles.empty}>
         <Image style={{width: onNormalize(150), height: onNormalize(150)}} source={require('../assets/images/ic_no_result.png')}/>
         <Text style={{fontFamily: MainFont}}>{t('noContent')}</Text>
      </View>
   );
};

export default NoContent;

const styles = StyleSheet.create({
   empty: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
   }
});
