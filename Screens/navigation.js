import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomePage from './WelcomePage';
import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage'
import HomePage from './HomePage';
import DoctorsListPage from './DoctorsListPage';
import WishListPage from './WishListPage';


const Stack = createNativeStackNavigator();
const NavigationComponent = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ header: () => null }}>
                <Stack.Screen name="Welcome" component={WelcomePage} />
                <Stack.Screen name="SignIn" component={SignInPage} />
                <Stack.Screen name="SignUp" component={SignUpPage} />
                <Stack.Screen name="Home" component={HomePage} />
                <Stack.Screen name="DoctorsList" component={DoctorsListPage} />
                <Stack.Screen name="WishList" component={WishListPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default NavigationComponent;