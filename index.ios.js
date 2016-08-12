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
		this._fetchServiceStatus = this._fetchServiceStatus.bind(this)
	}

	componentDidMount() {
		setInterval(this._fetchServiceStatus, 5000)
	}

	_switchService(nextService) {
		this.setState({ selectedService: nextService })
	}

	_fetchServiceStatus() {
		fetch('http://localhost:8080/status')
			.then(response => response.json())
			.then(data => {
				const newState = this.state.services.map(s => (
					Object.assign(s, {
						isUp: data[s.key].status === 'up',
						lastUpTime: new Date(data[s.key].lastUpTime),
					})
				))

				this.setState({ services: newState })
			})
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
