import React, { Component } from 'react'
import {
	AppRegistry,
} from 'react-native'

import MainContainer from './components/MainContainer'


class BeBriefed extends Component {
	render() {
		return (
			<MainContainer />
		)
	}
}

AppRegistry.registerComponent('BeBriefed', () => BeBriefed)
