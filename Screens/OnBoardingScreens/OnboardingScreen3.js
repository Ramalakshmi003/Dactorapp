import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function OnboardingScreen3() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.voilet}>
        <View style={styles.purple1}>
          <View style={styles.blue1}></View>
        </View>
        <View style={styles.purple2}></View>
        <View style={styles.blue2}></View>
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
          <View style={{ height: 10, width: 20, borderRadius: 20, backgroundColor: '#009933', margin: 5 }}></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('OnBoarding4')}>
          <View style={{ height: 10, width: 10, borderRadius: 20, backgroundColor: '#80ffaa', margin: 5 }}></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('OnBoarding5')}>
          <View style={{ height: 10, width: 10, borderRadius: 20, backgroundColor: '#80ffaa', margin: 5 }}></View>
        </TouchableOpacity>

      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', bottom :70 }}>
        <Text style={{ fontSize: 22, color: 'black', fontWeight: 800 }}>Care for Yourself & Your Family</Text>
        <Text style={{ fontSize: 15, color: '#595959', fontWeight: 500, margin: 30, textAlign: 'center', lineHeight : 23 }}>Stay on the top of your family's healthcare by scheduling appointments, managing prescriptions and payments all from your own device.</Text>
        <TouchableOpacity onPress={() => navigation.navigate('OnBoarding4')} style={{ backgroundColor: '#00cc44', height: 35, width: 150, borderRadius: 5, top :20 }}>
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

  voilet: {
    backgroundColor: '#f5e6ff',
    height: 500,
    width: 500,
    borderRadius: 300,
    bottom: 200,
    left: 250
  },

  purple1: {
    height: 220,
    width: 220,
    backgroundColor: '#d580ff',
    borderRadius: 140,
    top: 260,
    right: 50,
  },

  purple2: {
    height: 60,
    width: 60,
    backgroundColor: '#d580ff',
    borderRadius: 400,
    top: 60,
    right: 220,
  },

  blue1: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: '#00cccc',
    bottom: 10,
    left: 155,
  },

  blue2: {
    height: 20,
    width: 20,
    borderRadius: 20,
    backgroundColor: '#00cccc',
    top: 130,
    right: 150,
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