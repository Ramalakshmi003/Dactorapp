import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ScrollContent() {
    return (
        <View>
            <View style = {{marginTop : 10}}>
                <Text style={{ fontSize: 18, fontWeight: 500, padding : 5 }}>Transaction fee</Text>
                <Text style={{ fontSize: 18, fontWeight: 800, padding : 5 }}>Payment details</Text>
            </View>
            <View style={styles.containerTable}>
                <View style={styles.row}>
                    <View style={styles.cell}>
                        <Text style={styles.textLeft}>Consultation fee</Text>
                    </View>
                    <View style={styles.cell}>
                        <Text style={styles.textRight}>$50.00</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.cell}>
                        <Text style={styles.textLeft}>Platform fee</Text>
                    </View>
                    <View style={styles.cell}>
                        <Text style={styles.textRight}>$3.50</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.cell}>
                        <Text style={styles.textLeft}>Transaction fee</Text>
                    </View>
                    <View style={styles.cell}>
                        <Text style={styles.textRight}>$1.13</Text>
                    </View>
                </View>
                <View style={styles.row1}>
                    <View style={styles.cell}>
                        <Text style={styles.textLeft}>Voucher fee</Text>
                    </View>
                    <View style={styles.cell}>
                        <Text style={styles.textRight}>$0.00</Text>
                    </View>
                </View>
                <View style={styles.row1}>
                    <View style={styles.cell}>
                        <Text style={styles.textLeft1}>Subtotal</Text>
                    </View>
                    <View style={styles.cell}>
                        <Text style={styles.textRight1}>$54.63</Text>
                    </View>
                </View>
                <View style={styles.row1}>
                    <View style={styles.cell}>
                        <Text style={styles.textLeft1}>Total VAT on Platform fee</Text>
                    </View>
                    <View style={styles.cell}>
                        <Text style={styles.textRight1}>$0.36</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.cell}>
                        <Text style={styles.textLeft2}>Total</Text>
                    </View>
                    <View style={styles.cell}>
                        <Text style={styles.textRight2}>$54.99</Text>
                    </View>
                </View>
                {/* <View style={styles.cell}>
                                <Text>Transaction fee</Text>
                            </View>
                            <View style={styles.cell}>
                                <Text>Voucher fee</Text>
                            </View>
                            <View style={styles.cell1}>
                                <Text>Subtotal</Text>
                            </View>
                            <View style={styles.cell1}>
                                <Text>Total VAT on Platform fee</Text>
                            </View>
                            <View style={styles.cell2}>
                                <Text>Total</Text>
                            </View> */}
            </View>
            <View>
                <Text style={styles.PaymentHead}>Payment Methods</Text>
                <View style={styles.cardInput}>
                    <Text style={{ fontSize: 16, fontWeight: 500, left : 20 }}>**** **** **** 0000</Text>
                    <Image style={{ height: 20, width: 20, right : 20 }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWeSAKNqTYUl0rtTnUMJ0uJPDs50cRJlkW3w&usqp=CAU' }} />
                </View>
                <TouchableOpacity style = {{margin : 10}}>
                    <Text style={styles.textblue}>Add a new card</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.para}>We have integrated our platform with global leader Stripe, to use their advanced software in order to send payouts and accept payments while using DactorApp, Click <TouchableOpacity><Text style={styles.textblue}>here</Text></TouchableOpacity> to learn more about Stripe.</Text>
                <Text></Text>
                <Text style={styles.para}>Here add context to explain that the payment will be blocked and the card will only be charged at the end of the process <TouchableOpacity><Text style={styles.textblue}>  cancellation </Text></TouchableOpacity> </Text>
                {/* <Text></Text>
                <Text style={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                <Text></Text>
                <Text style={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text> */}
            </View>
        </View>
    )
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
        // overflow: "hidden",
        marginTop : 10
    },

    row: {
        flexDirection: "row",
        // justifyContent: 'flex-start',
        // alignItems: 'flex-start',

    },

    row1: {
        flexDirection: "row",
        // justifyContent: 'flex-start',
        // alignItems: 'flex-start',
        borderBottomWidth: 1,
        borderColor: "#ccc",
    },

    cell: {
        flex: 1,
        padding: 10,
        // alignItems: 'flex-start',
        // justifyContent: 'flex-start',
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
        // justifyContent: 'flex-start',
        // alignItems: "flex-start",
        color: 'black',
        fontWeight: 400,
    },

    textLeft1: {
        // justifyContent: 'flex-start',
        // alignItems: "flex-start",
        color: '#999999',
        fontWeight: 400,
    },

    textLeft2: {
        // justifyContent: 'flex-start',
        // alignItems: "flex-start",
        color: 'black',
        fontWeight: 700,
    },


    PaymentHead: {
        fontSize: 19,
        fontWeight: 900,
        color: 'black',
        marginTop : 25
    },

    textblue: {
        color: '#00e6e6',
        fontSize:15
    },

    cardInput: {
        backgroundColor: '#e6e6e6',
        height: 45,
        width: 370,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop : 15
    },

    // para : {
    //     fontSize : 15
    // },

})