import * as Urls from './APIs';
import { POSTProvider, PUTProvider } from './Provider';

export function postAuthentication() {
  return (POSTProvider(Urls.AUTHENTICATION, null, null)
    .then(response => response.data));
}

export function postSubscribe() {
  return (POSTProvider(Urls.CLIENTS_SUBSCRIBE, null, null)
    .then(response => response.data));
}

export function postRegister() {
  return (POSTProvider(Urls.CLIENTS_REGISTER, null, null)
    .then(response => response.data));
}

export function putConfirm() {
  return (PUTProvider(Urls.CLIENTS_CONFIRM, null, {})
    .then(response => response.data));
}

export function postUsers() {
  return (POSTProvider(Urls.USERS, null, null)
    .then(response => response.data));
}

export function postRequest() {
  return (POSTProvider(Urls.USERS_REQUEST, null, null)
    .then(response => response.data));
}
