import React, { PropsWithChildren } from 'react';
import { Overlay } from 'react-native-elements';
import { onNormalize } from '../../style/Styles';
import { StyleSheet } from 'react-native';


interface BaseProps extends PropsWithChildren<any> {
  visible: boolean,
  setVisible: (visible: boolean) => void
  enableBackdrop?: boolean,
  children?: React.ReactNode,
  height?: number | string,
  width?: number | string,
}

const BaseDialog = ({visible, setVisible, enableBackdrop, children, height, width}:BaseProps) => {

  const toggleOverlay = () => {
    if (enableBackdrop)
      setVisible(!visible);
  };

  return (
    <Overlay animated overlayStyle={[styles.overlay, {height, width}]} style={styles.container} isVisible={visible} onBackdropPress={toggleOverlay}>
      {children}
    </Overlay>
  );
};
export default BaseDialog;

const styles = StyleSheet.create({
  overlay: {
    borderRadius: 10,
    width: '80%',
    height: onNormalize(300),
    padding: 16
  },
  container: {
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 0
  },
});
