let AttendanceFormContainer = React.createClass({
	getInitialState() {
		return {			
			authenticated: false,			
		}
	},

	handleAuthenticated(){
		this.setState({authenticated: true});

		$('#authenticated').foundation('open');			

		setTimeout(() => {
			$('#authenticated').foundation('close');
		}, 3000);
	},

	render(){
		let form;

		if (this.state.authenticated) {
			form = <AttendanceForm />
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