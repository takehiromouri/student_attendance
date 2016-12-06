let Confirmation = React.createClass({

	handleConfirm(){
		this.props.handleConfirm();
	},

	handleCancel(){
		this.props.handleCancel();
	},

	render(){
		return (
			<div className="reveal text-center" id="confirmation" data-reveal data-close-on-click="true" data-animation-in="scale-in-up" data-animation-out="scale-out-down">
				<h3>{this.props.studentNumber}</h3>
			  <h1 style={{"fontWeight": "600"}}>{this.props.studentName}</h1>			  
			  
			  <h3>お間違いないでしょうか？</h3>
			  <div className="button-group">
				  <button className="button" onClick={this.handleConfirm}>OK</button>
				  <button className="button warning" onClick={this.handleCancel}>キャンセル</button>
				 </div>
			</div>
		)
	}
});
