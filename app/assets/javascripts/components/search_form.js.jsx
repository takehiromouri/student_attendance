let SearchForm = React.createClass({
	getInitialState() {
		return {
			student_number: ""
		};		
	},

	handleChange(e){
		let student_number = e.target.value;
		this.setState({student_number: student_number});
	},

	handleSubmit(e){		
		e.preventDefault();

		$.ajax({
			url: '/students',
			type: 'GET',
			dataType: 'JSON',
			context: 'this',
			data: { student_number: this.state.student_number },
			success: (data) => {
				console.log(data);
				this.props.handleSubmit(data);
			}
		})
	},

	render(){
		return (
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
		)
	}
});
