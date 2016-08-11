import React, { Component } from 'react'
import {
	View,
	Text,
	StyleSheet,
} from 'react-native'


class MainContainer extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>BeBriefed App</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
})

export default MainContainer
