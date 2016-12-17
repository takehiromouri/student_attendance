let AdminStudents = React.createClass({
	getInitialState() {
		return {
			students: [],
			searched: false
		};		
	},

	componentDidUpdate(prevProps, prevState) {
		$(".button").css({"background": this.props.primaryButtonColor});
		$("button.warning").css({"background": this.props.secondaryButtonColor});
		$("button.alert").css({"background": this.props.thirdButtonColor});
		$(".title-bar").css({"background": this.props.topColor});
		$(".footer").css({"background": this.props.footerColor});	
	},

	handleSubmit(data){		
		this.setState({students: data, searched: true})
	},

	render(){
		return (
			<div>
				<AdminSearchForm handleSubmit={this.handleSubmit}/>
				<AdminSearchResults students={this.state.students} searched={this.state.searched} 
														primaryButtonColor={this.props.primaryButtonColor}
														secondaryButtonColor={this.props.secondaryButtonColor}
														thirdButtonColor={this.props.thirdButtonColor}
														footerColor={this.props.footerColor}
														topColor={this.props.topColor}/>
			</div>
		)
	}
});
