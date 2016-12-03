let Result = React.createClass({

	render(){
		let date = new Date();
		let month = date.getMonth() + 1;

		return (
			<div className="reveal" id="result" data-reveal data-close-on-click="true" data-animation-in="scale-in-up" data-animation-out="scale-out-down">
			  <h1>{this.props.studentName}</h1>			  
			  <h1>{month}月の出席回数</h1>
			  <h1>{this.props.record}</h1>			  
			</div>
		)
	}
});
