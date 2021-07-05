import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { Props } from '../index';
import { CODE } from '../../utils/Const';
import { WHITE } from '../../style/Colors';
import { ButtonStyle, Container } from '../../style/Styles';
import { Button } from 'react-native-elements';

const Home = ({ navigation }: Props) => {

  return <View style={Container}>
    <StatusBar barStyle="dark-content" backgroundColor={WHITE} />
    <Button title={'Press me!'} onPress={() => navigation.navigate(CODE)} buttonStyle={ButtonStyle}/>
  </View>;
};
export default Home;
const styles = StyleSheet.create({});
