let AttendanceRecordsListDay = React.createClass({
	getInitialState() {
		return {
			displayStudents: false
		}	
	},

	day(){
		return new Date(this.props.year, this.props.month, this.props.date).getDay();
	},

	handleClick(e){
		e.preventDefault();
		this.setState({displayStudents: !this.state.displayStudents});
	},

	attended(){
		let result = this.props.attendanceRecords.filter((record) => {
			return record.created_at_date == `${this.props.month + 1}/${this.props.date}/${this.props.year}`
		})

		if (result && !this.state.displayStudents) {
			return (
				<div>
					<a href="#" onClick={this.handleClick}>
						{result.length}人
					</a>
				</div>
			)
		} else if (result && this.state.displayStudents) {
			let student_names = result.map((record) => {
				return <p><strong>{record.student.student_number}</strong> {record.student.name}（{record.student.name_hiragana}）</p>;
			});

			return (
				<div>
					<a href="" onClick={this.handleClick}>
						{result.length}人
					</a>
					<hr />
					{student_names}
				</div>
			)
		}
	},

	render(){
		let days = {
			"0": "日",
			"1": "月",
			"2": "火",
			"3": "水",
			"4": "木",
			"5": "金",
			"6": "土"
		}

		return (
			<tr>
				<td>{this.props.date}</td>
				<td>{days[this.day()]}</td>
				<td>{this.attended()}</td>
			</tr>
		)
	}
})