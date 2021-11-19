import * as Urls from './APIs';
import { _URL } from './APIs';
import axios from 'axios';
import { UserModel } from '../model/RequestModel';

export function onAuthentication(pin: string, code: string, application: string, user: string) {
  return (axios.post(`${_URL}${Urls.AUTHENTICATION}/${code}/${application}/${user}`, null, {
    headers: pin
  }).then(response => response.data));
}

export function onSubscribe(registrationCode: string, userModel: UserModel) {
  return (axios.post(`${_URL}${Urls.CLIENTS_SUBSCRIBE}/${registrationCode}`, userModel).then(response => response.data));
}

export function onRegister(userModel: UserModel) {
  return (axios.post(`${_URL}${Urls.CLIENTS_REGISTER}`, userModel).then(response => response.data));
}

export function onConfirm(confirmationCode:string, Authorize:string, userModel:UserModel) {
  return (axios.put(`${_URL}${Urls.CLIENTS_CONFIRM}/${confirmationCode}`, userModel, {
    headers: Authorize
  }).then(response => response.data));
}
