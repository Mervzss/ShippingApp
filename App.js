import React, {Component} from 'react';
import { createSwitchNavigator } from 'react-navigation'

import Drawer from './src/Screens/Drawer'


export default class App extends Component{

  render() {
    return <Switchings/>
  }

}

const Switchings = createSwitchNavigator(
  {
    Initial: Drawer
  },
  {
    initialRouteName:'Initial', 
  }
)


