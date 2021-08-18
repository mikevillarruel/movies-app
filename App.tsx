import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { StatusBar } from 'react-native';

const App = () => {
    return (
        <NavigationContainer>
            <StatusBar
                barStyle='light-content'
                backgroundColor='rgba(0,0,0, 0.2)'
                translucent={true}
            />
            <Navigation />
        </NavigationContainer>
    )
}

export default App;