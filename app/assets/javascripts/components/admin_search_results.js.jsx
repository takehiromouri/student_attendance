let AdminSearchResults = React.createClass({
	student(){
		if ($.isEmptyObject(this.props.student) && this.props.searched) {
			return (
				<h3 className="text-center">生徒が見つかりませんでした。</h3>
			)
		} else if ($.isEmptyObject(this.props.student) == false) {
			return <AdminStudent student={this.props.student} />
		}
		
	},

	render(){
		

		return (
			<div>
				{this.student()}
			</div>
		)
	}
});
