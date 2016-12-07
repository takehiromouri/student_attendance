let AdminStudentsList = React.createClass({
	getInitialState() {
		return {
			students: [],
			student: {},
			displayStudent: false
		}
	},

	componentWillMount() {
		$.ajax({
			url: '/admin/students.json',
			type: 'GET',
			dataType: 'JSON',
			context: 'this',
			success: (data) => {
				this.setState({students: data});				
			}
		})
	},

	displayAll(e){
		e.preventDefault();

		this.setState({displayStudent: false});
	},

	handleClickDetail(e){
		e.preventDefault();
		let studentNumber = $(e.target).data("student-number");

		console.log(studentNumber);

		let student = this.state.students.filter((student) => {
			return student.student_number == studentNumber;
		});		

		this.setState({student: student[0], displayStudent: true});
	},

	students(){
		return this.state.students.map((student) => {
			return (
				<tr>
					<td>{student.student_number}</td>
					<td>{student.name}</td>
					<td>{student.phone}</td>
					<td>
						<button className="button" onClick={this.handleClickDetail} data-student-number={student.student_number}>
							詳細
						</button>
					</td>
				</tr>
			)
		})
	},

	studentTable(){
		if (this.state.displayStudent) {
			return (
				<div>
					<button className="button" onClick={this.displayAll}>一覧</button>
					<AdminStudent student={this.state.student} />
				</div>
			)
		} else {
			return (
				<div>
					<h3>生徒一覧</h3>
					<table>
						<thead>
							<tr>
								<th>生徒番号</th>
								<th>名前</th>
								<th>電話番号</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{this.students()}
						</tbody>
					</table>
				</div>
			)
		}
	},

	render(){
		return (
			<div>
				{this.studentTable()}
			</div>
		)
	}

})