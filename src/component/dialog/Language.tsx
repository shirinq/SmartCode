import React, { useEffect, useState } from 'react';
import BaseDialog from './BaseDialog';
import { FlatList, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Divider, Icon } from 'react-native-elements';
import { Container, MainFont, onNormalize } from '../../style/Styles';
import { BLACK, MEDIUM } from '../../style/Colors';
import { getLocale, setLocale } from '../../asyncStorage';
import { useTranslation } from 'react-i18next';

const Language = ({ visible, setVisible }: { visible: boolean, setVisible: (arg: boolean) => void }) => {
  const [locale, setCLocale] = useState('');
  const { i18n } = useTranslation();

  useEffect(() => {
    getLocale().then(value => setCLocale(value));
  }, []);

  const cultureHandler = (locale: string) => {
    setVisible(false);
    setCLocale(locale);
    setLocale(locale);
    i18n.changeLanguage(locale).then(value => {
      setVisible(false);
    });
  };

  return (
    <BaseDialog visible={visible} setVisible={setVisible} width="90%" height="auto" enableBackdrop>
      <FlatList
        data={[{ locale: 'fa', id: 1, name: 'Persian', native: 'فارسی' }, { locale: 'en', id: 2, name: 'English', native: 'English' }]}
        style={{ alignSelf: 'stretch' }}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <Item name={item.name} native={item.native} checked={item.locale == locale} locale={item.locale} setCulture={cultureHandler} />}
      />
    </BaseDialog>
  );
};

export default Language;

const Item = ({ name, native, locale, checked, setCulture }: { name: string, native: string, locale: string, checked: boolean, setCulture: (arg: string) => void }) => {
  return (
    <View style={{ flex: 1, paddingHorizontal: 5 }}>
      <TouchableOpacity style={styles.viewHolderContainer} onPress={() => setCulture(locale)}>
        <View style={{ alignItems: 'flex-start' }}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.locale}>{native}</Text>
        </View>
        {checked && <Icon type="feather" size={onNormalize(20)} color={BLACK} name="check" />}
      </TouchableOpacity>
      <Divider />
    </View>
  );
};
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
