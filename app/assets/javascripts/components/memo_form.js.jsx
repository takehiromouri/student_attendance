let MemoForm = React.createClass({
	getInitialState() {
		return {
			content: ""
		}
	},

	componentDidMount() {
		$("textarea").resizable();
	},

	handleChange(e){
		let content = e.target.value;
		this.setState({content: content});
	},

	handleSubmit(e){
		e.preventDefault();

		$.ajax({
			url: `/admin/students/${this.props.student.id}/memos`,
			type: "POST",
			dataType: "JSON",
			context: "this",
			data: {
				memo: {
					content: this.state.content	
				}
			},
			success: (data) => {
				this.props.handleSubmit(data);				
				this.setState({content: ""});
			}
		})
	},

  render(){
  	return (
  		<form>
  			<textarea name="content" value={this.state.content} onChange={this.handleChange} placeholder="メモ内容" rows="5"/>
  			<button onClick={this.handleSubmit} className="button">メモする</button>
  		</form>
  	)
  }
})