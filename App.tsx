import 'react-native-gesture-handler';
import React, {Suspense} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { ActivityIndicator } from 'react-native';
import i18n from './i18n';
import store from './src/redux';


const App = () => {
  return (
    <Suspense fallback={<ActivityIndicator/>}>
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <NavigationContainer>
            <Navigation/>
          </NavigationContainer>
        </Provider>
      </I18nextProvider>
    </Suspense>
  );
};
export default App;
