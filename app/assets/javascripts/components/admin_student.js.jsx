let AdminStudent = React.createClass({
	render(){
		return (
			<div>
				<h2>{this.props.student.name}</h2>
				<p><strong>生徒番号</strong> {this.props.student.student_number}</p>
				<p><i className="fi-telephone"></i> <a href={`tel:${this.props.student.phone}`} target="_blank">{this.props.student.phone}</a></p>

				<div className="button-group float-right">
					<a href={`/admin/students/${this.props.student.id}/edit`}>
						<button className="button warning">						
							登録編集
						</button>
					</a>	
					<a href={`/admin/students/${this.props.student.id}`} 
							 data-method="delete" 
							 data-confirm="本当に解除しますか？">				
						<button className="button alert">						
							登録解除						
						</button>
					</a>
				</div>

				<hr/>

				<h5 className="text-center">出席記録</h5>
				<Calendar selected={new Date()} attendanceRecords={this.props.student.attendance_records}/>
			</div>
		)
	}
});
