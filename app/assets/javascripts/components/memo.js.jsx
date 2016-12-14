let Memo = React.createClass({
	handleDelete(e){
		e.preventDefault();

		if (confirm("本当に削除してよろしいでしょうか？")) {
			let memoId = this.props.memo.id;

			$.ajax({
				url: `/admin/memos/${memoId}`,
				type: "DELETE",
				dataType: "JSON",
				context: "this",			
				success: (data) => {
					this.props.handleDelete(memoId);				
				}
			})
		}
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