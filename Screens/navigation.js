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
import HomeScreenThird from './HomeScreenThird';
import PasscodeScreen from './PasscodeScreen';
import OnBoardingScreen1 from './OnBoardingScreens/OnBoardingScreen1';
import OnBoardingScreen2 from './OnBoardingScreens/OnBoardingScreen2';
import OnboardingScreen3 from './OnBoardingScreens/OnboardingScreen3';
import OnboardingScreen4 from './OnBoardingScreens/OnboardingScreen4';
import OnboardingScreen5 from './OnBoardingScreens/OnboardingScreen5';

// import OnBoardingScreen from './OnBoardingScreen';
// import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();
const NavigationComponent = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ header: () => null }}>
                {/* <Stack.Screen name="OnBoarding" component={OnBoardingScreen} /> */}
                <Stack.Screen name="OnBoarding1" component={OnBoardingScreen1} />
                <Stack.Screen name="OnBoarding2" component={OnBoardingScreen2} />
                <Stack.Screen name="OnBoarding3" component={OnboardingScreen3} />
                <Stack.Screen name="OnBoarding4" component={OnboardingScreen4} />
                <Stack.Screen name="OnBoarding5" component={OnboardingScreen5} />
                <Stack.Screen name="Welcome" component={WelcomePage} />
                <Stack.Screen name="SignIn" component={SignInPage} />
                <Stack.Screen name="SignUp" component={SignUpPage} />
                <Stack.Screen name="Home" component={HomePage} />
                <Stack.Screen name="DoctorsList" component={DoctorsListPage} />
                <Stack.Screen name="WishList" component={WishListPage} />
                <Stack.Screen name="logOut" component={LogoutPage} />
                <Stack.Screen name="BookingApp" component={BookingAppPage} />
                <Stack.Screen name="HomeSecond" component={HomeScreenSecond} />
                <Stack.Screen name="HomeThird" component={HomeScreenThird} />
                <Stack.Screen name="Passcode" component={PasscodeScreen} />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default NavigationComponent;