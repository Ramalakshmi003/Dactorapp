import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native'

const SignInPage = () => {
    const navigation = useNavigation();
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [seePassword, setSeePassword] = useState(true);
    const [checkValidEmail, setCheckValidEmail] = useState(false);

    const handleCheckEmail = (text) => {
        let re = /\S+@\S+\.\S+/;
        let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;


        setEmail(text)
        if (re.test(text) || regex.test(text)) {
            setCheckValidEmail(false);
        } else {
            setCheckValidEmail(true);
        }
    };

    const checkPasswordValidity = value => {
        const isNonWhiteSpace = /^\S*$/;
        if (!isNonWhiteSpace.test(value)) {
            return 'Password must not contain Whitespaces.';
        }

        const isContainsUppercase = /^(?=.*[A-Z]).*$/;
        if (!isContainsUppercase.test(value)) {
            return 'Password must have at least one Uppercase Character.';
        }

        const isContainsLowercase = /^(?=.*[a-z]).*$/;
        if (!isContainsLowercase.test(value)) {
            return 'Password must have at least one Lowercase Character.';
        }

        const isContainsNumber = /^(?=.*[0-9]).*$/;
        if (!isContainsNumber.test(value)) {
            return 'Password must contain at least one Digit.';
        }

        const isValidLength = /^.{8,16}$/;
        if (!isValidLength.test(value)) {
            return 'Password must be 8-16 Characters Long.';
        }

        // const isContainsSymbol =
        //   /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
        // if (!isContainsSymbol.test(value)) {
        //   return 'Password must contain at least one Special Symbol.';
        // }

        return null;
    };
    
    const handleLogin = () => {
        const checkPassword = checkPasswordValidity(password)
        if (!checkPassword) {
            alert ("Success Login")
            navigation.navigate("Home")
        }else {
            alert(checkPassword)
        }
    }

    return (
        <View style={styles.con}>
            <View style={styles.container}>
                <View style={styles.iconRow}>
                    <TouchableOpacity>
                        <Image style={styles.img} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmPMqmhCs3WJiUvLOkJnw_Ol4RYS2kV3YTjQ&usqp=CAU' }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.img} source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAV1BMVEX///8AAABoaGjg4OCqqqrm5uatra0nJyfY2Nh6enpcXFycnJz19fW7u7uLi4uQkJBjY2NTU1PGxsY3Nze0tLRvb29KSkomJiYLCwsZGRkdHR1tbW3Z2dnma09bAAABWElEQVR4nO3dCW7CMBBAUbeUJRD2nfb+5yyNcoNqOmj63g2+LJIg2Z7WAAAAAAAAAAAAAOAXFtvuPU+3XQT39bu3bLs+NPCa3fd0jUzcZ9cN9nGBh+y20SGssMtOG3VhhcfstNExrHCenTaahxUus9NGy7DCVXbaaBVW2N+y2wa3wBfiOjtusI4LbO2UXfd0igxsbXpO7jtPYwOHyEmeP8gDAAAAAAAAAACoZTH7yDOLPlDS2uyevHPvPosNzN6Z+OMcGbjJrhts4gIn2W2jSVjhayxh5CJestNGl7DC+idK6q9h/d9h/Wdp22a3DQLfh//gm+b5XfpI7nsEf5e2+v8tAAAAAAAAAAAAiil+j/D0M3nnXvRd0OXv8y5/J3v9e/Xrz0aoP9+i/omS+nNm6s8Kqj/vqf7Mrta/wrNmHjtarvrsvJY///AruA8AAAAAAAAAAACA4r4Bj9MjQ5qVjE4AAAAASUVORK5CYII=' }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.heading}>
                    <Text style={styles.text1}>Let's Sign in</Text>
                    <Text style={styles.text2}>Welcome Back..You have missed this</Text>
                </View>
                <View style={styles.input}>
                    <View>
                        <Text style={{ fontWeight: 800, }}>Email</Text>
                        <View style={styles.sectionStyle}>
                            <Image
                                source={{
                                    uri:
                                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqCQ-8ydiq3DXnJmdqJIegB6cKCaxvk2eNog&usqp=CAU"
                                }}
                                style={styles.imageStyle}
                            />
                            <TextInput
                                style={{ flex: 1 }}
                                value={email}
                                onChangeText={(text) => handleCheckEmail(text)}
                                placeholder="Enter Your Email Here"
                                underlineColorAndroid="transparent"
                            />
                        </View>
                    </View>
                    {checkValidEmail ? <Text style={styles.textFailed}>Wrong Format</Text> : <Text></Text>}
                    <View>
                        <Text>password</Text>
                        <View style={styles.sectionStyle}>
                            <Image
                                source={{
                                    uri:
                                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRysyJtRReJWyVI4XzRwMb_ehaShcF9SyM65Q&usqp=CAU"
                                }}
                                style={styles.imageStyle}
                            />
                            <TextInput
                                style={{ flex: 1 }}
                                value={password}
                                secureTextEntry={seePassword}
                                onChangeText={(text) => setPassword(text)}
                                placeholder="Enter Your password Here"
                                underlineColorAndroid="transparent"
                            />
                            <TouchableOpacity onPress={() => setSeePassword(!seePassword)}>
                                {/* {borderColor : users.status == "active" ? 'green' : 'grey'} */}
                                <Image
                                    source={{ uri: seePassword ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCufBMl-ways0PSMHYuuB8BYcEIA5KInXZMw&usqp=CAU' : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Ri4yMpf0BSfjD8Cmk7nZKYzVmVGu1ps_Ww&usqp=CAU" }} style={styles.imageStyle} />
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
                <View style={styles.rememberMe}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginVertical: 10, }}>
                        <Switch
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                        <Text>Remember Me</Text>
                    </View>
                </View>
                <View style={styles.btn}>
                    {email == '' || password == '' || checkValidEmail == true ? 
                    <TouchableOpacity disabled onPress={handleLogin}><Text style={styles.loginBtndDisabled}>Login</Text></TouchableOpacity>
                     : <TouchableOpacity onPress={handleLogin}><Text style={styles.loginBtn}>Login</Text></TouchableOpacity>}
                    {/* <View>
                        <TouchableOpacity onPress={handleLogin}><Text style={styles.loginBtn}>Login</Text></TouchableOpacity>
                    </View> */}
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 25, }}>
                    <Text><TouchableOpacity><Text style={{ color: '#0066ff', fontSize: 15 }}>Forgot Password ?</Text></TouchableOpacity></Text>
                    <Text>Don't have an account  <TouchableOpacity><Text style={{ color: '#0066ff', fontSize: 15 }}>Sign up</Text></TouchableOpacity></Text>
                </View>
                <View style={styles.separator}>
                    <Text style={{ textAlign: 'center', fontSize: 16, marginTop: 160 }}>Or Continue With</Text>
                </View>
                <View style={styles.footerPart}>
                    <TouchableOpacity style={styles.footerPressable}>
                        <Image style={styles.logo} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD6fRfBpeJju4gL6HIqG4yGPaxkVk47TnQSNMFOAZSsjZpC4A5luoyDqnf26lH1gWg5T0&usqp=CAU' }} />
                        <Text style={styles.text5}>Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.footerPressable1}>
                        <Image style={styles.logo} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo6Bp_M8djensqvpm2GFQ-1nsXD1p9NCbBiw&usqp=CAU' }} />
                        <Text style={styles.text5}>Apple</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    con: {
        backgroundColor: '#e6e6e6',
    },

    container: {
        marginHorizontal: 25,
        marginVertical: 15,
    },

    iconRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    img: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },

    heading: {
        alignItems: 'flex-start',
        marginTop: 50,
    },

    text1: {
        fontSize: 28,
        color: 'black',
        fontWeight: 400,
    },

    text2: {
        marginTop: 5,
    },

    input: {
        marginTop: 25,
    },

    sectionStyle: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        borderWidth: 0.5,
        borderColor: "#a6a6a6",
        height: 40,
        borderRadius: 9,
        margin: 10,
        height: 50,
        width: 340,
    },

    imageStyle: {
        padding: 10,
        margin: 5,
        height: 30,
        width: 30,
        resizeMode: "stretch",
        alignItems: "center"
    },
    

    loginBtn: {
        borderWidth: 1,
        fontSize: 24,
        fontWeight: 400,
        backgroundColor: '#00ccff',
        borderColor: '#00ccff',
        borderRadius: 20,
        color: 'white',
        padding: 10,
        width: 300,
        textAlign: 'center',
        marginTop: 10,
        marginLeft: 25,
    },

    logo: {
        height: 40,
        width: 40,
        margin: 5,
    },

    footerPart: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },

    footerPressable: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#999999',
        backgroundColor: 'white',
        borderRadius: 10,
        height: 70,
        width: 160,
    },

    footerPressable1: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#999999',
        backgroundColor: 'white',
        borderRadius: 10,
        height: 70,
        width: 160,
    },

    textFailed: {
        alignSelf: 'flex-end',
        color: 'red',
    },

    loginBtndDisabled : {
        borderWidth: 1,
        fontSize: 24,
        fontWeight: 400,
        backgroundColor: 'grey',
        borderColor: 'grey',
        borderRadius: 20,
        color: 'white',
        padding: 10,
        width: 300,
        textAlign: 'center',
        marginTop: 10,
        marginLeft: 25,
    },

});

export default SignInPage;