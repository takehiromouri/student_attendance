let ParentStudent = React.createClass({
	render(){
		return (
			<div>				
				<p>生徒番号 {this.props.student.student_number}</p>
				<hr/>

				<h5>出席記録</h5>
			</div>
		)
	}
});
