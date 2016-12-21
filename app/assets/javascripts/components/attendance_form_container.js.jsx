let AttendanceFormContainer = React.createClass({
	getInitialState() {
		return {			
			authenticated: this.props.authenticated
		}
	},

	componentDidUpdate(prevProps, prevState) {
		$(".button").css({"background": this.props.primaryButtonColor});
		$("button.warning").css({"background": this.props.secondaryButtonColor});
		$("button.alert").css({"background": this.props.thirdButtonColor});
		$(".title-bar").css({"background": this.props.topColor});
		$(".footer").css({"background": this.props.footerColor});			
	},

	handleAuthenticated(){
		this.setState({authenticated: true});

		$('#authenticated').foundation('open');			

		setTimeout(() => {
			$('#authenticated').foundation('close');
		}, 3000);
	},

	handleToggleAuthentication(){
		this.setState({authenticated: false});
	},

	authenticationToggle(){
		if(this.state.authenticated) {
			return <p><small><a onClick={this.handleToggleAuthentication}>認証画面に変える</a></small></p>
		} else {
			return <p>{this.props.footer_text}</p>
		}
	},

	render(){
		let form;

		if (this.state.authenticated) {
			form = <AttendanceForm formButtonColor={this.props.formButtonColor} 
														 formSubmitButtonColor={this.props.formSubmitButtonColor} 
														 formButtonPressedColor={this.props.formButtonPressedColor}/>
		} else {
			form = <AuthenticationForm handleAuthenticated={this.handleAuthenticated} 
																 formButtonColor={this.props.formButtonColor} 
																 formSubmitButtonColor={this.props.formSubmitButtonColor} 
																 formButtonPressedColor={this.props.formButtonPressedColor} />			
		}

		return (
			<div>
				<div className="row" style={{"marginTop": "50px"}}>
  				<div className="large-10 large-offset-1 columns">
							
						{form}

					</div>
				</div>

				<footer className="footer text-center">
					<div className="row">
						<div className="column medium-6 medium-offset-3">
							{this.authenticationToggle()}
						</div>
					</div>
				</footer>				

				<AuthenticatedFlash />			
			</div>
		)
	}
})