import React, { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, MainFont, MainFontBold, onNormalize, RowContainer, Shadow3, Shadow5 } from '../../style/Styles';
import { Avatar, Divider } from 'react-native-elements';
import moment from 'jalali-moment';
import { BLACK, MEDIUM, WHITE } from '../../style/Colors';
import { DateTimeFormat } from '../../utils/Const';

const ServiceItem = ({ name, date, icon }: { name: string, date: string, icon: string | ReactNode }) => {
  return (
    <View>
      <View style={styles.container}>
        {typeof icon === 'string' ? <Avatar size="medium" source={{ uri: icon }} /> : icon}
        <View style={{ flex: 1, marginHorizontal: 20 }}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.sub}>{moment(date).locale('fa').format(DateTimeFormat)}</Text>
        </View>
      </View>
    </View>
  );
};
export default ServiceItem;

const styles = StyleSheet.create({
  container: {
    ...RowContainer,
    justifyContent: 'center',
    backgroundColor: WHITE,
    padding: 10,
    marginBottom: 4,
    borderRadius: 8,
    borderBottomWidth:0,
    borderBottomColor:'#f7fafd'
  },
  title: {
    fontFamily: MainFontBold,
    color: BLACK,
    fontSize: onNormalize(16),
    alignSelf: 'flex-start',
    marginBottom: 3
  },
  sub: {
    fontFamily: MainFont,
    color: MEDIUM,
    fontSize: onNormalize(12),
    alignSelf: 'flex-start'
  }
});
