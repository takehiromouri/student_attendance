let SearchForm = React.createClass({
	getInitialState() {
		return {
			student_number: "",
			error: false,
			errorMessage: ""
		};		
	},

	handleChange(e){
		let student_number = e.target.value;
		this.setState({student_number: student_number});
	},

	handleClose(){
		this.setState({error: false});
	},

	handleSubmit(e){		
		e.preventDefault();

		$.ajax({
			url: '/students.json',
			type: 'GET',
			dataType: 'JSON',
			context: 'this',
			data: { student_number: this.state.student_number },
			success: (data) => {
				this.setState({error: false, errorMessage: ""});
				this.props.handleSubmit(data);
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
				    <div className="medium-6 medium-offset-3 small-12 columns">			      
				    	<div className="input-group">
							  <input className="input-group-field" 
							  			 type="search" 
							  			 placeholder="学生番号で検索"
							  			 onChange={this.handleChange} />	
							  <div className="input-group-button">
							    <input type="submit" 
							    			 className="button" 
							    			 onClick={this.handleSubmit} 
							    			 value="検索する" />
							  </div>
							</div>
				      		      
				    </div>			    
				  </div>
				</form>
			</div>
		)
	}
});
