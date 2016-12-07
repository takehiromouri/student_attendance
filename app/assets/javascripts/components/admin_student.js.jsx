let AdminStudent = React.createClass({
	render(){
		return (
			<div>
				<h2>{this.props.student.name}</h2>
				<p><strong>生徒番号</strong> {this.props.student.student_number}</p>
				<p><i className="fi-telephone"></i> <a href={`tel:${this.props.student.phone}`} target="_blank">{this.props.student.phone}</a></p>

				<hr/>

				<h5 className="text-center">出席記録</h5>
				<Calendar selected={new Date()} attendanceRecords={this.props.student.attendance_records}/>
			</div>
		)
	}
});
