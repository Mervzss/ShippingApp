import { createStackNavigator } from 'react-navigation'

import PaymentView from '../PaymentView'
import FinishPaymentView from './FinishPaymentView'

export default PaymentStack = createStackNavigator(
    {
        PayInit: PaymentView,
        PayFin: FinishPaymentView
    },
    {
        initialRouteName:'PayInit',
        navigationOptions:{
            header:null
        }
    }
)