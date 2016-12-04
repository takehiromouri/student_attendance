let Day = React.createClass({
	getInitialState() {
		return {

		}
	},

	day(){
		return new Date(this.props.year, this.props.month, this.props.date).getDay();
	},

	attended(){
		let result = this.props.attendanceRecords.find((record) => {
			return record.created_at_date == `${this.props.month}/${this.props.date}/${this.props.year}`
		})

		if (result) {
			return result.created_at_time;
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