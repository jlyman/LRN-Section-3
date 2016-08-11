import React, { Component, PropTypes } from 'react'
import {
	View,
	Text,
	StyleSheet,
} from 'react-native'

import StatusIndicator from './StatusIndicator'


class StatusScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<StatusIndicator isUp={this.props.isUp} />
				<Text style={styles.statusText}>Service {this.props.isUp ? 'Up' : 'Down!'}</Text>
			</View>
		)
	}
}

StatusScreen.propTypes = {
	isUp: PropTypes.bool.isRequired,
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	statusText: {
		fontSize: 30,
	},
})

export default StatusScreen
