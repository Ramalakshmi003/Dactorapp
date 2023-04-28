import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function OnboardingScreen5() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.violet}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <View style={styles.purple}></View>
          <View style={styles.blue1}></View>
          <View style={styles.blue2}></View>
        </View>
      </View>
      <Image style={styles.logo} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZxsxor18BsadJ7l-FvvPaW2Vwgs1S3mKK9A&usqp=CAU' }} />
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', bottom: 140 }}>
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
          <View style={{ height: 10, width: 10, borderRadius: 20, backgroundColor: '#009933', margin: 5 }}></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('OnBoarding5')}>
          <View style={{ height: 10, width: 20, borderRadius: 20, backgroundColor: '#009933', margin: 5 }}></View>
        </TouchableOpacity>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', bottom: 120 }}>
        <Text style={{ fontSize: 22, color: 'black', fontWeight: 800 }}>Welcome to DactorApp</Text>
        <Text style={{ fontSize: 15, color: '#595959', fontWeight: 500, top : 10, textAlign: 'center', lineHeight: 23 }}>Get started by creating an account.</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={{ backgroundColor: '#00cc44', height: 35, width: 150, borderRadius: 5, top : 50 }}>
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 800, letterSpacing: 1, textAlign: 'center', top: 7 }}>REGISTER</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{ fontSize: 14, color: '#595959', fontWeight: 500, top : 10, textAlign: 'center', lineHeight: 23 }}>Already have an account ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}><Text style={{ fontSize: 18, color: '#00cc44', fontWeight: 800, top : 10, textAlign: 'center', lineHeight: 23 }}>SIGN IN</Text></TouchableOpacity>
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
    bottom: 150,
    right: 40,
  },

  purple: {
    height: 150,
    width: 150,
    backgroundColor: '#d580ff',
    borderRadius: 140,
    top: 200,
    right: 110
    // left: 100
    //right: 50,
  },

  blue1: {
    height: 20,
    width: 20,
    borderRadius: 70,
    backgroundColor: '#00cccc',
    top: 180,
    right: 55,
  },

  blue2: {
    height: 75,
    width: 75,
    borderRadius: 70,
    backgroundColor: '#00cccc',
    top: 180,
    right: 85,
  },

  logo: {
    height: 100,
    width: 100,
    borderRadius: 10,
    resizeMode: 'cover',
    bottom: 200,
    left: 160
  },


})