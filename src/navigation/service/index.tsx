import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, MainFont, onNormalize } from '../../style/Styles';
import BottomSheet from '../../component/BottomSheet';
import { Modalize } from 'react-native-modalize';
import { BLACK } from '../../style/Colors';
import BottomSheetItem from '../../component/BottonSheetItem';
import { Icon } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
import NoContent from '../../component/NoContent';

const Service = () => {
  const bottomSheetModalRef = useRef<Modalize>(null);
  const { t } = useTranslation();
  const onOpen = () => {
    bottomSheetModalRef.current?.open();
  };
  return (
    <View style={[Container, { padding: 5 }]}>
      <NoContent />
      <BottomSheet bottomSheetModalRef={bottomSheetModalRef}>
        <BottomSheetItem label={t('delete')} onPress={() => {}} icon={<Icon name="trash" type="feather" containerStyle={{ marginLeft: 15 }} size={onNormalize(20)} />} />
        <BottomSheetItem label={t('disabled')} onPress={() => {}} icon={<Icon name="power" type="feather" containerStyle={{ marginLeft: 15 }} size={onNormalize(20)} />} />
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
    paddingHorizontal: 16
  }
});
