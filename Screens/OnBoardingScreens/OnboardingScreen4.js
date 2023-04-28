import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'

export default function OnboardingScreen4() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.violet}>
        <View style={styles.purple}></View>
        <View style={styles.blue}></View>
      </View>
      <Image style={styles.logo} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZxsxor18BsadJ7l-FvvPaW2Vwgs1S3mKK9A&usqp=CAU' }} />
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', bottom : 100 }}>
        <TouchableOpacity onPress={() => navigation.navigate('OnBoarding1')}>
          <View style={{ height: 10, width: 10, borderRadius: 20, backgroundColor: '#009933', margin: 5 }}></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('OnBoarding2')}>
          <View style={{ height: 10, width: 10, borderRadius: 20, backgroundColor: '#009933', margin: 5 }}></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('OnBoarding3')}>
          <View style={{ height: 10, width: 10, borderRadius: 20, backgroundColor: '#009933', margin: 5 }}></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('OnBoarding4')}>
          <View style={{ height: 10, width: 20, borderRadius: 20, backgroundColor: '#009933', margin: 5 }}></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('OnBoarding5')}>
          <View style={{ height: 10, width: 10, borderRadius: 20, backgroundColor: '#80ffaa', margin: 5 }}></View>
        </TouchableOpacity>

      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', bottom :70 }}>
        <Text style={{ fontSize: 22, color: 'black', fontWeight: 800 }}>Your nurse in your pocket</Text>
        <Text style={{ fontSize: 15, color: '#595959', fontWeight: 500, margin: 30, textAlign: 'center', lineHeight : 23 }}>DactorApp will never leave your side, from alerting you to take your medicine, to sending out remainders to never miss any booked appointments, you can always count on your personal health buddy.</Text>
        <TouchableOpacity onPress={() => navigation.navigate('OnBoarding5')} style={{ backgroundColor: '#00cc44', height: 35, width: 150, borderRadius: 5, }}>
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

  violet: {
    backgroundColor: '#f5e6ff',
    height: 500,
    width: 500,
    borderRadius: 300,
    bottom: 200,
    left: 250
  },

  purple: {
    height: 100,
    width: 100,
    backgroundColor: '#d580ff',
    borderRadius: 140,
    top: 250,
    left: 100
    //right: 50,
  },

  blue: {
    height: 140,
    width: 140,
    borderRadius: 70,
    backgroundColor: '#00cccc',
    top: 230,
    right: 330,
  },

  logo: {
    height: 100,
    width: 100,
    borderRadius: 10,
    resizeMode: 'cover',
    bottom: 170,
    left: 160
  },



})