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

	componentDidUpdate(prevProps, prevState) {
		$(".button").css({"background": this.props.primaryButtonColor});
		$("button.warning").css({"background": this.props.secondaryButtonColor});
		$("button.alert").css({"background": this.props.thirdButtonColor});
		$(".title-bar").css({"background": this.props.topColor});
		$(".footer").css({"background": this.props.footerColor});			
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
			<AttendanceRecordsListCalendar attendanceRecords={this.state.attendanceRecords} />
		)
	}
})