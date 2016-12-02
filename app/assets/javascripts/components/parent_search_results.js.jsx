let ParentSearchResults = React.createClass({
	students(){
		if (this.props.students.length == 0 && this.props.searched) {
			return (
				<h3 className="text-center">生徒が見つかりませんでした。</h3>
			)
		} else {
			let students = this.props.students.map((student) => {
				return (
					<ParentStudent key={student.id}
									 student={student} />
				)
			});

			return students;
		}
		
	},

	render(){
		

		return (
			<div>
				{this.students()}
			</div>
		)
	}
});
