import React, { Component } from 'react'
import { View, Text, StyleSheet, CheckBox, Image, ScrollView, Dimensions } from 'react-native'

import {CustomText, CustomButton, CustomBlackText, CustomCheckBox} from '../../components'
import Icon from 'react-native-vector-icons/FontAwesome5'

import dhl from '../../../assets/dhl.png'

import theme from '../../../theme/Default/colorStyles'

class ShippingView extends Component {
    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.inView}>
                <View style={styles.mainContainer}>
                <View style={{paddingBottom:20}}>
                <CustomText>Which shipping partner do you like?</CustomText>
                </View>
                    
                <View style={styles.checkBoxing}>
                    <CustomCheckBox source={require('ShippingApp/assets/dhl.png')} originalWidth={1024} originalHeight={420} upText='DHL' downText='no additional cost'/>
                    <CustomCheckBox source={require('ShippingApp/assets/ups.png')} originalWidth={880} originalHeight={420} upText='UPS' downText='no additional cost'/>
                    <CustomCheckBox source={require('ShippingApp/assets/fedex.png')} originalWidth={1280} originalHeight={580} upText='FEDEX EXPRESS' downText='additional 12.99$'/>
                </View>
                <View style={{flex:.6}}>
                <View style={{flexDirection: "row", alignItems:'center', paddingVertical:15}}>
                <CustomText>Shipping Address</CustomText>
                <Icon style={{paddingHorizontal:10}} name='address-card' size={25} color={theme.TEXT_LIGHT}/>
                </View>
                

                <CustomText style={{color:theme.TEXT_DARK, paddingBottom:5}}>Jhonny Doe</CustomText>
                <CustomText style={{color:theme.TEXT_DARK, paddingBottom:5}}>11144 Military Trail (North)</CustomText>
                <CustomText style={{color:theme.TEXT_DARK, paddingBottom:5}}>Apartment #3122</CustomText>
                <CustomText style={{color:theme.TEXT_DARK, paddingBottom:5}}>23122 Paolo Alot</CustomText>
                <CustomText style={{color:theme.TEXT_DARK, paddingBottom:5}}>California, United States</CustomText>
                </View>
                </View>
                
                <View style={styles.buttonContainer}>
                    <CustomButton title='Next Step' onPress={() => this.props.navigation.navigate('Payment')} />
                </View>
                
            </View>

            
        
        </ScrollView>
        )
    }
}
export default ShippingView;

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
        borderBottomColor:theme.TEXT_LIGHT, 
        borderBottomWidth:1 
    }
});
