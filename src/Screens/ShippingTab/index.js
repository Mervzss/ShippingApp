
import React from 'react'
import {View, Text, Dimensions} from 'react-native'
import { createMaterialTopTabNavigator } from 'react-navigation'

import theme from '../../../theme/Default/colorStyles'

import AddressView from './AddressView'
import ShippingView from './ShippingView'
import PaymentStack from './PaymentStack'

export default ShippingTab = createMaterialTopTabNavigator(
    {
        Address:AddressView,
        Shipping: ShippingView,
        Payment: PaymentStack
    },
    {
        initialRouteName:'Address',
        tabBarComponent: props =>{
            console.log(props)
            let tab = (<View style={{justifyContent:'center',backgroundColor:theme.APP_COLOR2, height:60, }}>
            <View style={{ height:'70%', backgroundColor:theme.APP_COLOR2, flexDirection:'row', justifyContent:'space-evenly', alignItems:'center'}}>
           

                <Text style={{fontSize:20, color:theme.APP_ACTIVE, paddingHorizontal:15, marginTop:10}}>Address</Text>
                <Text style={{fontSize:20, color:theme.APP_BG, paddingHorizontal:15, marginTop:10}}>Shipping</Text>
                <Text style={{fontSize:20, color:theme.APP_BG, paddingHorizontal:15, marginTop:10}}>Payment</Text>
            </View>
            <View style={{backgroundColor:theme.APP_BG, height:'30%'}}>
                <View style={{backgroundColor:theme.APP_COLOR2, height:10}}/>
                <View style={{width:15, height:15, borderRadius:20, backgroundColor:theme.APP_ACTIVE, transform:[{translateY:-9}, {translateX:Dimensions.get('window').width*.16}]}}/>
            </View>
            
            </View>)

            if(props.navigation.state.index === 1){
                tab = <View style={{justifyContent:'center',backgroundColor:theme.APP_COLOR2, height:60, }}>
                <View style={{ height:'70%', backgroundColor:theme.APP_COLOR2, flexDirection:'row', justifyContent:'space-evenly', alignItems:'center'}}>
               
    
                    <Text style={{fontSize:20, color:theme.APP_BG, paddingHorizontal:15, marginTop:10}}>Address</Text>
                    <Text style={{fontSize:20, color:theme.APP_ACTIVE, paddingHorizontal:15, marginTop:10}}>Shipping</Text>
                    <Text style={{fontSize:20, color:theme.APP_BG, paddingHorizontal:15, marginTop:10}}>Payment</Text>
                </View>
                <View style={{backgroundColor:theme.APP_BG, height:'30%'}}>
                    <View style={{backgroundColor:theme.APP_COLOR2, height:10}}/>
                    <View style={{width:15, height:15, borderRadius:20, backgroundColor:theme.APP_ACTIVE, transform:[{translateY:-9}, {translateX:Dimensions.get('window').width*.48}]}}/>
                </View>
                
                </View>
            }
            else if(props.navigation.state.index === 2){
                tab = <View style={{justifyContent:'center',backgroundColor:theme.APP_COLOR2, height:60,borderColor:'transparent' }}>
                <View style={{ height:'70%', backgroundColor:theme.APP_COLOR2, flexDirection:'row', justifyContent:'space-evenly', alignItems:'center'}}>
               
    
                    <Text style={{fontSize:20, color:theme.APP_BG, paddingHorizontal:15, marginTop:10}}>Address</Text>
                    <Text style={{fontSize:20, color:theme.APP_BG, paddingHorizontal:15, marginTop:10}}>Shipping</Text>
                    <Text style={{fontSize:20, color:theme.APP_ACTIVE, paddingHorizontal:15, marginTop:10}}>Payment</Text>
                </View>
                <View style={{backgroundColor:theme.APP_BG, height:'30%'}}>
                    <View style={{backgroundColor:theme.APP_COLOR2, height:10}}/>
                    <View style={{width:15, height:15, borderRadius:20, backgroundColor:theme.APP_ACTIVE, transform:[{translateY:-9}, {translateX:Dimensions.get('window').width*.79}]}}/>
                </View>
                
                </View>
            }
            return tab
    }
    }
)