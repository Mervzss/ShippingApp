import React, { Component } from 'react'
import { View, StyleSheet, Button, TouchableOpacity, Text, ScrollView, Dimensions } from 'react-native'

import theme from '../../../theme/Default/colorStyles'
import { CustomInput, CustomText, CustomButton } from '../../components'

class AddressView extends Component {

    render() {
        return (
            <ScrollView  contentContainerStyle={styles.container}>
                <View style={styles.inView}>

                    <View style={styles.mainContainer}>
                        <CustomText>Your Name</CustomText>
                        <View style={styles.inputOne}>
                            <CustomInput placeholder='First Name' short={true} />
                            <CustomInput placeholder='Last Name' short={true} />
                        </View>
                        <CustomText>Address Line</CustomText>

                        <View style={styles.inputOne}>
                            <CustomInput placeholder='Enter Address 1' />
                        </View>

                        <CustomText>Address Line 2</CustomText>

                        <View style={styles.inputOne}>
                            <CustomInput placeholder='Enter Address 2' />
                        </View>


                        <View style={styles.inputOne}>
                            <View style={{ flexDirection: 'column' }}>
                                <CustomText>City</CustomText>

                                <CustomInput placeholder='City' short={true} />
                            </View>

                            <View style={{ flexDirection: 'column' }}>
                                <CustomText>Zip</CustomText>

                                <CustomInput placeholder='Zip' short={true} />
                            </View>
                        </View>

                        <View style={styles.inputOne}>
                            <View style={{ flexDirection: 'column' }}>
                                <CustomText>State</CustomText>

                                <CustomInput placeholder='State' short={true} />
                            </View>

                            <View style={{ flexDirection: 'column' }}>
                                <CustomText>Country</CustomText>

                                <CustomInput placeholder='Country' short={true} />
                            </View>
                        </View>

                        <CustomText>Shipping Options</CustomText>

                        <CustomText style={{ color: theme.APP_ERROR, }}>Please ship to another address</CustomText>

                        

                    </View>
                    <View style={styles.buttonContainer}>
                        <CustomButton title='Next Step' onPress={() => this.props.navigation.navigate('Shipping')}/>
                    </View>
                    
                </View>


            </ScrollView>
        )
    }
}
export default AddressView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.APP_BG,
        width: '100%',
        minHeight: Dimensions.get('window').height - (Dimensions.get('window').height*.185)
    },
    inView: {
        paddingTop: 15,
        flex: 1,
        backgroundColor: theme.APP_BG,
        width: '100%',
        paddingHorizontal: 15
    },
    defTextLight: {
        fontSize: 16,
        fontWeight: 'bold',
        color: theme.TEXT_LIGHT,
        paddingBottom: 5

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
    inputOne: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // paddingTop: 5,
        paddingBottom: 17
    },
    buttonView: {
        backgroundColor: theme.APP_ACTIVE,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: theme.APP_BG
    }
});
