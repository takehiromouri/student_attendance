let ParentStudent = React.createClass({
	render(){
		return (
			<div>				
				<p>生徒番号 {this.props.student.student_number}</p>
				<hr/>

				<h5 className="text-center">出席記録</h5>
				<Calendar selected={new Date()} admin={false} attendanceRecords={this.props.student.attendance_records} paymentRecords={this.props.student.payment_records}/>
			</div>
		)
	}
});
