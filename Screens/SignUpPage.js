import React, { useState } from 'react';
import { Text, View, StyleSheet, Image,Alert, TouchableOpacity, TextInput, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUpPage = (onFocus = () => {}) => {
    const navigation = useNavigation();

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [name, setName] = useState('');

    const setData = async () => {
        if(name.length == 0){
            Alert.alert('Warning..! Enter the name');
        }else{
            try{
                await AsyncStorage.setItem('UserName', name);
                navigation.navigate("Passcode");
            } catch (error) {
                console.log(error)
            }
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
                    <Text style={styles.text1}>Getting started</Text>
                    <Text style={styles.text2}>Create an account to continue</Text>
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
                                placeholder="Enter Your Email Here"
                                underlineColorAndroid="transparent"
                            />
                        </View>
                    </View>
                    <View>
                        <Text style={{ fontWeight: 800, }}>Name</Text>
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
                                placeholder="Enter Your Name Here"
                                underlineColorAndroid="transparent"
                                onChangeText={(val) => setName(val)}
                            />
                        </View>
                    </View>
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
                                placeholder="Enter Your password Here"
                                underlineColorAndroid="transparent"
                            />
                            <Image
                                source={{
                                    uri:
                                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Ri4yMpf0BSfjD8Cmk7nZKYzVmVGu1ps_Ww&usqp=CAU"
                                }}
                                style={styles.imageStyle}
                            />
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
                    <View>
                        <TouchableOpacity onPress={setData}><Text style={styles.loginBtn}>Create Account</Text></TouchableOpacity>
                    </View>
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
        marginTop: 60,
    },

    text1: {
        fontSize: 28,
        color: 'black',
        fontWeight: 400,
    },

    text2: {
        marginTop: 5,
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
        marginBottom : 25,
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
        marginBottom : 25,
    },

    text5: {

    },

});

export default SignUpPage;