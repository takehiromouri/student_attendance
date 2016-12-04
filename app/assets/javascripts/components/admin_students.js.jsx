let AdminStudents = React.createClass({
	getInitialState() {
		return {
			student: {},
			searched: false
		};		
	},

	handleSubmit(data){
		this.setState({student: data, searched: true})
	},

	render(){
		return (
			<div>
				<SearchForm handleSubmit={this.handleSubmit}/>
				<AdminSearchResults student={this.state.student} searched={this.state.searched}/>
			</div>
		)
	}
});
