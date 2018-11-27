import { createDrawerNavigator } from 'react-navigation'

import CheckoutView from './CheckoutView'

export default Drawer = createDrawerNavigator(
    {
        Checkout: CheckoutView
    },
    {
        initialRouteName:'Checkout'
    }
)