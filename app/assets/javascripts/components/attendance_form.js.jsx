let AttendanceForm = React.createClass({
	getInitialState() {
		return {
			studentNumber: "",
			studentName: "",
			record: "",
			error: false,
			errorMessage: ''
		}
	},

	handleChange(e){
		e.preventDefault();

		this.setState({studentNumber: e.target.value})
	},

	handleSubmit(e){
		e.preventDefault();

		$.ajax({
			url: '/students.json',
			type: 'GET',
			dataType: 'JSON',
			context: 'this',
			data: { student_number: this.state.studentNumber },
			success: (data) => {				
				this.setState({studentName: data.name});
				$('#confirmation').foundation('open');			
			},
			error: (request, status, error) => {										
				this.setState({error: true, errorMessage: request.responseText});
			}
		})

	},

	handleUpdate(number){
		let studentNumber = this.state.studentNumber += number;
		this.setState({studentNumber: studentNumber});
	},

	handleDeleteChar(){
		let studentNumber = this.state.studentNumber.slice(0, -1);
		this.setState({studentNumber: studentNumber});
	},

	handleConfirm(){
		$('#confirmation').foundation('close');	

		$.ajax({
			url: "/attendance_records",
			type: "POST",
			dataType: "JSON",
			context: "this",
			data: {
			 attendance_record: {
			 	student_number: this.state.studentNumber 
			 }
			},
			success: (data) => {
				let studentName = data.student.last_name + data.student.first_name
				this.setState({record: data.record, studentName: studentName, error: false});

				setTimeout(() => {
					$('#result').foundation('open');	
				}, 1000);
				
				setTimeout(() => {
					$('#result').foundation('close');
				}, 5000);
			},
			error: (request, status, error) => {										
				this.setState({error: true, errorMessage: request.responseText});
			}
		})
	},

	handleCancel(){
		$('#confirmation').foundation('close');	
	},

	render(){
		let errorMessage;
		if (this.state.error) {
			errorMessage = <ErrorMessage message={this.state.errorMessage} />
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
							  			 placeholder="学生番号を入力"
							  			 onChange={this.handleChange}
							  			 value={this.state.studentNumber} />	
							  <div className="input-group-button">
							    <input type="submit" 
							    			 className="button" 
							    			 onClick={this.handleSubmit} 
							    			 value="出席する" />
							  </div>
							</div>
				      		      
				    </div>			    
				  </div>
				</form>

				<AttendanceFormButtons handleUpdate={this.handleUpdate} handleDeleteChar={this.handleDeleteChar}/>

				<Result studentName={this.state.studentName} record={this.state.record} />

				<Confirmation studentName={this.state.studentName} studentNumber={this.state.studentNumber} handleCancel={this.handleCancel} handleConfirm={this.handleConfirm} />
			</div>
		)
	}
});
