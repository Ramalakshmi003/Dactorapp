import { Modal, View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import ScrollContent from './component/ScrollContent';
//import DoctorsListPage from './DoctorsListPage';

// import Icons from 'react-native-vector-icons/AntDesign'

export default function BookingAppPage() {
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();
    return (
        <View>
            <View>
                <Modal animationType="slide"
                    transparent={true}
                    visible={modalVisible}>
                    <View style={{ backgroundColor: 'black', height: '100%', width: '100%', opacity: 0.7, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' }}>
                        {/* <Text>BookingModalScreen</Text> */}
                        <View style={styles.card}>
                            <View style={styles.bar}></View>
                            <Image style={styles.tick} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF1TDiqcTHeWPmgsvxN8xyY_JWDPSdPaSvuQ&usqp=CAU' }} />
                            <Text style={styles.txt}>Booking confirmed..!</Text>
                            <View>
                                <TouchableOpacity onPress={() => navigation.navigate('HomeSecond')} style={styles.bluebtn}>
                                    <Text style={styles.textbtn}>RETURN TO HOME</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </Modal>
            </View>

            <View style={{ backgroundColor: 'white' }}>
                <View style={{ marginHorizontal: 20 }}>
                    {/* <Text>bookingAppPage</Text> */}
                    {/* <View>
        <TouchableOpacity>
            <Icons name = "left" size = {20} />
            <Text>Back</Text>
        </TouchableOpacity>
      </View> */}
                    <View style={styles.topSection}>
                        <TouchableOpacity onPress={() => { navigation.goBack(); }}>
                            <Image style={styles.backIcon} source={{ uri: 'https://cdn.pixabay.com/photo/2016/09/05/10/50/app-1646213_960_720.png' }} />
                        </TouchableOpacity>
                        <Text style={{ fontWeight: 900, fontSize: 20, color: '#b800e6' }}>Book Your Appoiment</Text>
                        <TouchableOpacity>
                            <Image style={styles.backIcon} source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAV1BMVEX///8AAABoaGjg4OCqqqrm5uatra0nJyfY2Nh6enpcXFycnJz19fW7u7uLi4uQkJBjY2NTU1PGxsY3Nze0tLRvb29KSkomJiYLCwsZGRkdHR1tbW3Z2dnma09bAAABWElEQVR4nO3dCW7CMBBAUbeUJRD2nfb+5yyNcoNqOmj63g2+LJIg2Z7WAAAAAAAAAAAAAOAXFtvuPU+3XQT39bu3bLs+NPCa3fd0jUzcZ9cN9nGBh+y20SGssMtOG3VhhcfstNExrHCenTaahxUus9NGy7DCVXbaaBVW2N+y2wa3wBfiOjtusI4LbO2UXfd0igxsbXpO7jtPYwOHyEmeP8gDAAAAAAAAAACoZTH7yDOLPlDS2uyevHPvPosNzN6Z+OMcGbjJrhts4gIn2W2jSVjhayxh5CJestNGl7DC+idK6q9h/d9h/Wdp22a3DQLfh//gm+b5XfpI7nsEf5e2+v8tAAAAAAAAAAAAiil+j/D0M3nnXvRd0OXv8y5/J3v9e/Xrz0aoP9+i/omS+nNm6s8Kqj/vqf7Mrta/wrNmHjtarvrsvJY///AruA8AAAAAAAAAAACA4r4Bj9MjQ5qVjE4AAAAASUVORK5CYII=' }} />
                        </TouchableOpacity>
                    </View>
                    {/* <View style = {{width : '100%', height : '100%'}}> */}
                    <ScrollView>
                        <ScrollContent />
                    </ScrollView>
                    <View style={{ marginTop: 15 }}>
                        <TouchableOpacity style={styles.bluebtn1} onPress={() => setModalVisible(true)}>
                            <Text style={styles.textbtn1}>AUTHORISE PAYMENT</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text></Text>
                        <Text></Text>
                    </View>
                    {/* </ View> */}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    topSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginHorizontal: 20,
        marginVertical: 15,
    },

    backIcon: {
        height: 30,
        width: 30,
        borderRadius: 30,
        borderColor: '#bfbfbf',
    },

    containerTable: {
        borderBottomWidth: 3,
        borderColor: "#ccc",
        borderRadius: 5,
        overflow: "hidden",
    },

    row: {
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'flex-start',

    },

    row1: {
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        borderBottomWidth: 1,
        borderColor: "#ccc",
    },

    cell: {
        flex: 1,
        padding: 10,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        borderRightWidth: 1,
        borderRightColor: "#ccc",
        left: 30
        // width : 500,
    },

    header: {
        backgroundColor: "#f0f0f0",
        fontWeight: "bold"
    },

    textLeft: {
        justifyContent: 'flex-start',
        alignItems: "flex-start",
        color: 'black',
        fontWeight: 400,
    },

    textLeft1: {
        justifyContent: 'flex-start',
        alignItems: "flex-start",
        color: '#999999',
        fontWeight: 400,
    },

    textLeft2: {
        justifyContent: 'flex-start',
        alignItems: "flex-start",
        color: 'black',
        fontWeight: 700,
    },


    PaymentHead: {
        fontSize: 19,
        fontWeight: 900,
        color: 'black'
    },

    textblue: {
        color: '#00e6e6'
    },

    cardInput: {
        backgroundColor: '#e6e6e6',
        height: 45,
        width: 370,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    bluebtn1: {
        height: 50,
        width: 370,
        backgroundColor: '#b800e6',
        borderRadius: 10,
        top: 10,
    },

    textbtn1: {
        fontSize: 22,
        color: 'white',
        fontWeight: 900,
        textAlign: 'center',
        top: 8
    },

    card : {
        backgroundColor : 'white',
        height : 380,
        width : 380,
        borderRadius : 15,
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
        bottom : 10
    },

    bar: {
        height: 2,
        width: 80,
        color : 'black',
        borderRadius : 10
    },

    tick : {
        height : 90,
        width : 90,
        borderRadius : 45,
    },

    txt : {
        fontSize : 24,
        fontWeight : 800,
        top : 30
    },

    bluebtn : {
        height : 50,
        width : 350,
        backgroundColor : '#b800e6',
        borderRadius : 10,
        top : 70
    },

    textbtn : {
        fontSize : 22,
        color : 'white',
        fontWeight : 900,
        textAlign : 'center',
        top : 10,
    }

    // para : {
    //     fontSize : 15
    // },

})

