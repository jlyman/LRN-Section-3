import React, { Component, PropTypes } from 'react'
import {
	View,
	StyleSheet,
} from 'react-native'

import StatusScreen from './StatusScreen'
import TabBarContainer from './TabBarContainer'


class MainContainer extends Component {
	render() {
		return (
			<View style={styles.container}>
				<StatusScreen isUp={this.props.isUp} lastUpTime={this.props.lastUpTime} />
				<TabBarContainer />
			</View>
		)
	}
}

MainContainer.propTypes = {
	isUp: PropTypes.bool.isRequired,
	lastUpTime: PropTypes.instanceOf(Date),
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
})

export default MainContainer
