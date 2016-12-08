let AdminStudents = React.createClass({
	getInitialState() {
		return {
			students: [],
			searched: false
		};		
	},

	handleSubmit(data){
		this.setState({student: data, searched: true})
	},

	render(){
		return (
			<div>
				<AdminSearchForm handleSubmit={this.handleSubmit}/>
				<AdminSearchResults students={this.state.students} searched={this.state.searched}/>
			</div>
		)
	}
});
