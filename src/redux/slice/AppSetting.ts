import { createSlice } from '@reduxjs/toolkit';
import { _Direction, AppSettingModel } from '../../model/StoreModels';

export const appSettingInitialState: AppSettingModel = {
  token: null,
  language: '',
  direction: 'rtl',
  flexDirection: 'row-reverse',
  textAlignment: 'right',
  alignment: 'flex-end'
};

const AppSetting = createSlice({
  name: 'appSetting',
  initialState: appSettingInitialState,
  reducers: {
    setToken: (state, { payload }: { payload: string }) => {
      state.token = payload;
    },
    setDirection: (state, { payload }: { payload: _Direction }) => {
      state.direction = payload;
      state.alignment = payload == 'rtl' ? 'flex-end' : 'flex-start';
      state.textAlignment = payload == 'rtl' ? 'right' : 'left';
      state.flexDirection = payload == 'rtl' ? 'row-reverse' : 'row';
    },
    setLanguage: (state, { payload }: { payload: string }) => {
      state.language = payload;
    }
  }
});

export default AppSetting.reducer;
export const AppSettingActions = AppSetting.actions;
export const AppSettingName = AppSetting.name;
