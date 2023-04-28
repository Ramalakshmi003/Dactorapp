import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'
const WelcomePage = () => {
    const navigation = useNavigation();
    return(
        <View style = {styles.container}>
            <View style = {styles.TopSection}>
                <View style = {{height : 90, width : 90, borderRadius : 35, borderWidth : 6, borderColor : 'blue'}}>
                    <Text style = {styles.logo}>D</Text>
                </View>
                
                <View style = {styles.TopSection1}>
                    <Text style = {styles.text1}>Dactorapp</Text>
                    <Text style = {styles.text2}>Welcome to Dactorapp</Text>
                </View>
            </View>
            <View style = {styles.BottomSection}>
                <TouchableOpacity onPress={() =>navigation.navigate("SignUp")}>
                    <Text style = {styles.btn1}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>navigation.navigate("SignIn")}>
                    <Text style = {styles.btn2}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
} 

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#e6e6e6',
        flex : 1,
    },

    TopSection : {
        flex : 1,
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
    },

    TopSection1 : {
        alignItems : 'center',
        padding : 10,
        marginTop : 10,
    },

    BottomSection : {
        flexDirection : 'column',
        justifyContent : 'space-around',
        alignItems : 'center',
        padding : 10,
    },

    logo : {
        color : 'blue',
        // borderWidth : 5,
        // borderColor : 'blue',
        padding : 10,
        fontSize : 45,
        fontWeight : 800,
        // borderRadius : 100,
        // margin : 5,
        textAlign : 'center',
    },
    text1 : {
        color : 'blue',
        fontWeight : 500,
        fontSize : 28,
    },

    text2 : {
        color : '#b3b3b3',
        fontSize : 16,
    },

    btn1 : {
        borderWidth : 1,
        fontSize : 24,
        fontWeight : 400,
        backgroundColor : '#00ccff',
        borderColor : '#00ccff',
        borderRadius : 20,
        color : 'white',
        padding : 10,
        width : 300,
        textAlign : 'center',
    },

    btn2 : {
        borderWidth : 2,
        fontSize : 24,
        fontWeight : 400,
        backgroundColor : 'white',
        borderColor : '#00ccff',
        borderRadius : 20,
        color : '#00ccff',
        padding : 10,
        width : 300,
        textAlign : 'center',
        marginTop : 10,
    },

});

export default WelcomePage;