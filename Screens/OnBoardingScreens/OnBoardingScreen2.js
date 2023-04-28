import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'

export default function OnBoardingScreen2() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.purple}>
        <View style={styles.blue}></View>
        <Image style={styles.logo} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZxsxor18BsadJ7l-FvvPaW2Vwgs1S3mKK9A&usqp=CAU' }} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', bottom: 200 }}>
        <TouchableOpacity onPress={() => navigation.navigate('OnBoarding1')}>
          <View style={{ height: 10, width: 10, borderRadius: 20, backgroundColor: '#009933', margin: 5 }}></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('OnBoarding2')}>
          <View style={{ height: 10, width: 20, borderRadius: 20, backgroundColor: '#009933', margin: 5 }}></View>
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
      <View style={{ justifyContent: 'center', alignItems: 'center', bottom: 170 }}>
        <Text style={{ fontSize: 22, color: 'black', fontWeight: 800, textAlign : 'center' }}>Your medical history in your pocket, Finally!</Text>
        <Text style={{ fontSize: 15, color: '#595959', fontWeight: 500, margin: 30, textAlign: 'center', lineHeight : 23 }}>Your Health Wallet will grant you intant, simple access to your full medical history. Your personal health records are safe and secure, fully encrypted and for your eyes only.</Text>
        <TouchableOpacity onPress={() => navigation.navigate('OnBoarding3')} style={{ backgroundColor: '#00cc44', height: 35, width: 150, borderRadius: 5 }}>
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 800, letterSpacing: 1, textAlign: 'center', top: 7 }}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },

  purple: {
    height: 700,
    width: 700,
    borderRadius: 900,
    backgroundColor: '#f5e6ff',
    right: 330,
    bottom: 300,
  },

  blue: {
    height: 140,
    width: 140,
    borderRadius: 90,
    backgroundColor: '#00cccc',
    left: 260,
    top: 430,
  },

  logo: {
    height: 100,
    width: 100,
    borderRadius: 10,
    resizeMode: 'cover',
    left: 490,
    top: 480,
    // bottom: 90,
    // right: 50
  }


})