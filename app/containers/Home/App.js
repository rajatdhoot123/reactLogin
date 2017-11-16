import React, { Component } from 'react';
import {App} from '../../components'

export class Root extends Component {
	render() {

		//let passwordStrength = {regex: (/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/)};  // The string must contain at least 1 lowercase alphabetical character && 1 uppercase alphabetical character && at least 1 numeric character && 	The string must be eight characters or longer can be changed by change digit 8 to you want
		let passwordStrength = {regex: (/^^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)}; //The string must contain at least 1 lowercase alphabetical character && 1 uppercase alphabetical character && at least 1 numeric character && at least one special character,&& 	The string must be eight characters or longer can be changed by change digit 8 to you want	
		return (
			<div>
				<App {...passwordStrength}  />
			</div>
		)
	}
}
