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
			let length;

			if (result.length >= 100) {
				length = 100;
			} else if (result.length == 0) {
				length = 1;
			} else {
				length = result.length
			}

			return (
				<div>
					<button onClick={this.handleClick} className="button">
						一覧
					</button>
					<div className="stat-bar" style={{"width": `${length}%`}}>
					</div>
					{result.length}人
				</div>
			)
		} else if (result && this.state.displayStudents) {
			let student_names = result.map((record) => {
				return <p key={record.student.student_number}><a href="#">{record.student.student_number}</a> {record.student.name}（{record.student.name_hiragana}）</p>;
			});

			return (
				<div>
					<button onClick={this.handleClick} className="button warning">
						閉じる
					</button>
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
				<td style={{"width": "60%"}}>{this.attended()}</td>
			</tr>
		)
	}
})