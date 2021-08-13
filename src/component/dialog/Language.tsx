import React from 'react';
import BaseDialog from './BaseDialog';
import { FlatList, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Divider, Icon } from 'react-native-elements';
import { Container, MainFont, onNormalize } from '../../style/Styles';
import { BLACK, MEDIUM } from '../../style/Colors';

const Language = ({ visible, setVisible }: { visible: boolean, setVisible: (arg: boolean) => void }) => {

  const cultureHandler = () => {
    setVisible(false);
    /*setLocale(locale.locale);
    setCurrent(locale.locale);
    i18n.changeLanguage(locale.locale).then(value => {
      setVisible(false);
      dispatch(AppInfoActions.setDirection(locale.direction));
    });*/
  };

  return (
    <BaseDialog visible={visible} setVisible={setVisible} width='90%' height='auto' enableBackdrop>
      <FlatList
        data={[{locale:'fa', id:1, name:'Persian', native:'فارسی'}, {locale:'en', id:2, name:'English', native:'English'}]}
        style={{ alignSelf: 'stretch' }}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <View style={{ flex: 1, paddingHorizontal: 5 }}>
              <TouchableOpacity style={styles.viewHolderContainer} onPress={() => cultureHandler()}>
                <View style={{ alignItems: 'flex-start' }}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.locale}>{item.native}</Text>
                </View>
                {item.locale === 'fa' && <Icon type="feather" size={onNormalize(20)} color={BLACK} name="check" />}
              </TouchableOpacity>
              <Divider />
            </View>
          );
        }}
      />
    </BaseDialog>
  );
};

export default Language;
const styles = StyleSheet.create({
  container: {
    ...Container
  },
  viewHolderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10
  },
  name: {
    fontFamily: MainFont,
    fontSize: onNormalize(16),
    color: BLACK,
    textAlign: 'center'
  },
  locale: {
    fontSize: onNormalize(14),
    color: MEDIUM,
    fontFamily: MainFont,
    textAlign: 'center'
  }
});
