let ParentStudents = React.createClass({
	getInitialState() {
		return {
			student: {},
			searched: false
		};		
	},

	handleSubmit(data){
		this.setState({student: data, searched: true})
	},

	searchResults(){
		
	},

	render(){
		return (
			<div>
				<SearchForm handleSubmit={this.handleSubmit}/>
				<ParentSearchResults student={this.state.student} searched={this.state.searched}/>
			</div>
		)
	}
});
