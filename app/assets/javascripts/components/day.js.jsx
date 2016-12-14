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
			return record.created_at_date == `${this.props.month + 1}/${this.props.date}/${this.props.year}`
		})

		if (result) {
			return (
				<div>
					<i className="fi-check"></i>{result.created_at_time} <a href={`/admin/attendance_records/${result.id}`} data-method="delete" className="button small alert float-right" style={{"marginBottom": "0px"}}>削除する</a>
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
				<td>{this.attended()}</td>
			</tr>
		)
	}
})