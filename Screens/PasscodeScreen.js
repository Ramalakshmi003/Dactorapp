import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function PasscodeScreen() {
    const navigation = useNavigation();

    const defaultPin = '1234'; // default value for the pin
    const [pin, setPin] = useState(''); // current user-entered pin
    const [dot, setDot] = useState(0);

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

    // add a number to the current user-entered pin
    const addToPin = (number) => {
        if (pin.length < 4) {
            setPin(pin + number);
            // setDot((pin) => {
            //     console.log(pin.length)
            // })
            //   console.log(pin);
        }

        setDot((dot) => {
            switch (pin.length) {
                case 1 : 
                    dot = 1;
                case 2 :
                    dot = 2;
                case 3 : 
                    dot = 3;
                case 4 : 
                    dot = 4;
            }
            return dot
            // if(pin.length == 1){
            //     i++;
            //     dot = i;
            //     return dot
            // }
        })
        // if(pin.length == 1) {
        //     setDot((dot) => dot = true)
        // }
        // console.log(pin)
        //console.log(dot)
    };
    console.log(pin)

    // clear the current user-entered pin
    const clearPin = () => {
        setPin('');
    };

    // check if the current user-entered pin matches the default pin
    const checkPin = () => {
        if (pin === defaultPin) {
            Alert.alert('Success', 'Your pin matches!');
            navigation.navigate('Home');
        } else {
            Alert.alert('Incorrect', 'Your pin does not match!');
        }
        clearPin();
    };

    return (
        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', height: '100%', width: '100%' }}>
            <View style={styles.header} >
                <Image style={{ height: 60, width: 60, borderRadius: 15 }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZxsxor18BsadJ7l-FvvPaW2Vwgs1S3mKK9A&usqp=CAU' }} />
                <Text style={{ fontSize: 28, color: '#009933', fontWeight: 900 }}>Dactor<Text style={{ color: '#999999' }}>App</Text></Text>
            </View>
            <View>
                <Text style={{ fontSize: 22, fontWeight: 700, color: 'black' }}>Welcome back, {name} </Text>
            </View>
            <View style={{ top: 40, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <View style={(dot == 1) ? styles.dotAfter : styles.dotBefore}></View>
                <View style={(dot == 2) ? styles.dotAfter : styles.dotBefore}></View>
                <View style={(dot == 3) ? styles.dotAfter : styles.dotBefore}></View>
                <View style={(dot == 4) ? styles.dotAfter : styles.dotBefore}></View>
            </View>
            <View style={styles.numberCon}>
                {/* row 1 */}
                <View style={styles.row}>
                    <TouchableOpacity style={styles.itemCon} onPress={() => addToPin('1')}>
                        <Text style={styles.numText}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemCon} onPress={() => addToPin('2')}>
                        <Text style={styles.numText}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemCon} onPress={() => addToPin('3')}>
                        <Text style={styles.numText}>3</Text>
                    </TouchableOpacity>
                </View>

                {/* row 2 */}
                <View style={styles.row}>
                    <TouchableOpacity style={styles.itemCon} onPress={() => addToPin('4')}>
                        <Text style={styles.numText}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemCon} onPress={() => addToPin('5')}>
                        <Text style={styles.numText}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemCon} onPress={() => addToPin('6')}>
                        <Text style={styles.numText}>6</Text>
                    </TouchableOpacity>
                </View>

                {/* row 3 */}
                <View style={styles.row}>
                    <TouchableOpacity style={styles.itemCon} onPress={() => addToPin('7')}>
                        <Text style={styles.numText}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemCon} onPress={() => addToPin('8')}>
                        <Text style={styles.numText}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemCon} onPress={() => addToPin('9')}>
                        <Text style={styles.numText}>9</Text>
                    </TouchableOpacity>
                </View>

                {/* row 4 */}
                <View style={styles.row}>
                    <TouchableOpacity style={{ margin: 10 }} onPress={clearPin}>
                        <Text style={{ fontWeight: 700, fontSize: 18, top: 5, right: 10, color: 'green' }}>Clear</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemCon} onPress={() => addToPin('0')}>
                        <Text style={styles.numText}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ margin: 10 }} onPress={checkPin}>
                        <Text style={{ fontWeight: 700, fontSize: 18, top: 5, left: 10, color: 'green' }}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <TouchableOpacity>
                    <Text style={{ color: '#00cc44', fontSize: 15, fontWeight: 500, top: 100, textDecorationLine: 'underline', letterSpacing: 1 }}>FORGOT YOUR PASSCODE ?</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    itemCon: {
        height: 70,
        width: 70,
        borderColor: 'grey',
        borderRadius: 40,
        backgroundColor: 'white',
        margin: 10,
        elevation: 10

    },

    numText: {
        color: 'black',
        fontSize: 26,
        left: 28,
        top: 17
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 20,
    },

    dotAfter: {
        height: 10,
        width: 10,
        borderRadius: 20,
        backgroundColor: '#009933',
        marginHorizontal: 10,
        elevation: 3
    },

    dotBefore: {
        height: 10,
        width: 10,
        borderRadius: 20,
        backgroundColor: '#80ffaa',
        marginHorizontal: 10,
        elevation: 3
    },

    numberCon: {
        top: 70
    }
})




//     const arr = [
//         {
//             id : 1,
//             number : 1,
//         },
//         {
//             id : 2,
//             number : 2,
//         },
//         {
//             id : 3,
//             number : 3,
//         },
//         {
//             id : 4,
//             number : 4,
//         },
//         {
//             id : 5,
//             number : 5,
//         },
//         {
//             id : 6,
//             number : 6,
//         },
//         {
//             id : 7,
//             number : 7,
//         },
//         {
//             id : 8,
//             number : 8,
//         },
//         {
//             id : 9,
//             number : 9,
//         },
//         {
//             id : 0,
//             number : 0,
//         },

//     ]

//     const newArr = [1]
//   return (
//     <View style = {{flexDirection : 'column', alignItems :'center'}}>
//       {/* <Text>PasscodeScreen</Text> */}
//         <Image style = {{height : 60, width:60}} source = {{uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZxsxor18BsadJ7l-FvvPaW2Vwgs1S3mKK9A&usqp=CAU'}} />
//         <Text>Welcome back, Name</Text>
//         <View style = {styles.dotBeforeContainer}>
//             <View style = {styles.dotBefore}></View>
//             <View style = {styles.dotBefore}></View>
//             <View style = {styles.dotBefore}></View>
//             <View style = {styles.dotBefore}></View>
//         </View>
//         {
//             arr.map(item => {
//                 <View style = {{flexDirection : 'column', justifyContent : 'center', alignItems : 'center'}} key = {item.id}>
//                     <TouchableOpacity><Text>{item.number}</Text></TouchableOpacity>
//                 </View>
//             })
//         }
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//     dotBeforeContainer : {
//         flexDirection : 'row',
//         justifyContent : 'space-around',
//         alignItems : 'center'
//     },

//     dotBefore : {
//         height :10,
//         width : 10,
//         borderRadius : 20,
//         backgroundColor : '#ccb3ff',
//     },
// })