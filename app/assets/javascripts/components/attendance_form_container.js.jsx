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

	render(){
		let form;

		if (this.state.authenticated) {
			form = <AttendanceForm handleToggleAuthentication={this.handleToggleAuthentication}/>
		} else {
			form = <AuthenticationForm handleAuthenticated={this.handleAuthenticated} />			
		}

		return (
			<div>
							
				{form}

				<AuthenticatedFlash />			
			</div>
		)
	}
})