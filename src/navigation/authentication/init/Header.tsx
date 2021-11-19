import React, { PropsWithRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BLACK, WHITE } from '../../../style/Colors';
import { MainFont, MainFontBold, onNormalize, Shadow1 } from '../../../style/Styles';
import { Icon, LinearProgress } from 'react-native-elements';
import { useTranslation } from 'react-i18next';

interface Props extends PropsWithRef<any>{
  step:number,
  stepCount:number,
  title:string
}

const Header = ({step, stepCount, title}:Props) =>{
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text style={styles.subtitle}>{`${t('step')} ${step}/${stepCount}`}</Text>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.circle}>
          <Icon reverse name='key' type='feather' color={BLACK} size={onNormalize(18)} containerStyle={{margin:4}}/>
        </View>
      </View>
      <LinearProgress style={{alignSelf:'flex-end', borderRadius: 100}} trackColor={'#e2e7f8'} color={BLACK} variant='determinate' value={step/stepCount}/>
    </View>
  )
}
export default Header;

const styles = StyleSheet.create({
  container:{
    ...StyleSheet.absoluteFillObject,
    backgroundColor:WHITE,
    height:onNormalize(80),
    justifyContent:'space-between'
  },
  content:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-end',
  },
  circle:{
    borderRadius:100,
    borderWidth:1,
    marginHorizontal:16,
    borderColor:BLACK,
    alignItems:'center',
    justifyContent:'center',
    ...Shadow1
  },
  title:{
    fontSize:onNormalize(16),
    color:BLACK,
    fontFamily:MainFontBold,
  },
  subtitle:{
    fontSize:onNormalize(11),
    color:'#676b73',
    fontFamily:MainFont
  }
})
