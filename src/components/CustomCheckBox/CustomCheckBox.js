import React, { Component } from 'react'
import { View, CheckBox, Image } from 'react-native'

import {CustomText, CustomBlackText, BaseImage} from '../../components'


export const CustomCheckBox = props =>{
    return (
    
        <View style={{ flexDirection: 'row', justifyContent:'flex-end', alignItems:'flex-start', flex:1,}}>
        
        <View style={{flex:1, alignItems:'center'}}>
        <CheckBox/>
        </View>

        <View style={{flex:3, alignItems:'center'}}> 
        <BaseImage source={props.source} originalWidth={props.originalWidth} originalHeight={props.originalHeight}/>
        
        </View>

        <View style={{flex:6, alignItems:'flex-end', paddingRight:10}}>
        <CustomBlackText>{props.upText}</CustomBlackText> 
        <CustomText style={{paddingBottom:0, fontSize:14}}>{props.downText}</CustomText>
        </View>
    
        </View>
        )
}