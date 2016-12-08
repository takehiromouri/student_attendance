let AdminSearchResults = React.createClass({
	getInitialState() {
		return {
			student: {},
			displayStudent: false
		}
	},

	displayAll(e){
		e.preventDefault();

		this.setState({displayStudent: false, student: {}});
	},

	handleClickDetail(e){
		e.preventDefault();
		let studentNumber = $(e.target).data("student-number");

		let student = this.props.students.filter((student) => {
			return student.student_number == studentNumber;
		});		

		this.setState({student: student[0], displayStudent: true});
	},

	students(){
		return this.props.students.map((student) => {
			return (
				<tr key={student.id}>
					<td>{student.student_number}</td>
					<td>{student.name}</td>					
					<td><a href={`tel:${student.phone}`} target="_blank">{student.phone}</a></td>
					<td>{student.attendance_records[0].created_at}</td>
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
					<button className="button warning" onClick={this.displayAll}>一覧に戻る</button>
					<AdminStudent student={this.state.student} />
				</div>
			)
		} else {
			return (
				<div style={{"overflowX": "auto"}}>					
					<table className="responsive">
						<thead>
							<tr>
								<th>生徒番号</th>
								<th>名前</th>
								<th>電話番号</th>
								<th>最終出席日</th>
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
});
