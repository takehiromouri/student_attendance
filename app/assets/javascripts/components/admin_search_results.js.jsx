let AdminSearchResults = React.createClass({
	getInitialState() {
		return {
			student: {},
			displayStudent: false
		}
	},

	componentDidUpdate(prevProps, prevState) {
		$(".button").css({"background": this.props.primaryButtonColor});
		$("button.warning").css({"background": this.props.secondaryButtonColor});
		$("button.alert").css({"background": this.props.thirdButtonColor});
		$(".title-bar").css({"background": this.props.topColor});
		$(".footer").css({"background": this.props.footerColor});			
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
					<td className="hide-for-medium"><a href="#" onClick={this.handleClickDetail} data-student-number={student.student_number}>{student.name}</a></td>	
					<td className="show-for-medium">{student.name}</td>			
					<td><a href={`tel:${student.phone}`} target="_blank">{student.phone}</a></td>
					<td className="show-for-medium">{student.attendance_records[0] ? student.attendance_records[0].created_at : "なし"}</td>
					<td className="show-for-medium">
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
					<button className="button warning button-back" onClick={this.displayAll}>一覧に戻る</button>
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
								<th className="show-for-medium">最終出席日</th>
								<th className="show-for-medium"></th>
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
