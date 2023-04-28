import React, { useState, useEffect } from 'react';
import { Text, Dimensions, View, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomePage = () => {
    const navigation = useNavigation();

    useEffect(() => {
        getData();
    }, []);

    const [name, setName] = useState('');
    const getData = async () => {
        try {
            await AsyncStorage.getItem('UserName')
                .then(val => {
                    if (val != null) {
                        setName(val);
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }


    return (
        // total container
        <View style={styles.con}>
            {/* top section for bg color */}
            <View style={styles.topCon}>
                {/* top section contains admin icon texts, 3 icon on left and the filter card */}
                <View style={styles.topSection}>
                    {/* admin icon, and the texts */}
                    <View style={styles.topSection1}>
                        <TouchableOpacity onPress={() => navigation.navigate("logOut")}>
                        <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO1UUwmhrsitr2YBIznRi5LIgCs2Ey7w5FDQ&usqp=CAU" }} style={styles.adminImg} />
                        </TouchableOpacity>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 14, color: '#ff8533' }}>Welcome</Text>
                            <Text style={{ fontSize: 18, color: '#000080' }}>Hey, {name} !</Text>
                        </View>
                    </View>
                    {/* heart bell side navicon */}
                    <View style={styles.topSection2}>

                        {/* unredBadge */}
                        <TouchableOpacity onPress={() => navigation.navigate("WishList")}>
                            <View style = {styles.unreadBadge}>
                                <Text style = {styles.unreadBadgeText}>11</Text>
                            </View>
                            <Image style={styles.img} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtx92bUQQeCL28rwlxQ8mq2hETStgc-nnt5g&usqp=CAU' }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.img} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIRic5K3VKUfz12w0z__euNGq8hHGMmSOahQ&usqp=CAU' }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.img} source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAV1BMVEX///8AAABoaGjg4OCqqqrm5uatra0nJyfY2Nh6enpcXFycnJz19fW7u7uLi4uQkJBjY2NTU1PGxsY3Nze0tLRvb29KSkomJiYLCwsZGRkdHR1tbW3Z2dnma09bAAABWElEQVR4nO3dCW7CMBBAUbeUJRD2nfb+5yyNcoNqOmj63g2+LJIg2Z7WAAAAAAAAAAAAAOAXFtvuPU+3XQT39bu3bLs+NPCa3fd0jUzcZ9cN9nGBh+y20SGssMtOG3VhhcfstNExrHCenTaahxUus9NGy7DCVXbaaBVW2N+y2wa3wBfiOjtusI4LbO2UXfd0igxsbXpO7jtPYwOHyEmeP8gDAAAAAAAAAACoZTH7yDOLPlDS2uyevHPvPosNzN6Z+OMcGbjJrhts4gIn2W2jSVjhayxh5CJestNGl7DC+idK6q9h/d9h/Wdp22a3DQLfh//gm+b5XfpI7nsEf5e2+v8tAAAAAAAAAAAAiil+j/D0M3nnXvRd0OXv8y5/J3v9e/Xrz0aoP9+i/omS+nNm6s8Kqj/vqf7Mrta/wrNmHjtarvrsvJY///AruA8AAAAAAAAAAACA4r4Bj9MjQ5qVjE4AAAAASUVORK5CYII=' }} />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* filter card */}
                <View style={styles.sectionStyle}>
                    <Image style={styles.imageStyle} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb7Naun0Q2XNFbOwhKT_F4A0QM_9YQZWYEEA&usqp=CAU" }} />
                    <TextInput style={{ flex: 1, marginLeft: 10 }} placeholder="Find Your Suitable Doctor!" underlineColorAndroid="transparent" />
                    <TouchableOpacity>
                        <Image style={styles.imageStyle} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKiJO__5gP3mqM72SB-r7M4RUcBCIZMxSofg&usqp=CAU" }} />
                    </TouchableOpacity>
                </View>
            </View>
            {/* bottom whole section after filter card */}

            {/* left to right scroll cards by map  */}
            {/* straight horizontal cards */}
            <View style={styles.horizontalCards}>
                <TouchableOpacity onPress={() => navigation.navigate("DoctorsList")}>
                    <View style={styles.card}>
                        <Image style={styles.cardImage} source={{ uri: 'https://cdn.pixabay.com/photo/2016/03/31/20/12/doctor-1295581_960_720.png' }} />
                        <Text style={styles.cardText}>Doctor</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.card}>
                        <Image style={styles.cardImage} source={{ uri: 'https://media.istockphoto.com/id/1182012394/vector/calendar-schedule-and-clock-icon-time-appointment-reminder-date-concept-flat-organizer.jpg?b=1&s=170667a&w=0&k=20&c=H8kVyDNudyiBNCr1RPvdMKxlMgQ-tS3SEVsSXgvl8AU=' }} />
                        <Text style={styles.cardText}>Appointment</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.card}>
                        <Image style={styles.cardImage} source={{ uri: 'https://media.istockphoto.com/id/1338679502/vector/yellow-business-folder-3d-icon-volumetric-plastic-file-with-documentation.jpg?b=1&s=170667a&w=0&k=20&c=XTTuhJvBabUAwXFURVOPp2OPPRia6DIB4Gtxy4n7vC4=' }} />
                        <Text style={styles.cardText}>Prescription</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.card}>
                        <Image style={styles.cardImage} source={{ uri: 'https://media.istockphoto.com/id/1164354151/vector/pills-and-tablets.jpg?b=1&s=170667a&w=0&k=20&c=15NL0WZAXqZ674aiAB1AKnbzfLBioy8BcivReolppUo=' }} />
                        <Text style={styles.cardText}>Medicine</Text>
                    </View>
                </TouchableOpacity>
            </View>
            {/* topDoctor section */}
            <ScrollView>
                <View style={styles.topDoctorSection}>
                    <Text style={styles.headingTopDoctor}>Top Doctors</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <TouchableOpacity>
                            <View style={styles.cardTopDoctor}>
                                <View>
                                    <Image style={styles.imageDoctors} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN3ywOYM_VL4rqLIfKeDJz0vMbZDPOP_bejA&usqp=CAU' }} />
                                </View>
                                <View style={styles.textDoctor}>
                                    <Text style={styles.text1}>Dr. Taylor samaro</Text>
                                    <Text style={styles.text2}>Dental Sargun</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cardTopDoctor}>
                                <View>
                                    <Image style={styles.imageDoctors} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7uKys2DE6zUZjLkmJY-SY9eAcasXgW5XVOg&usqp=CAU' }} />
                                </View>
                                <View style={styles.textDoctor}>
                                    <Text style={styles.text1}>Dr. Iker Bureau</Text>
                                    <Text style={styles.text2}>Dental Sargun</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <TouchableOpacity>
                            <View style={styles.cardTopDoctor}>
                                <View>
                                    <Image style={styles.imageDoctors} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOl27bFHbM-byUFgECkB3TgnRGEHmQ_2CBcg&usqp=CAU' }} />
                                </View>
                                <View style={styles.textDoctor}>
                                    <Text style={styles.text1}>Dr. Ramdass</Text>
                                    <Text style={styles.text2}>Dental Sargun</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cardTopDoctor}>
                                <View>
                                    <Image style={styles.imageDoctors} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsjHXK4Wv3Zw0MjUgzirseL5vqMkvil60O3Q&usqp=CAU' }} />
                                </View>
                                <View style={styles.textDoctor}>
                                    <Text style={styles.text1}>Dr. Edwin Carli</Text>
                                    <Text style={styles.text2}>Dental Sargun</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    con: {
        backgroundColor: '#e6e6e6',
    },

    topCon: {
        backgroundColor: 'white',
        height: 150,
    },

    topSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        backgroundColor: 'white',
        padding: 8,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },

    topSection1: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    topSection2: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    adminImg: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },

    img: {
        height: 40,
        width: 40,
        borderRadius: 20,
        margin: 5,
    },

    imageStyle: {
        padding: 10,
        margin: 5,
        height: 30,
        width: 30,
        resizeMode: "stretch",
        alignItems: "center"
    },

    sectionStyle: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#e6e6e6",
        borderColor: "white",
        height: 40,
        borderRadius: 9,
        height: 50,
        width: 390,
        marginLeft: 11,
    },

    conContainer: {
        flex: 1
    },

    horizontalCards: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',


    },

    card: {
        height: 100,
        width: 80,
        backgroundColor: 'white',
        borderRadius: 10,
        marginHorizontal: 10,
        marginVertical: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },

    cardImage: {
        height: 40,
        width: 40,
        flexWrap: 'wrap'
    },

    cardText: {
        fontSize: 12,
        color: 'black',
        marginTop: 5,
        fontWeight: 600,
    },

    headingTopDoctor: {
        fontSize: 20,
        color: '#000',
        fontWeight: 700,
        marginLeft: 5,
    },

    cardTopDoctor: {
        height: 250,
        width: 200,
        borderRadius: 10,
        backgroundColor: 'white',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    },

    imageDoctors: {
        height: 200,
        width: 200,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    textDoctor: {
        textAlign: 'left',
        backgroundColor: '#ffb3ff',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 10,
    },

    text1: {
        fontSize: 20,
        fontWeight: 800,
        color: '#000',
        textAlign: 'center'
    },

    text2: {
        fontSize: 16,
        fontWeight: 400,
        color: '#000',
        textAlign: 'center'
    },

    unreadBadge : {
        backgroundColor : '#FF3250',
        position : 'absolute',
        left : 28,
        bottom : 27,
        height : 18,
        width : 25,
        borderRadius : 25,
        alignItems : 'center',
        justifyContent : 'center',
        zIndex :100,
    },

    unreadBadgeText : {
        color : 'white',
        fontWeight : 600,
    },
    

});

export default HomePage;