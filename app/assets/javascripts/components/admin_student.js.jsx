let AdminStudent = React.createClass({
	getInitialState() {
		return {
			paymentRecords: this.props.student.payment_records
		}
	},

	handleCreatePaymentRecord(date){
		$.ajax({
			url: '/payment_records.json',
			type: 'POST',
			dataType: 'JSON',
			context: 'this',
			data: { student_id: this.props.student.id, payment_record: {created_at: date} },
			success: (data) => {				
				this.setState({paymentRecords: data});				
			}
		})
	},

	render(){
		return (
			<div>
				<div className="row">
					<div className="medium-4 small-12 columns">
						<div className="callout">
							<h2>{this.props.student.name}</h2>
							<p><strong>生徒番号</strong> {this.props.student.student_number}</p>
							<p><i className="fi-telephone"></i> <a href={`tel:${this.props.student.phone}`} target="_blank">{this.props.student.phone}</a></p>

							<div className="button-group">
								<a href={`/admin/students/${this.props.student.id}/edit`}>
									<button className="button warning small">						
										登録編集
									</button>
								</a>	
								<a href={`/admin/students/${this.props.student.id}`} 
										 data-method="delete" 
										 data-confirm="本当に解除しますか？">				
									<button className="button alert small">						
										登録解除						
									</button>
								</a>
							</div>
						</div>						
					</div>

					<div className="medium-8 small-12 columns">
						<div className="callout">
							<Memos student={this.props.student}/>
						</div>
					</div>

				</div>

				<hr/>

				<h5 className="text-center">出席記録</h5>
				<Calendar selected={new Date()} admin={true} attendanceRecords={this.props.student.attendance_records} paymentRecords={this.state.paymentRecords} handleCreatePaymentRecord={this.handleCreatePaymentRecord}/>
			</div>
		)
	}
});
