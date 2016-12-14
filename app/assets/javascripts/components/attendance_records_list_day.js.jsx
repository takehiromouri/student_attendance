let AttendanceRecordsListDay = React.createClass({
	getInitialState() {
		return {
			displayStudents: false
		}	
	},

	componentWillReceiveProps(nextProps) {
		this.setState({displayStudents: false});
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
		});

		let length;

		if (result.length >= 100) {
			length = 100;
		} else if (result.length == 0) {
			length = 1;
		} else {
			length = result.length
		}

		if (result && !this.state.displayStudents) {
			return (
				<div>
					<button onClick={this.handleClick} className="button" style={{"marginBottom": "0px"}}>
						一覧
					</button>
					<div className="stat-bar" style={{"width": `${length}%`}}>
					</div>
					{result.length}人
				</div>
			)
		} else if (result && this.state.displayStudents) {
			let student_names = result.map((record) => {
				return <p key={record.student.student_number}><strong>{record.student.student_number}</strong> {record.student.name}<span style={{"fontSize": "10px"}}>（{record.student.name_hiragana}）</span></p>;
			});

			return (
				<div>
					<button onClick={this.handleClick} className="button alert" style={{"marginBottom": "0px"}}>
						閉じる
					</button>

					<div className="stat-bar" style={{"width": `${length}%`}}></div>

					{result.length}人
					<hr />
					{student_names}
				</div>
			)
		}
	},

	dayStyles(){
		if (this.props.today) {
			return {"background": "rgb(255, 204, 0)"}
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
			<tr style={this.dayStyles()}>
				<td>{this.props.date}</td>
				<td>{days[this.day()]}</td>
				<td style={{"width": "60%"}}>{this.attended()}</td>
			</tr>
		)
	}
})