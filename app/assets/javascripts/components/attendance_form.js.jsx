let AttendanceForm = React.createClass({
	getInitialState() {
		return {
			studentNumber: ""
		}
	},

	handleChange(e){
		e.preventDefault();

		this.setState({studentNumber: e.target.value})
	},

	handleSubmit(e){
		e.preventDefault();


	},

	handleUpdate(number){
		let studentNumber = this.state.studentNumber += number;
		this.setState({studentNumber: studentNumber});
	},

	handleDeleteChar(){
		let studentNumber = this.state.studentNumber.slice(0, -1);
		this.setState({studentNumber: studentNumber});
	},

	render(){
		return (
			<div>
				<form>
				  <div className="row">
				    <div className="medium-6 medium-offset-3 small-12 columns">			      
				    	<div className="input-group">
							  <input className="input-group-field" 
							  			 type="number" 
							  			 placeholder="学生番号を入力"
							  			 onChange={this.handleChange}
							  			 value={this.state.studentNumber} />	
							  <div className="input-group-button">
							    <input type="submit" 
							    			 className="button" 
							    			 onClick={this.handleSubmit} 
							    			 value="記録する" />
							  </div>
							</div>
				      		      
				    </div>			    
				  </div>
				</form>

				<AttendanceFormButtons handleUpdate={this.handleUpdate} handleDeleteChar={this.handleDeleteChar}/>
			</div>
		)
	}
});
