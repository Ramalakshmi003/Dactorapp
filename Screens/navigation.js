import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomePage from './WelcomePage';
import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage'
import HomePage from './HomePage';
import DoctorsListPage from './DoctorsListPage';
import WishListPage from './WishListPage';
import LogoutPage from './LogoutPage';
import BookingAppPage from './BookingAppPage';
import HomeScreenSecond from './HomeScreenSecond';
// import OnBoardingScreen from './OnBoardingScreen';
// import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();
const NavigationComponent = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ header: () => null }}>
                {/* <Stack.Screen name="OnBoarding" component={OnBoardingScreen} /> */}
                <Stack.Screen name="Welcome" component={WelcomePage} />
                <Stack.Screen name="SignIn" component={SignInPage} />
                <Stack.Screen name="SignUp" component={SignUpPage} />
                <Stack.Screen name="Home" component={HomePage} />
                <Stack.Screen name="DoctorsList" component={DoctorsListPage} />
                <Stack.Screen name="WishList" component={WishListPage} />
                <Stack.Screen name="logOut" component={LogoutPage} />
                <Stack.Screen name="BookingApp" component={BookingAppPage} />
                <Stack.Screen name="HomeSecond" component={HomeScreenSecond} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default NavigationComponent;