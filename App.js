import React from 'react';
import { Provider } from 'react-redux';
import NavigationComponent from './Screens/navigation';
import { store } from './redux/store';

const App = () => {
    return (
        <Provider store = {store}>
            <NavigationComponent />
        </Provider>
    );
}

export default App;