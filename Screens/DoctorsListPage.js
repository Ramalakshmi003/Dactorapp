import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Image } from 'react-native-elements';
import DoctorsList from '../src/consts/DoctorsData';
import { useNavigation } from '@react-navigation/native';
import { store } from '../redux/store';
import { ActionTypes } from '../redux/action/ActionTypes';
import { connect } from 'react-redux';

const DoctorsListPage = (props) => {
    const cartList = props.cartList;
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {/* topsection back arrow, nav icon. */}
            <View style={styles.topSection}>
                <TouchableOpacity onPress={() => { navigation.goBack(); }}>
                    <Image style={styles.backIcon} source={{ uri: 'https://cdn.pixabay.com/photo/2016/09/05/10/50/app-1646213_960_720.png' }} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.backIcon} source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAV1BMVEX///8AAABoaGjg4OCqqqrm5uatra0nJyfY2Nh6enpcXFycnJz19fW7u7uLi4uQkJBjY2NTU1PGxsY3Nze0tLRvb29KSkomJiYLCwsZGRkdHR1tbW3Z2dnma09bAAABWElEQVR4nO3dCW7CMBBAUbeUJRD2nfb+5yyNcoNqOmj63g2+LJIg2Z7WAAAAAAAAAAAAAOAXFtvuPU+3XQT39bu3bLs+NPCa3fd0jUzcZ9cN9nGBh+y20SGssMtOG3VhhcfstNExrHCenTaahxUus9NGy7DCVXbaaBVW2N+y2wa3wBfiOjtusI4LbO2UXfd0igxsbXpO7jtPYwOHyEmeP8gDAAAAAAAAAACoZTH7yDOLPlDS2uyevHPvPosNzN6Z+OMcGbjJrhts4gIn2W2jSVjhayxh5CJestNGl7DC+idK6q9h/d9h/Wdp22a3DQLfh//gm+b5XfpI7nsEf5e2+v8tAAAAAAAAAAAAiil+j/D0M3nnXvRd0OXv8y5/J3v9e/Xrz0aoP9+i/omS+nNm6s8Kqj/vqf7Mrta/wrNmHjtarvrsvJY///AruA8AAAAAAAAAAACA4r4Bj9MjQ5qVjE4AAAAASUVORK5CYII=' }} />
                </TouchableOpacity>
            </View>
            {/* filter section */}
            <View style={styles.sectionStyle}>
                <Image style={styles.backIcon} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb7Naun0Q2XNFbOwhKT_F4A0QM_9YQZWYEEA&usqp=CAU" }} />
                <TextInput style={{ flex: 1, marginLeft: 10 }} placeholder="Search" underlineColorAndroid="transparent" />
            </View>
            {/* the whole bottom section */}
            <View style={styles.bottomSection}>
                
                <View>
                    <Text style={styles.heading}>Specialist</Text>
                </View>
                <ScrollView>
                <View style='styles.bottomContent'>
                    {
                        DoctorsList.map((item, index) => {
                            const ind = cartList.findIndex(
                                (DoctorsList) => DoctorsList.id === item.id
                            );
                            return (
                                <View style={styles.box} key={index}>
                                    <View style={styles.cardCon}>
                                        <View>
                                            <Image style={styles.image} source={item.doctorImg} />
                                        </View>
                                        <View style={StyleSheet.midpart}>
                                            <Text style={styles.boxtext1}>{item.doctorName}</Text>
                                            <Text style={styles.boxtext2}>{item.role}</Text>
                                            <TouchableOpacity style = {{backgroundColor : 'orange', borderRadius : 10, padding : 5, top: 10}} onPress={() => navigation.navigate('BookingApp')}><Text style = {{fontSize : 16, fontWeight : 600, color : 'white'}}> Book Your Appoiment </Text></TouchableOpacity>
                                            {/* <Image style={styles.starRating} source={item.starRating} /> */}
                                        </View>
                                        <View>
                                            <TouchableOpacity onPress={() => {
                                                store.dispatch({
                                                    type: ActionTypes.myCartDetails,
                                                    payload: item
                                                })
                                            }}>
                                                {/* {ind < 0 ? "Add to cart" : "Remove to cart"} */}
                                                <Image style={styles.heartIcon} source={ind < 0 ? item.heartImage : item.redHeart} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                </View>
                            );
                        })
                    }
                </View>
                </ScrollView>
            </View>
        </View>
    );
}

const mapStateToProps = (state) => ({
    //bookingDetails: state.bookingUpdateReducer.bookingDetails,
    cartList: state.mycartReducer.cartList
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    topSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 15,
    },

    backIcon: {
        height: 30,
        width: 30,
        borderRadius: 30,
        borderColor: '#bfbfbf',
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
        marginBottom: 20,
    },

    bottomSection: {
        flex : 1,
        backgroundColor: "#e6e6e6",
    },

    midpart: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },

    heading: {
        fontSize: 22,
        fontWeight: 700,
        textAlign: 'left',
        padding: 10,
    },

    boxtext1: {
        fontSize: 20,
        fontWeight: 800,
    },

    boxtext2: {
        fontSize: 16,
        fontWeight: 500,
    },

    image: {
        height: 90,
        width: 90,
        borderRadius: 10,
        padding: 10,
        margin: 10,
    },

    cardCon: {
        backgroundColor: 'white',
        margin: 3,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderRadius: 10,
    },

    heartIcon: {
        height: 40,
        width: 40,
        borderRadius: 20,
        margin: 5,
    },

    starRating: {
        height: 40,
        width: 80,
    },

    bottomContent: {
        borderRadius: 10,
    },

});

export default connect(mapStateToProps)(DoctorsListPage);