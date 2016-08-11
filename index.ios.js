import React, { Component } from 'react'
import {
	AppRegistry,
} from 'react-native'

import MainContainer from './components/MainContainer'


const isUp = false

class BeBriefed extends Component {
	render() {
		return (
			<MainContainer isUp={isUp} />
		)
	}
}

AppRegistry.registerComponent('BeBriefed', () => BeBriefed)
