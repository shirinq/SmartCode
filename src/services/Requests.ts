import * as Urls from './APIs';
import { _URL } from './APIs';
import axios from 'axios';
import { UserModel } from '../model/RequestModel';
import store from '../redux';

export function onAuthentication(pin: string, user: string) {
  return (axios.post(`${_URL}${Urls.AUTHENTICATION}${user}`, null, {
    headers: {
      pin,
      Authorize: store.getState().appSetting.token
    }
  }).then(response => response.data));
}

export function onSubscribe(registrationCode: string) {
  return (axios.post(`${_URL}${Urls.CLIENTS_SUBSCRIBE}${registrationCode}`, null, {
    headers: { Authorize: store.getState().appSetting.token }
  }).then(response => response.data));
}

export function onRegister(userModel: UserModel) {
  return (axios.post(`${_URL}${Urls.CLIENTS_REGISTER}`, userModel).then(response => response.data));
}

export function onConfirm(confirmationCode: string) {
  return (axios.post(`${_URL}${Urls.CLIENTS_CONFIRM}${confirmationCode}`, null, {
    headers: { Authorize: store.getState().appSetting.token }
  }).then(response => response.data));
}
