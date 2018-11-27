import React from 'react'
import { StyleSheet, TextInput, Dimensions } from 'react-native'

import theme from '../../../theme/Default/colorStyles'

export const CustomInput = props =>{
    return <TextInput style={[styles.textInputStyle, (props.short && styles.short ), props.style]} {...props} />
}

const styles = StyleSheet.create({
    textInputStyle: {
        borderWidth: 1.5,
        borderColor: theme.TEXT_LIGHT,
        borderRadius: 5,
        fontWeight: 'bold',
        color: theme.TEXT_DARK,
        width:'100%',
        height: 45,
        paddingLeft: 10
    },
    short: {
        borderWidth: 1.5,
        borderColor: theme.TEXT_LIGHT,
        borderRadius: 5,
        fontWeight: 'bold',
        color: theme.TEXT_DARK,
        width: Dimensions.get('window').width *.43,
        height: 45,
        paddingLeft: 10
    }
});