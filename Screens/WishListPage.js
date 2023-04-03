import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { ActionTypes } from '../redux/action/ActionTypes';



const WishListPage = (props) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <TouchableOpacity onPress={() => { navigation.goBack(); }}>
                    <Image style={styles.backIcon} source={{ uri: 'https://cdn.pixabay.com/photo/2016/09/05/10/50/app-1646213_960_720.png' }} />
                </TouchableOpacity>
                <Text>Favorite Doctor</Text>
                <TouchableOpacity>
                    <Image style={styles.backIcon} source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAV1BMVEX///8AAABoaGjg4OCqqqrm5uatra0nJyfY2Nh6enpcXFycnJz19fW7u7uLi4uQkJBjY2NTU1PGxsY3Nze0tLRvb29KSkomJiYLCwsZGRkdHR1tbW3Z2dnma09bAAABWElEQVR4nO3dCW7CMBBAUbeUJRD2nfb+5yyNcoNqOmj63g2+LJIg2Z7WAAAAAAAAAAAAAOAXFtvuPU+3XQT39bu3bLs+NPCa3fd0jUzcZ9cN9nGBh+y20SGssMtOG3VhhcfstNExrHCenTaahxUus9NGy7DCVXbaaBVW2N+y2wa3wBfiOjtusI4LbO2UXfd0igxsbXpO7jtPYwOHyEmeP8gDAAAAAAAAAACoZTH7yDOLPlDS2uyevHPvPosNzN6Z+OMcGbjJrhts4gIn2W2jSVjhayxh5CJestNGl7DC+idK6q9h/d9h/Wdp22a3DQLfh//gm+b5XfpI7nsEf5e2+v8tAAAAAAAAAAAAiil+j/D0M3nnXvRd0OXv8y5/J3v9e/Xrz0aoP9+i/omS+nNm6s8Kqj/vqf7Mrta/wrNmHjtarvrsvJY///AruA8AAAAAAAAAAACA4r4Bj9MjQ5qVjE4AAAAASUVORK5CYII=' }} />
                </TouchableOpacity>
            </View>

            <View>
                {props.cartList.map((item, index) => {
                    return (
                        <View style={styles.box} key={index}>
                                    <View style={styles.cardCon}>
                                        <View>
                                            <Image style={styles.image} source={item.doctorImg} />
                                        </View>
                                        <View style={StyleSheet.midpart}>
                                            <Text style={styles.boxtext1}>{item.doctorName}</Text>
                                            <Text style={styles.boxtext2}>{item.role}</Text>
                                            <Image style={styles.starRating} source={item.starRating} />
                                        </View>
                                        <View>
                                            <TouchableOpacity>
                                                <Image style={styles.heartIcon} source={item.heartImage} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                </View>
                    );
                })}
            </View>
        </View>
    );
}

const mapStateToProps = (state) => ({
    cartList : state.mycartReducer.cartList
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

    cardCon: {
        backgroundColor: 'white',
        margin: 3,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderRadius: 10,
    },

    image: {
        height: 90,
        width: 90,
        borderRadius: 10,
        padding: 10,
        margin: 10,
    },

    midpart: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },

    boxtext1: {
        fontSize: 20,
        fontWeight: 800,
    },

    boxtext2: {
        fontSize: 16,
        fontWeight: 500,
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

});



export default connect(mapStateToProps)(WishListPage);