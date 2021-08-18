import React, { PropsWithChildren, ReactNode, useRef, useState } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { MainFont, onNormalize } from '../style/Styles';
import { MEDIUM } from '../style/Colors';
import { useTranslation } from 'react-i18next';

interface Props extends PropsWithChildren<any> {
  bottomSheetModalRef: React.RefObject<Modalize>,
  header?: ReactNode,
  headerAction?: () => void
}

const BottomSheet = (prop: Props) => {
  const { t } = useTranslation();
  const {
    bottomSheetModalRef, children, header = <Text style={styles.cancel}>{t('cancel')}</Text>, headerAction = () => bottomSheetModalRef.current?.close()
  } = prop;
  const [handle, setHandle] = useState(false);
  const animated = useRef(new Animated.Value(0)).current;

  const handlePosition = (position: string) => {
    setHandle(position === 'top');
  };

  return (
    <Modalize
      ref={bottomSheetModalRef}
      panGestureAnimatedValue={animated}
      withHandle={handle}
      adjustToContentHeight
      threshold={150}
      handlePosition="inside"
      onPositionChange={handlePosition}>
      <TouchableOpacity onPress={headerAction} style={styles.header}>
        {header}
      </TouchableOpacity>
      <View style={styles.contentContainer}>
        {children}
      </View>
    </Modalize>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    marginBottom: 50
  },
  cancelContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    alignSelf: 'flex-start',
    marginTop: 16,
    marginBottom: 15,
    marginHorizontal: 16
  },
  cancel: {
    fontFamily: MainFont,
    fontSize: onNormalize(12),
    color: MEDIUM
  }

});
