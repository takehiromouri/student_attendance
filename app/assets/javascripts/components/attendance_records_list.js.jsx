let AttendanceRecordsList = React.createClass({
	getInitialState() {
		return {
			attendanceRecords: [],
			year: new Date().getFullYear(),
	    month: new Date().getMonth(),
	    date: new Date().getDate(),
	    day: new Date().getDay()
		}
	},

	componentWillMount() {
		$.ajax({
			url: '/admin/attendance_records.json',
			type: 'GET',
			dataType: 'JSON',
			context: 'this',
			data: {
				month: `${this.state.year}-${this.state.month+1}-${this.state.date}`
			},
			success: (data) => {
				this.setState({attendanceRecords: data});				
			}
		})
	},

	render(){
		return (
			<h1>Hi</h1>
		)
	}
})