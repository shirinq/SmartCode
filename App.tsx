import 'react-native-gesture-handler';
import React, { Suspense, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { ActivityIndicator, I18nManager } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import i18n from './i18n';
import store from './src/redux';


async function registerAppWithFCM() {
  await messaging().registerDeviceForRemoteMessages();
}

const App = () => {

  I18nManager.allowRTL(false);

  //get user fcm token
  useEffect(() => {
    messaging().getToken().then(token => {
      registerAppWithFCM();
      return token;
    });
    messaging().onMessage(message => {
      console.log(message);
    });
  }, []);

  return (
    <Suspense fallback={<ActivityIndicator />}>
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </Provider>
      </I18nextProvider>
    </Suspense>
  );
};
export default App;
