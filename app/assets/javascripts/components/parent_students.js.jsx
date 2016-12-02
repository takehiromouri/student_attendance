let ParentStudents = React.createClass({
	getInitialState() {
		return {
			students: [],
			searched: false
		};		
	},

	handleSubmit(data){
		this.setState({students: data, searched: true})
	},

	render(){
		return (
			<div>
				<SearchForm handleSubmit={this.handleSubmit}/>
				<ParentSearchResults students={this.state.students} searched={this.state.searched}/>
			</div>
		)
	}
});
