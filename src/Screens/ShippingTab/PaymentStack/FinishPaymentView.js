import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, CheckBox,ScrollView  } from 'react-native'

import { CustomText, CustomButton, CustomBlackText, CustomInput } from '../../../components'

import theme from '../../../../theme/Default/colorStyles'
import Icon from 'react-native-vector-icons/FontAwesome5'


class FinishPaymentView extends Component {
    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.inView}>
                    <View style={styles.mainContainer}>
                        <View style={{ paddingBottom: 5 }}>
                            <CustomText>Scan your card</CustomText>
                        </View>

                        <View style={styles.customScan}>
                            <View style={{ flex: .15, justifyContent: 'center', alignItems: 'center' }}>
                                <Icon name='camera' size={30} />
                            </View>

                            <CustomBlackText style={{ fontSize: 17, flex: .85 }}>Save time and scan your credit card</CustomBlackText>
                        </View>


                        <View style={{ flexDirection: 'column', paddingTop: 15 }}>
                            <CustomText>Credit Card #No</CustomText>
                            <View style={styles.inputOne}>
                                <View style={{ width: '80%' }}>
                                    <CustomInput placeholder='Enter Credit Card #' />
                                </View>
                                <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require('ShippingApp/assets/visa.png')} style={{ width: 60, height: 25 }} resizeMode='contain' />
                                </View>

                            </View>

                        </View>

                        <View style={styles.inputOne}>
                            <View style={{ flexDirection: 'column' }}>
                                <CustomText>Expires</CustomText>

                                <CustomInput placeholder='Enter' short={true} />
                            </View>

                            <View style={{ flexDirection: 'column' }}>
                                <CustomText>CVV Code</CustomText>
                                <View style={styles.inputOne}>
                                    <CustomInput placeholder='Enter' style={styles.textInputStyle} />
                                    <Icon style={{ padding: 5 }} name='question-circle' size={30} color={theme.APP_ERROR} />
                                </View>

                            </View>

                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', flex: 1 }}>

                            <View style={{ flex: .7 }}>
                                <CheckBox />
                            </View>

                            <View style={{ flex: 6, alignItems: 'flex-start', paddingRight: 10 }}>
                                <View style={{ width: '90%', paddingTop: 4 }}>
                                    <CustomBlackText style={{ fontSize: 18, fontWeight: 'bold' }}>Agree to our terms {'&'} conditions</CustomBlackText>
                                    <View style={{ paddingTop: 10 }}>
                                        <CustomText style={{ paddingBottom: 0 }}>I agree that i have read and accepted our</CustomText>
                                        <View style={{ flexDirection: 'row' }}>
                                            <CustomText style={{ paddingBottom: 0, color: theme.APP_ERROR }}>terms {'&'} conditions</CustomText>
                                            <CustomText style={{ paddingBottom: 0 }}> for your purchase</CustomText>
                                        </View>
                                    </View>
                                </View>
                            </View>

                        </View>







                    </View>

                    <View style={styles.buttonContainer}>
                        <CustomButton title='Finish your order' onPress={() => this.props.navigation.navigate('Address')}/>
                    </View>

                </View>



            </ScrollView>
        )
    }
}
export default FinishPaymentView;

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
    checkBoxing: {
        flexDirection: 'column',
        flex: .5,
        justifyContent: 'flex-start',
        borderBottomColor: theme.TEXT_LIGHT,
        borderBottomWidth: 1
    },
    customScan: {
        width: '100%',
        height: 45,
        backgroundColor: theme.TEXT_LIGHT,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    inputOne: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // paddingTop: 5,
        paddingBottom: 17
    },
    extra: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // paddingTop: 5,
        paddingBottom: 17
    },
    textInputStyle: {
        borderWidth: 1.5,
        borderColor: theme.TEXT_LIGHT,
        borderRadius: 5,
        fontWeight: 'bold',
        color: theme.TEXT_DARK,
        width: Dimensions.get('window').width * .35,
        height: 45,
        paddingLeft: 10
    },
});
