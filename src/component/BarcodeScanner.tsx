import React from 'react';
import { BLACK, SUCCESS } from '../style/Colors';
import { Button, Overlay } from 'react-native-elements';
import { BarCodeReadEvent } from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { useTranslation } from 'react-i18next';

interface Props {
  visible: boolean,
  setVisible: (arg: boolean) => void,
  setScan: (arg: string) => void
}

const BarcodeScanner = ({ visible, setVisible, setScan }: Props) => {
  const { t } = useTranslation();

  const onSuccess = (e: BarCodeReadEvent): void => {
    setVisible(false);
    setScan(e.data);
  };

  return (
    <Overlay isVisible={visible} overlayStyle={{ backgroundColor: 'transparent', margin: 16 }} onBackdropPress={() => setVisible(false)}>
      <QRCodeScanner onRead={e => onSuccess(e)} showMarker markerStyle={{ borderColor: SUCCESS }}
                     bottomContent={<Button buttonStyle={{ backgroundColor: SUCCESS }} onPress={() => setVisible(false)} containerStyle={{ width: '100%' }}
                                            titleStyle={{ color: BLACK }} title={t('close')} />} />
    </Overlay>
  );
};
export default BarcodeScanner;
