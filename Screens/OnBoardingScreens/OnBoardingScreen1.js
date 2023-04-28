import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function OnBoardingScreen1() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={styles.blueLeft}></View>
                <View style={styles.purpleRight}>
                    <View style={styles.img1}>
                        <Image style={{ height: 120, width: 220, borderRadius: 90 }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRM2ATqjyr5KSN9LVFV47SolQ2Js3sqrW1Jg&usqp=CAU' }} />
                        <View>
                            <Image style={styles.img2} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8D6pVbWiztemKOtCPTjYed1ob0MGnXolSfg&usqp=CAU' }} />
                            <View style={styles.blueRight}></View>
                        </View>
                        <Image style={styles.logo} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZxsxor18BsadJ7l-FvvPaW2Vwgs1S3mKK9A&usqp=CAU' }} />
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', top: 350 }}>
                <TouchableOpacity>
                    <View style={{ height: 10, width: 20, borderRadius: 20, backgroundColor: '#009933', margin: 5 }}></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('OnBoarding2')}>
                    <View style={{ height: 10, width: 10, borderRadius: 20, backgroundColor: '#80ffaa', margin: 5 }}></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('OnBoarding3')}>
                    <View style={{ height: 10, width: 10, borderRadius: 20, backgroundColor: '#80ffaa', margin: 5 }}></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('OnBoarding4')}>
                    <View style={{ height: 10, width: 10, borderRadius: 20, backgroundColor: '#80ffaa', margin: 5 }}></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('OnBoarding5')}>
                    <View style={{ height: 10, width: 10, borderRadius: 20, backgroundColor: '#80ffaa', margin: 5 }}></View>
                </TouchableOpacity>

            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', top: 400 }}>
                <Text style={{ fontSize: 22, color: 'black', fontWeight: 800 }}>Your Health - Your Way</Text>
                <Text style={{ fontSize: 15, color: '#595959', fontWeight: 500, margin: 30, textAlign: 'center', lineHeight : 23 }}>All in one, 24/7 access to medical care. Get access to the best medical professionals, get dedicated care advice and book your consultations online or in-person - anywhere, anytime.</Text>
                <TouchableOpacity onPress={() => navigation.navigate('OnBoarding2')} style={{ backgroundColor: '#00cc44', height: 35, width: 150, borderRadius: 5 }}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 800, letterSpacing: 1, textAlign: 'center', top: 7 }}>NEXT</Text>
                </TouchableOpacity>
            </View>
            {/* <Text>OnBoardingScreen1</Text> */}
            {/* <TouchableOpacity onPress={() => navigation.navigate('Welcome')} style = {styles.nextBtn}>
        <Text style = {styles.btnTxt}>NEXT</Text>
      </TouchableOpacity> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
    },
    nextBtn: {
        height: 40,
        width: 150,
        backgroundColor: '#009933',
        borderRadius: 7,
    },

    btnTxt: {
        color: 'white',
        fontSize: 16,
        fontWeight: 500,
        textAlign: 'center',
        top: 8,
    },

    blueLeft: {
        height: 150,
        width: 150,
        backgroundColor: '#00cccc',
        borderBottomRightRadius: 140,
        position: 'relative',
        zIndex: 1
    },

    purpleRight: {
        height: 450,
        width: '80%',
        backgroundColor: '#f5e6ff',
        position: 'absolute',
        borderBottomLeftRadius: 500,
        left: 100,
        //opacity : 0.5
    },

    img1: {
        top: 80,
        left: 105
    },

    img2: {
        height: 80,
        width: 80,
        borderRadius: 50,
        resizeMode: 'cover',
        right: 120,
        bottom: 10
    },

    blueRight: {
        height: 130,
        width: 130,
        backgroundColor: '#00cccc',
        borderRadius: 70,
        bottom: 120,
        left: 130,
    },

    logo: {
        height: 100,
        width: 100,
        borderRadius: 10,
        resizeMode: 'cover',
        bottom: 90,
        right: 50
    }

})