import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
// import { Image } from 'react-native-elements';
import BackIcon from 'react-native-vector-icons/Ionicons'

export default function LogoutPage() {
    const navigation = useNavigation();
    return (
        
            <View style={{ flex : 1}}>
                <ImageBackground style={{ flex : 1}} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHVkSKZqKwVQOL4Vdy2Zb8Ijn1LHnAPJepvg&usqp=CAU' }}>
                    {/* <View>
                        <Text style={{ textAlign: 'center' }}>LogoutPage</Text>
                        <Image style={{ height: 200, width: 200 }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIRic5K3VKUfz12w0z__euNGq8hHGMmSOahQ&usqp=CAU' }} />
                    </View> */}
                    <BackIcon  name = "arrow-back" size={24}/>
                </ImageBackground>
            </View>


    )
}