let AuthenticationForm = React.createClass({
	getInitialState() {
		return {
			password: "",
			error: false,
			errorMessage: ''
		}
	},

	handleChange(e){
		e.preventDefault();

		this.setState({password: e.target.value})
	},

	handleUpdate(number){
		let password = this.state.password += number;
		this.setState({password: password});
	},

	handleDeleteChar(){
		let password = this.state.password.slice(0, -1);
		this.setState({password: password});
	},

	handleClose(){
		this.setState({error: false});
	},

	handleSubmit(e){
		e.preventDefault();

		$.ajax({
			url: '/authentication',
			type: 'POST',
			dataType: 'JSON',
			context: 'this',
			data: { 
				authentication: { password: this.state.password } 
			},
			success: (data) => {				
				if (data.url) {
					window.location.replace(data.url);
				} else {
					this.props.handleAuthenticated();				
				}
			},
			error: (request, status, error) => {										
				this.setState({error: true, errorMessage: request.responseText});
			}
		})
	},

	render(){
		let errorMessage;
		if (this.state.error) {
			errorMessage = <ErrorMessage message={this.state.errorMessage} handleClose={this.handleClose} />
		}

		return (
			<div>
				{errorMessage}
				<form>
				  <div className="row">
				    <div className="medium-4 medium-offset-4 small-12 columns">			      
				    	<div className="input-group">
							  <input className="input-group-field" 
							  			 type="number" 
							  			 placeholder="暗証番号を入力"
							  			 onChange={this.handleChange}
							  			 value={this.state.password} />	
							  <div className="input-group-button">
							    <input type="submit" 
							    			 className="button" 
							    			 onClick={this.handleSubmit} 
							    			 value="認証する" />
							  </div>
							</div>
				      		      
				    </div>			    
				  </div>
				</form>

				<FormButtons handleUpdate={this.handleUpdate} handleDeleteChar={this.handleDeleteChar} handleSubmit={this.handleSubmit}/>
			</div>
		)
	}
})