import React, { Component } from 'react';
import logo from '../../../images/Logo.jpg'
import classNames from 'classnames'
require('./index.css');

const backgroundImage = {
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
        passwordColor: 0,
      }
      this.handleEmail = this.handleEmail.bind(this);
      this.handlePassword = this.handlePassword.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmail(e){
      this.setState({
        email: e.target.value,
      },() => {
        (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(this.state.email)) ? this.setState({validEmail: true}) : this.setState({validEmail: false});
      })
    }

    handlePassword(e){
      const {regex} = this.props;
      this.setState({
        password: e.target.value,
      },() => {
        if(regex.test(this.state.password)){
          this.setState({
             passwordColor : 100,
             validPassword: true,
          })
        } else {
          this.setState({
               passwordColor : 0,
               validPassword: false,
            })
        }
      })
    }

  handleSubmit(e){
    e.preventDefault();

  }
	render() {
    const isEnabled = this.state.password.length > 0 && this.state.validEmail;
    let formEmail = classNames({
      'form-control': true,
      'form-control-success': this.state.validEmail,
    });
    let passwordProgress = classNames({
      'progress-bar': true,
      'bg-success' : (this.state.passwordColor == 100) ? true : false,
      'bg-warning': (this.state.passwordColor == 50) ? true : false,
      'bg-danger':  (this.state.passwordColor == 0) ? true : false,
    })
		return (
			<div style={backgroundImage} id="bg">
          <div className="container centered">
            <div className="row">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group has-success">
                <input type="email" className={formEmail} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={this.handleEmail} value={this.state.email} placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We will never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <input type="password" className="form-control" id="exampleInputPassword1" onChange={this.handlePassword} value={this.state.password} placeholder="Password" />
                <div className="form-control-feedback">Sorry, that usernames taken. Try another?</div>
                <div className="progress">
                  <div className={passwordProgress} role="progressbar" style={{width: `100%`}} aria-valuemax="100"></div>
                </div>
              </div>
              <button type="submit" disabled={!isEnabled} className="btn btn-sm btn-primary">Submit</button>
            </form>
            </div>
          </div>
      </div>
		)
	}
}
