import React from 'react'
import { StyleSheet , Text } from 'react-native'

import theme from '../../../theme/Default/colorStyles'

export const CustomText = props =>{
    return <Text style={[styles.defTextLight, props.style]}>{props.children}</Text>
}

const styles = StyleSheet.create({
    defTextLight: {
        fontSize: 16,
        fontWeight: 'bold',
        color: theme.TEXT_LIGHT,
        paddingBottom: 8

    },

});
