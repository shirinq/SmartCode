import { combineReducers } from '@reduxjs/toolkit';
import appSetting from './AppSetting';

const combinedReducers = combineReducers({
  appSetting
});
export default combinedReducers;
