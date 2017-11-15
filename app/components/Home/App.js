import React, { Component } from 'react';
import logo from '../../../images/Logo.jpg'
import classNames from 'classnames'
require('./index.css');

const backgroundImage ={
  backgroundImage: "url('../../../images/Logo.jpg')"
};

export class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        email: '',
        password: '',
        validEmail: false,
        validPassword: false,
        passwordStrength: 'red'
      }
      this.handleEmail = this.handleEmail.bind(this);
      this.handlePassword = this.handlePassword.bind(this);
    }

    handleEmail(e){
      this.setState({
        email: e.target.value,
      },() => {
        (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(this.state.email)) ? this.setState({validEmail: true},()=> console.log(this.state)) : null;
      })
    }

    handlePassword(e){
      this.setState({
        password: e.target.value,
      },() => {
        let strongRegex = (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);
        let mediumRegex = (/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/);
        if(strongRegex.test(this.state.password)){
          this.setState({
            passwordStrength : "green"
          })
        } else if(mediumRegex.test(this.state.password)){
          this.setState({
            passwordStrength: "yellow"
          })
        } else {
          this.setState({
            passwordStrength: "red"
          })
        }
      })
    }

	render() {
		return (
			<div>
				<div style={backgroundImage} id="bg">
          <div className="container centered">
            <div className="row">
            <form>
              <div className="form-group has-success">
                <input type="email" className="form-control form-control-success" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={this.handleEmail} value={this.state.email} placeholder="Enter email" />
                  <div className="form-control-feedback">Success! You done it.</div>
                <small id="emailHelp" className="form-text text-muted">We will never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <input type="password" className="form-control" id="exampleInputPassword1" onChange={this.handlePassword} value={this.state.password} placeholder="Password" />
              </div>
            </form>
            </div>
          </div>
        </div>
      </div>
		)
	}
}
