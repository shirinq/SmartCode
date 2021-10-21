import React from 'react';
import Component from './Component';
import { useTranslation } from 'react-i18next';

const ChangePass1 = () => {
  const { t } = useTranslation();

  return <Component passNum={1} onConfirm={() => {}} />;
};

export default ChangePass1;
