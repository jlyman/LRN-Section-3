import React, { Component, PropTypes } from 'react'
import {
	View,
	StyleSheet,
} from 'react-native'

import StatusScreen from './StatusScreen'
import TabBarContainer from './TabBarContainer'


class MainContainer extends Component {
	_renderTab(selected, services) {
		const thisService = services.find(s => s.key === selected)
		return (
			<StatusScreen
				isUp={thisService.isUp}
				lastUpTime={thisService.lastUpTime}
			/>
		)
	}

	render() {
		return (
			<View style={styles.container}>
				{this._renderTab(this.props.selectedService, this.props.services)}
				<TabBarContainer onTabChange={this.props.onServiceChange} />
			</View>
		)
	}
}

MainContainer.propTypes = {
	selectedService: PropTypes.string.isRequired,
	services: PropTypes.array.isRequired,
	onServiceChange: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
})

export default MainContainer
