import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'

export default function HomeScreenThird() {
    const navigation = useNavigation();
    const data = [
        {
            id: 1,
            img: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4vavLfyIar2LiTATjMt6li9OeAG-0HhjSeQ&usqp=CAU' },
            title1: 'Schedule an',
            title2: 'appoinment',
        },
        {
            id: 2,
            img: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyFMQsDW153s_ZOjhlYKL6Pa8kDleliVrTVg&usqp=CAU' },
            title1: 'Doctors',
            title2: 'available now',
        },
        {
            id: 3,
            img: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjcfdhtH4CjGn33Ka2P4MLCnVlcCkvDEml1ZOWF8VvvofqNe7q0n2FTr-qblhxIWJeZ2U&usqp=CAU' },
            title1: 'Schedule is a',
            title2: 'home visit',
        },
    ]
  return (
    <View style={styles.container}>
            {/* <Text>HomeScreenSecond</Text> */}
            <View style={styles.topSection}>
                <View style={styles.part1}>
                    <Image style={styles.userimg} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiuVclcrH4NxSU_ruCqga9bkK6rAKfNXqgew&usqp=CAU' }} />
                    <View style={styles.toptext}>
                        <Text style={{ fontSize: 20, fontWeight: 700, color: 'black' }}>Name Surname</Text>
                        <Text style={{ fontSize: 16, fontWeight: 500, color: 'black' }}>ID card number / passport</Text>
                    </View>
                    <View>
                        <View style={styles.unreadBadge}>
                        </View>
                        <Image style={styles.belImg} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIRic5K3VKUfz12w0z__euNGq8hHGMmSOahQ&usqp=CAU' }} />
                    </View>
                </View>
                <View style={styles.part2}>
                    <Text style={{ fontWeight: 700, left: 15, fontSize: 15 }}>Free account</Text>
                    <TouchableOpacity><Text style={{ color: '#b800e6', fontWeight: 600, right: 15 }}>UPGRADE</Text></TouchableOpacity>
                </View>
            </View>

            <View style={styles.midPart1}>
                <View style={styles.split}>
                    <Text style={{ fontWeight: 700, left: 15, fontSize: 18, color: 'black' }}>Complete your profile</Text>
                    <TouchableOpacity><Image style={{ height: 20, width: 20, right: 15 }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvWxGdUBC4gvyce-gELitcGYMWbw48mW2_dg&usqp=CAU' }} /></TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', top: 20, justifyContent: 'center' }}>
                    <View style={{ height: 5, width: 190, backgroundColor: '#330066' }}></View><View style={{ height: 5, width: 120, backgroundColor: 'grey' }}></View>
                </View>
                <Text style={{ top: 30, left: 15, color: '#330066', fontWeight: 700, fontSize: 13 }}>IN PROGRESS: Step 3 of 6</Text>
                <TouchableOpacity style={{ top: 40, height: 40, width: 300, backgroundColor: '#330066', borderRadius: 10, left: 25 }} onPress={() => navigation.navigate('HomeSecond')}>
                    <Text style={{ color: 'white', fontWeight: 700, textAlign: 'center', top: 10 }} >COMPLETE</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.midPart2}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ left: 25, fontSize: 18, color: 'black', fontWeight: 700, bottom: 4 }}>How can we help you ?</Text>
                    <TouchableOpacity><Text style={{ right: 25, color: '#330066', fontWeight: 500 }}>LEARN MORE</Text></TouchableOpacity>
                </View>
                <View style={styles.downCards}>
                    {
                        data.map((item, index) => {
                            return (
                                <View style={styles.mapping} key = {index}>
                                    <Image style={{ top: 5, height: 30, width: 30, borderRadius: 10 }} source={item.img} />
                                    <Text style={styles.title1}>{item.title1}</Text>
                                    <Text style={styles.title2}>{item.title2}</Text>
                                </View>
                            );
                        })
                    }
                </View>
                <View>
                    <Text style={{ left: 25, fontSize: 18, color: 'black', fontWeight: 700, top: 40 }}>DactorApp Education Centre</Text>
                    <View style={styles.purpleBg}>
                        <View style={styles.card}>
                            <Image style={{ height: 40, width: 40, borderRadius: 10, resizeMode: 'cover' }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf5ojH1w5O_bweinTVug5lZCcSwi1z5hw0NA&usqp=CAU' }} />
                            <View>
                                <Text style={{ fontWeight: 700, color: 'black' }}>Are Your Symptoms Seasonal</Text>
                                <Text style={{ fontWeight: 400, color: 'black' }}>Allergies or COVID-19?</Text>
                                <Text style={{ fontWeight: 400, color: 'black' }}>24 August 2005</Text>
                            </View>
                            <Image style={{ height: 20, width: 20 }} source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAM1BMVEX///+bm5uXl5fIyMiUlJT29vasrKyoqKikpKT5+fmRkZHs7Oza2tq+vr7h4eHv7++0tLRdhNGzAAAA+0lEQVR4nO2aUQ7CIBBEFwqlUK3e/7QaUX/8NjNJ3zvBBN5OabIRAAAAAAAAf6VfrssuTVC3kUtZlBFaTk+GMMNe0gvhORx5RkhZluH2PgXlOdw/x6Dzoa5Zfg616TPEps/QHe7CIYOXD7LZNPNB1tXdYDaj6X1gNicOPpjN5ql9oKsnDl1dDWaTrv7JwLcbH9y6mm+3OoOXD6OKIvT1ewzHeSPIL0Kvo34oDapJXtB4EAZPFv3DTf98xQOHHzq9B1atrPKAVjbwwKCV8cCglQ08oJVp5XCYRisPaGXdLejXaQyWigxWqwwWzAzW7ByWDQ1WLgEAAAAAACIegAsJz06sYKYAAAAASUVORK5CYII=' }} />
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: 'white', height: 75, width: '100%', borderWidth: 1, borderColor: '#cccccc', elevation: 5, borderTopLeftRadius: 25, borderTopRightRadius: 25, top: 30 }}>
                    <Image
                        style={styles.navImg}
                        source={{
                            uri:
                                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuxWv8GrBoBh_EtUAo4fcaUwHAJ_RY3soH7w&usqp=CAU"
                        }}
                    />
                    <Image
                        style={styles.navImg}
                        source={{
                            uri:
                                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnAPOXq4YLuEeqemwmp5xv_P-SKXxRSAJPTg&usqp=CAU"
                        }}
                    />
                    <Image
                        style={styles.navImg}
                        source={{
                            uri:
                                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMncGMIxWLgbRIdzgRtMwA41sMiOO_WAr0sg&usqp=CAU"
                        }}
                    />
                    <Image
                        style={styles.navImg}
                        source={{
                            uri:
                                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMFzREZ04vnTIrcoP6ardieUcycguPUnT23w&usqp=CAU"
                        }}
                    />
                    <Image
                        style={styles.navImg}
                        source={{
                            uri:
                                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGs9SQkQj4q81VHUC1KzRfmrIZOKIu5Z6enQ&usqp=CAU"
                        }}
                    />
                </View>
            </View>
        </View>
  )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    topSection: {
        backgroundColor: '#f2e6ff',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },

    part1: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 20
    },

    userimg: {
        height: 60,
        width: 60,
        borderRadius: 10
    },

    toptext: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },

    belImg: {
        height: 40,
        width: 40,
        borderRadius: 10
    },

    unreadBadge: {
        backgroundColor: '#FF3250',
        position: 'absolute',
        left: 23,
        bottom: 25,
        height: 15,
        width: 15,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
    },

    part2: {
        backgroundColor: '#c6ecd9',
        height: 40,
        width: 350,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        left: 33,
        marginTop: 20,
        marginBottom: 20
    },

    midPart1: {
        height: 150,
        width: 350,
        left: 33,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#bfbfbf',
        top: 20
    },

    split: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        top: 10

    },

    midPart2: {
        top: 50,
    },

    mapping: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        top: 15,
        borderWidth: 1,
        borderColor: '#e6e6e6',
        borderRadius: 10,
        // elevation : 10,
        // shadowRadius : 10,
        // shadowColor : '#e6e6e6',
        // shadowOffset : 10,
        //  shadowOpacity: 10,
        height: 110,
        width: 110,

    },

    downCards: {
        // height: 150,
        // width: 150,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',

    },

    title1: {
        color: '#5900b3',
        top: 8,
        fontSize: 15
    },

    title2: {
        color: '#5900b3',
        fontSize: 15
    },

    card: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        height: 80,
        width: 300,
        left: 25,
        top: 20
    },

    purpleBg: {
        backgroundColor: '#f2e6ff',
        top: 50,
        height: 200,
        width: 350,
        left: 30,
        borderRadius: 10
    },

    navImg: {
        height: 30,
        width: 30,
    },

})