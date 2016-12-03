let Result = React.createClass({

	render(){
		let date = new Date();
		let month = date.getMonth() + 1;

		return (
			<div className="reveal" id="result" data-reveal data-close-on-click="true" data-animation-in="spin-in" data-animation-out="spin-out">
			  <h1>{this.props.studentName}</h1>			  
			  <h1>{month}月の出席回数</h1>
			  <h1>{this.props.record}</h1>
			  <button className="close-button" data-close aria-label="Close modal" type="button">
			    <span aria-hidden="true">&times;</span>
			  </button>
			</div>
		)
	}
});
