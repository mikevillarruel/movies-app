import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { StatusBar } from 'react-native';
import { FadeScreen } from './src/screens/FadeScreen';
import { GradientProvider } from './src/context/GradientContext';

const AppState = ({ children }: any) => {

    return (
        <GradientProvider>
            {children}
        </GradientProvider>
    )

}

const App = () => {
    return (
        <NavigationContainer>
            <AppState>
                <StatusBar
                    barStyle='light-content'
                    backgroundColor='rgba(0,0,0, 0.2)'
                    translucent={true}
                />
                <Navigation />
                {/* <FadeScreen /> */}
            </AppState>
        </NavigationContainer>
    )
}

export default App;