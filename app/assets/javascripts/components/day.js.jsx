let Day = React.createClass({
	day(){
		return new Date(this.props.year, this.props.month, this.props.date).getDay();
	},

	attended(){
		let result = this.props.attendanceRecords.find((record) => {
			return record.created_at_date == `${this.props.month + 1}/${this.props.date}/${this.props.year}`
		})

		if (result && this.props.admin) {
			return (
				<div>
					<i className="fi-check"></i>{result.created_at_time} <a href={`/admin/attendance_records/${result.id}`} data-method="delete" data-confirm="本当に削除してよろしいでしょうか？" className="button small alert float-right" style={{"marginBottom": "0px"}}>削除する</a>
				</div>
			)
		} else if (result) {
			return (
				<div>
					<i className="fi-check"></i>{result.created_at_time}
				</div>
			)
		}
		
	},

	dayStyles(){
		if (this.props.today) {
			return {"background": "rgb(255, 204, 0)"}
		}
	},

	paymentRecord(){
		if (this.props.paymentRecords) {
			let result = this.props.paymentRecords.find((record) => {
				return record.created_at_date == `${this.props.month + 1}/${this.props.date}/${this.props.year}`
			})		

			if (result && this.props.admin) {
				return (
					<div>
						<i className="fi-yen"></i> <small><a href={`/payment_records/${result.id}`} data-method="delete" data-confirm="本当に削除してよろしいでしょうか？" style={{"marginBottom": "0px"}}>(削除する)</a></small>
					</div>
				)
			} else if (this.props.admin) {
				return (
					<button className="button small primary" onClick={() => this.props.handleCreatePaymentRecord(`${this.props.year}-${this.props.month + 1}-${this.props.date}`)}>
						記録する
					</button>
				)
			}
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
				<td>{this.paymentRecord()}</td>
			</tr>
		)
	}
})