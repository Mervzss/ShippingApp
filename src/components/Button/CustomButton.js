import React from 'react'
import { StyleSheet , Text, TouchableOpacity, View } from 'react-native'

import theme from '../../../theme/Default/colorStyles'

export const CustomButton = props =>{
    return (
                        <TouchableOpacity onPress={props.onPress}>
                            <View style={styles.buttonView}>
                                <Text style={styles.buttonText}>{props.title}</Text>
                            </View>
                        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    buttonView:{
        backgroundColor:theme.APP_ACTIVE,
        width:'98%',
        height: 50,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        fontSize:20,
        fontWeight:'bold',
        color:theme.APP_BG
    }
});