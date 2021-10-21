import React from 'react';
import Component from './Component';
import { useTranslation } from 'react-i18next';

const ChangePass2 = () => {
  const {t} = useTranslation()
  return <Component passNum={2} onConfirm={() => {}} />;
};

export default ChangePass2;
