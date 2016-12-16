let ParentStudents = React.createClass({
	getInitialState() {
		return {
			studentNumber: "",
			student: {},
			searched: false,
			error: false,
			errorMessage: '',
			showKeyboard: true
		};		
	},

	handleSubmit(e){
		alert("TEST");
		e.preventDefault();		
		$.ajax({
			url: '/students.json',
			type: 'GET',
			cache : false,
			dataType: 'JSON',
			context: 'this',
			data: { student_number: this.state.studentNumber },
			success: (data) => {				
				this.setState({student: data, showKeyboard: false, error: false});				
			},
			error: (request, status, error) => {										
				this.setState({error: true, errorMessage: request.responseText});
			}
		})

	},

	handleChange(e){
		e.preventDefault();

		this.setState({studentNumber: e.target.value})
	},

	handleClose(){
		this.setState({error: false});
	},

	handleUpdate(number){
		let studentNumber = this.state.studentNumber += number;
		this.setState({studentNumber: studentNumber});
	},

	handleDeleteChar(){
		let studentNumber = this.state.studentNumber.slice(0, -1);
		this.setState({studentNumber: studentNumber});
	},

	onInputFocus(){
		this.setState({showKeyboard: true});
	},

	formButtons(){
		if (this.state.showKeyboard) {
			return (
				<FormButtons handleUpdate={this.handleUpdate} handleDeleteChar={this.handleDeleteChar} handleSubmit={this.handleSubmit}/>
			)
		}
	},

	searchResults(){
		if (!this.state.showKeyboard) {
			return (
				<ParentSearchResults student={this.state.student} searched={this.state.searched}/>
			)
		}
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
				    <div className="large-4 large-offset-4 medium-8 medium-offset-2 small-12 columns">			      
				    	<div className="input-group">
							  <input className="input-group-field" 
							  			 type="number" 
							  			 placeholder="生徒番号を入力"
							  			 onChange={this.handleChange}
							  			 onFocus={this.onInputFocus}
							  			 value={this.state.studentNumber} />	
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

				{this.formButtons()}

				{this.searchResults()}
			</div>
		)
	}
});
