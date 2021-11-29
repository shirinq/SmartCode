import * as Urls from './APIs';
import { _URL } from './APIs';
import axios from 'axios';
import { UserModel } from '../model/RequestModel';

export function onAuthentication(pin: string, token: string, user: string) {
  return (axios.post(`${_URL}${Urls.AUTHENTICATION}${user}`, null, {
    headers: {
      pin,
      Authorize: token
    }
  }).then(response => response.data));
}

export function onSubscribe(registrationCode: string, token: string) {
  return (axios.post(`${_URL}${Urls.CLIENTS_SUBSCRIBE}${registrationCode}`, null, {
    headers: { Authorize: token }
  }).then(response => response.data));
}

export function onRegister(userModel: UserModel) {
  return (axios.post(`${_URL}${Urls.CLIENTS_REGISTER}`, userModel).then(response => response.data));
}

export function onConfirm(confirmationCode: string, token: string) {
  return (axios.put(`${_URL}${Urls.CLIENTS_CONFIRM}${confirmationCode}`, null, {
    headers: { Authorize: token }
  }).then(response => response.data));
}
