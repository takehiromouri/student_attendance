let AdminStudent = React.createClass({
	render(){
		return (
			<div>
				<h2>{this.props.student.last_name + this.props.student.first_name}</h2>
				<p>生徒番号 {this.props.student.student_number}</p>
				<p>電話番号 <a href={this.props.student.phone} target="_blank">{this.props.student.phone}</a></p>

				<hr/>

				<h5>出席記録</h5>
			</div>
		)
	}
});
