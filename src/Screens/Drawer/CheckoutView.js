import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

import ShippingTab from '../ShippingTab'
import {MainHeader} from '../../components'

class CheckoutView extends Component {
    render() {
        return (
            <View style={{flex:1, width:'100%'}}>

                <MainHeader headText='Checkout'/>
                <ShippingTab />
            </View>
        
        )
    }
}
export default CheckoutView;

const styles = StyleSheet.create({
header:{
    height: Dimensions.get('window').height * .08,
    backgroundColor:'blue'
}
        
})