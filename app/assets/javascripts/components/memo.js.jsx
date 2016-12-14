let Memo = React.createClass({
	handleDelete(e){
		e.preventDefault();
	},

	render(){
		return (
			<div className="callout">
				<span className="float-right">
					<a onClick={this.handleDelete}><i className="fi-trash"></i></a>
				</span>
				<p><small>{this.props.memo.created_at}</small></p>
				<p>{this.props.memo.content}</p>
			</div>
		)
	}
})