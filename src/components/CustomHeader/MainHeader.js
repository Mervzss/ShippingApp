import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'
import theme from '../../../theme/Default/colorStyles'

export const MainHeader = props =>{
    return(
        <View style={styles.header}>
        <View style={styles.leftHead}>
        <Icon name="bars" size={30} color={theme.APP_BG}/>
        </View>
        <View style={styles.mainHead}>
        <Text style={styles.headTextStyle}>{props.headText}</Text>
        </View>
        <View style={styles.rightHead}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height: Dimensions.get('window').height * .08,
        backgroundColor:theme.APP_COLOR,
        flexDirection:'row'
    },
    leftHead:{
        flex:1.5,
        justifyContent:'center',
        alignItems:'center'
    },
    mainHead:{
        flex:7,
        justifyContent:'center',
        alignItems:'center'
    },
    headTextStyle:{
        fontSize:24,
        fontWeight:'bold',
        color:theme.APP_BG
    },
    rightHead:{
        flex:1.5,
        justifyContent:'center',
        alignItems:'center'
    }
            
    })