import React, { useRef } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import ServiceItem from './Item';
import { Container, MainFont, onNormalize } from '../../style/Styles';
import BottomSheet from '../../component/BottomSheet';
import { Modalize } from 'react-native-modalize';
import { BLACK } from '../../style/Colors';
import BottomSheetItem from '../../component/BottonSheetItem';
import { Icon } from 'react-native-elements';

const Service = () => {
  const bottomSheetModalRef = useRef<Modalize>(null);
  const onOpen = () => {
    bottomSheetModalRef.current?.open();
  };
  return (
    <View style={[Container, { padding: 5 }]}>
      <FlatList data={[{
        name: 'دیجی پی',
        createDate: new Date().toString(),
        logo: 'https://sefid.app/library/cache/library/files/icons/digipay-logo_200_200_c1.png'
      }, {
        name: 'بانک ملی',
        createDate: new Date().toString(),
        logo: 'https://kasbokarnews.ir/wp-content/uploads/2020/09/20200921123116.jpg'
      }]} renderItem={({ item }) => <ServiceItem onOpen={onOpen} name={item.name} date={item.createDate} icon={item.logo} />} />
      <BottomSheet bottomSheetModalRef={bottomSheetModalRef}>
        <BottomSheetItem label='حذف' onPress={()=>{}} icon={<Icon name='trash' type='feather' containerStyle={{marginLeft:15}} size={onNormalize(20)}/>}/>
        <BottomSheetItem label='غیر فعال' onPress={()=>{}} icon={<Icon name='power' type='feather' containerStyle={{marginLeft:15}} size={onNormalize(20)}/>}/>
      </BottomSheet>
    </View>
  );
};
export default Service;
const styles = StyleSheet.create({
  text: {
    fontFamily: MainFont,
    color: BLACK,
    fontSize: onNormalize(16),
    paddingHorizontal:16
  }
});
