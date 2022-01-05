import {showMessage} from 'react-native-flash-message';

export const onErrorMessage = (text: string) => {
  showMessage({
    message: text,
    type: 'danger',
    duration: 1500
  });
};

export const onSuccessMessage = (text: string) => {
  showMessage({
    message: text,
    type: 'success',
    duration: 1500
  });
};
