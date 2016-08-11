import React, { PropTypes } from 'react'
import {
	View,
	Text,
	StyleSheet,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


const StatusIndicator = (props) => (
	<View style={[styles.border, props.isUp && styles.isUpBorderColor]}>
		<Text style={[styles.character, props.isUp && styles.isUpCharacterColor]}>
			<Icon name={props.isUp ? 'check' : 'times'} size={180} />
		</Text>
	</View>
)

StatusIndicator.propTypes = {
	isUp: PropTypes.bool.isRequired,
}

const styles = StyleSheet.create({
	border: {
		borderWidth: 20,
		borderColor: '#F21D44',
		borderRadius: 200,
		width: 240,
		height: 240,
		justifyContent: 'center',
	},
	character: {
		fontSize: 160,
		textAlign: 'center',
		backgroundColor: 'rgba(0,0,0,0)',
		color: '#BF1534',
	},
	isUpBorderColor: {
		borderColor: '#3BD99F',
	},
	isUpCharacterColor: {
		color: '#2a8c5e',
	},
})

export default StatusIndicator
