import React, { Component } from 'react'
import {
	AppRegistry,
} from 'react-native'

import MainContainer from './components/MainContainer'


const isUp = true

class BeBriefed extends Component {
	render() {
		return (
			<MainContainer isUp={isUp} />
		)
	}
}

AppRegistry.registerComponent('BeBriefed', () => BeBriefed)
