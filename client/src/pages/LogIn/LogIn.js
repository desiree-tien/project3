import React, { Component } from "react";
import "./LogIn.css";
import API from "../../utils/API";

class LogIn extends Component {

	state = {
	  email: "",
	  password: ""
	};

	handleInputChange = event => {
	  const { name, value } = event.target;
	  this.setState({
	    [name]: value
	  });
	};

	handleLogin = event => {
	  event.preventDefault();
	  if (this.state.email && this.state.password) {
	  	console.log("Login.js says: "+ this.state.email + " " + this.state.password);
	    API.Login(
	    		{
    		  		email: this.state.email,
    		  		password: this.state.password
	    		}
	    	)
	      .then(res => {
	      	console.log("res is: "); 
	      	console.log( res.status);
	      	console.log( res); 
	      	if (res.status === 200) { this.props.history.push('/') }
	      })
	      .catch(err => API.getLoginError()
	      	.then(res => {console.log("res is: "); console.log( res); })
	      	.catch(err => console.log(err)));
	  }
	};

	// isValidEmail = email => {
	// 	const emailRE = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
	// 	return emailRE.test(email);
	// }

	render() {
	    return (
			<div className="logInBody">   
			    <div className="logInContainer">
			    	<h1>Size</h1>      
			        <form>
			        	<input 
			        		value={this.state.email}
			        		onChange={this.handleInputChange}
			        		name="email" 
			        		type="email" 
			        		placeholder="Email" />
			        	<p></p>
			        	<input 
			        		value={this.state.password}
			        		onChange={this.handleInputChange}
			        		name="password" 
			        		type="password" 
			        		placeholder="Password" />
			        	<p></p>
			        	<button 
				        	disabled={!(this.state.password && this.state.email)}
				        	onClick={this.handleLogin}
			        		type="submit" 
			        		className="logInButton">
			        			Log In
	        			</button>
			        </form>
			        <div className="createAccount">
			        	<p>Don't have an account yet?</p>
			        	<a href="/signup"><p>Sign Up!</p></a>
			        </div>
			    </div>
	    	</div>
		)
	}
}


export default LogIn;
