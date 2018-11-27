import React, { Component } from 'react'
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native'

import {CustomText, CustomButton, CustomCheckBox} from '../../components'

import theme from '../../../theme/Default/colorStyles'

class PaymentView extends Component {
    render() {
        return (
            <ScrollView  contentContainerStyle={styles.container}>
            <View style={styles.inView}>
                <View style={styles.mainContainer}>
                <View style={{paddingBottom:20}}>
                <CustomText>How do you wish to pay?</CustomText>
                </View>

                <View style={styles.checkBoxing}>
                    <CustomCheckBox source={require('ShippingApp/assets/visa.png')} originalWidth={5000} originalHeight={1533}  upText='Credit Card' downText='Visa Mastercard JCB Amex'/>
                    <CustomCheckBox source={require('ShippingApp/assets/paypal.png')} originalWidth={640} originalHeight={169}  upText='PayPal' downText='paypalaccount@gmail.com'/>
                    <CustomCheckBox source={require('ShippingApp/assets/applepay.png')} originalWidth={1024} originalHeight={420}  upText='ApplePay' downText='applepay@gmail.com'/>
                </View>

                </View>
                
                <View style={styles.buttonContainer}>
                    <CustomButton title='Next Step' onPress={() => this.props.navigation.navigate('PayFin')}/>
                </View>
            </View>
            

            
        
        </ScrollView>
        )
    }
}
export default PaymentView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.APP_BG,
        width: '100%',
        minHeight: Dimensions.get('window').height - (Dimensions.get('window').height*.2)
    },
    inView: {
        paddingTop: 15,
        flex: 1,
        backgroundColor: theme.APP_BG,
        width: '100%',
        paddingHorizontal: 15
    },
    mainContainer: {
        flex: .87,
        width: '100%',
    },
    buttonContainer: {
        flex: .1,
        justifyContent:'flex-end',
        width: '100%',
    },
    checkBoxing:{ 
        flexDirection: 'column', 
        flex:.5, 
        justifyContent:'flex-start', 
    }
});
