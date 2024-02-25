/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import store from './redux/store/store';

console.log("dev", __DEV__);

__DEV__ && import('./ReactotronConfig').then(() => console.log('Reactotron Configured')).catch((err) => console.log('Reactotron ==== Configured', err));

const RNRoot = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => RNRoot);
