import React, { useState } from 'react';
import Component from './Component';
import { Text } from 'react-native';

const ChangePass1 = () => {
  const [cap, setCap] = useState(123);

  return <Component passName={'اول'} onConfirm={() => {}}>
    <Text>{cap}</Text>
  </Component>;
};

export default ChangePass1;
