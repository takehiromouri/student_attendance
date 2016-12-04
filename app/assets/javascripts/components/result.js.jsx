let Result = React.createClass({

	render(){
		let date = new Date();
		let month = date.getMonth() + 1;

		return (
			<div className="reveal text-center" id="result" data-reveal data-close-on-click="true" data-animation-in="scale-in-up" data-animation-out="scale-out-down">
			  <h1 style={{"fontWeight": "600"}}>{this.props.studentName}</h1>			  
			  <h3>{month}月の出席回数</h3>
			  <h1 style={{"color": "red", "fontSize": "60px", "fontWeight": "600"}}>{this.props.record}</h1>			  
			</div>
		)
	}
});
