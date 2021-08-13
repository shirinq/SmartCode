import React from 'react';
import { FlatList } from 'react-native';
import ServiceItem from './Item';
import { Container } from '../../style/Styles';

const Service = () => {
  return (
    <FlatList data={[{
      name: 'دیجی پی',
      createDate: new Date().toString(),
      logo: 'https://sefid.app/library/cache/library/files/icons/digipay-logo_200_200_c1.png'
    }, {
      name: 'بانک ملی',
      createDate: new Date().toString(),
      logo: 'https://kasbokarnews.ir/wp-content/uploads/2020/09/20200921123116.jpg'
    }]} contentContainerStyle={[Container, {padding:5}]} renderItem={({ item }) => <ServiceItem name={item.name} date={item.createDate} icon={item.logo} />} />
  );
};
export default Service;
