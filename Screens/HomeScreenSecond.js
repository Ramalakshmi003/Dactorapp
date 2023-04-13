import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function HomeScreenSecond() {
    const data = [
        {
            id : 1,
            img : {uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4vavLfyIar2LiTATjMt6li9OeAG-0HhjSeQ&usqp=CAU'},
            title1 : 'Schedule an app',
            title2 : 'appoinment',
        },
        {
            id : 2,
            img : {uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyFMQsDW153s_ZOjhlYKL6Pa8kDleliVrTVg&usqp=CAU'},
            title1 : 'Doctors',
            title2 : 'available now',
        },
        {
            id : 1,
            img : {uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjcfdhtH4CjGn33Ka2P4MLCnVlcCkvDEml1ZOWF8VvvofqNe7q0n2FTr-qblhxIWJeZ2U&usqp=CAU'},
            title1 : 'Schedule is a',
            title2 : 'home visit',
        },
    ]
    return (
        <View style={styles.container}>
            {/* <Text>HomeScreenSecond</Text> */}
            <View style={styles.topSection}>
                <View style={styles.part1}>
                    <Image style={styles.userimg} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiuVclcrH4NxSU_ruCqga9bkK6rAKfNXqgew&usqp=CAU' }} />
                    <View style={styles.toptext}>
                        <Text style = {{fontSize : 20, fontWeight : 700, color : 'black'}}>Name Surname</Text>
                        <Text style = {{fontSize : 16, fontWeight : 500, color : 'black'}}>ID card number / passport</Text>
                    </View>
                    <View>
                        <View style={styles.unreadBadge}>
                        </View>
                        <Image style={styles.belImg} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIRic5K3VKUfz12w0z__euNGq8hHGMmSOahQ&usqp=CAU' }} />
                    </View>
                </View>
                <View style = {styles.part2}>
                    <Text style = {{fontWeight : 700, left : 15, fontSize : 15}}>Free account</Text>
                    <TouchableOpacity><Text style = {{color : '#b800e6', fontWeight : 600, right : 15}}>UPGRADE</Text></TouchableOpacity>
                </View>
            </View>

            <View style = {styles.midPart1}>
                <View style = {styles.split}>
                    <Text style = {{fontWeight : 700, left : 15, fontSize : 16, color : 'black'}}>Complete your profile</Text>
                    <TouchableOpacity><Image style = {{height : 20, width : 20, right : 15}} source = {{uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvWxGdUBC4gvyce-gELitcGYMWbw48mW2_dg&usqp=CAU'}} /></TouchableOpacity>
                </View>
                <View style = {{flexDirection : 'row',top : 20, justifyContent : 'center'}}>
                    <View style = {{height : 5, width : 190, backgroundColor : '#330066'}}></View><View style = {{height : 5, width : 120, backgroundColor : 'grey'}}></View>
                </View>
                <Text style = {{top : 30,left : 15,color : '#330066', fontWeight : 700, fontSize : 13}}>IN PROGRESS: Step 3 of 6</Text>
                <TouchableOpacity style = {{top : 40,height : 40, width : 300,backgroundColor : '#330066', borderRadius : 10, left : 25}}><Text style = {{color : 'white', fontWeight : 700, textAlign : 'center', top : 10}} >COMPLETE</Text></TouchableOpacity>
            </View>

            <View style = {styles.midPart2}>
                <View style = {{flexDirection : 'row', justifyContent : 'space-between'}}>
                    <Text style = {{left : 25, fontSize : 15, color : 'black',fontWeight : 600}}>How can we help you ?</Text>
                    <TouchableOpacity><Text style = {{right : 25, color : '#330066', fontWeight : 500 }}>LEARN MORE</Text></TouchableOpacity>
                    <View style = {styles.downCards}>
                        {
                            data.map((item, index) => {
                                return(
                                    <View style = {styles.mapping} key = {index}>
                                        <Image style = {{height : 30, width : 30, borderRadius :10}} source = {item.img} />
                                        <Text>{item.title1}</Text>
                                        <Text>{item.title2}</Text>
                                    </View>
                                );
                            })
                        }
                    </View>
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
        marginTop : 20
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

    part2 : {
        backgroundColor : '#c6ecd9',
        height : 40,
        width : 350,
        borderRadius : 10,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        left : 33,
        marginTop : 20,
        marginBottom : 20
    },

    midPart1 : {
        height : 150,
        width : 350,
        left : 33,
        borderWidth : 1,
        borderRadius :10,
        borderColor :'#bfbfbf',
        top : 20
    },

    split : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        top : 10

    },

    midPart2 : {
        top : 40,
    },

    mapping : {
        flexDirection : 'row',
        justifyContent:'space-around',
        alignItems : 'center',
    },

    downCards : {
        height : 150,
        width : 150,
        shadowColor : 'white',
        borderRadius : 15,
    }
})