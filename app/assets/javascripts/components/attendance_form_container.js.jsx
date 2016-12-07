let AttendanceFormContainer = React.createClass({
	getInitialState() {
		return {			
			authenticated: this.props.authenticated
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
				<div className="row">
					<div className="column medium-4 medium-offset-4">
						<div className="marquee">
							<p>{this.props.headerText}</p>
						</div>

						<hr />
					</div>
				</div>				
				
				{form}

				<AuthenticatedFlash />			
			</div>
		)
	}
})