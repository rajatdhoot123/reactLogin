import React, { Component } from 'react';
import {App} from '../../components'

export class Root extends Component {
	render() {

		//let passwordStrength = {regex: (/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/)};
		let passwordStrength = {regex: (/^^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)};
		//let passwordStrength = {regex: (/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/)};
		return (
			<div>
				<App {...passwordStrength}  />
			</div>
		)
	}
}
