import React, { Component } from 'react'
import {
	AppRegistry,
} from 'react-native'

import MainContainer from './components/MainContainer'


class BeBriefed extends Component {
	constructor(props) {
		super(props)

		this.state = {
			selectedService: 'web',
			services: [
				{ key: 'web', isUp: true, lastUpTime: null },
				{ key: 'db', isUp: false, lastUpTime: new Date((new Date()).getTime() - 5 * 60 * 1000) },
				{ key: 'mail', isUp: true, lastUpTime: null },
			],
		}

		this._switchService = this._switchService.bind(this)
	}

	_switchService(nextService) {
		this.setState({ selectedService: nextService })
	}

	render() {
		return (
			<MainContainer
				selectedService={this.state.selectedService}
				services={this.state.services}
				onServiceChange={this._switchService}
			/>
		)
	}
}

AppRegistry.registerComponent('BeBriefed', () => BeBriefed)
