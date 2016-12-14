let Memos = React.createClass({
	getInitialState() {
		return {
			memos: []
		}
	},

	componentWillMount() {
		$.ajax({
			url: `/admin/students/${this.props.student.id}/memos`,
			type: "GET",
			dataType: "JSON",
			context: "this",
			success: (data) => {
				this.setState({memos: data});
			}
		})
	},

	handleSubmit(data){
		let memos = React.addons.update(this.state.memos, {$push: [data]});    		
		this.setState({memos: memos});
	},

	handleDelete(memoId){
		let memos = this.state.memos.filter(function(memo) {      
      return memo.id !== memoId;
    });
    this.setState({memos: memos});
	},

	scrollToLastMemo(){
		setTimeout(function () {
      let memoContainer = document.getElementById("memo-container");
			memoContainer.scrollTop = memoContainer.scrollHeight;
    }, 0)
	},

	memos(){
		let memos = this.state.memos.map((memo) => {
			return <Memo memo={memo} key={memo.id} handleDelete={this.handleDelete}/>
		});

		if (memos.length > 0) {
			return memos;	
		} else {
			return <h6 className="text-center">記録されているメモはありません。</h6>
		}
		
	},

	render(){		
		return (
			<div>
				<div className="memo-container" id="memo-container">
					{this.memos()}
				</div>

				<MemoForm student={this.props.student} handleSubmit={this.handleSubmit}/>
			</div>
		)		
	},	

	componentDidMount() {
		this.scrollToLastMemo();
	},

	componentDidUpdate() {
		this.scrollToLastMemo();	
	},

})