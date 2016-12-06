let ErrorMessage = React.createClass({
	handleClose(e){
		e.preventDefault();

		this.props.handleClose();
	},

	render(){
		return (
			<div className="callout alert" id="error-callout" data-closable>
			  {this.props.message}
			  <button className="close-button" onClick={this.handleClose}>
			    <span aria-hidden="true">&times;</span>
			  </button>
			</div>    
		)
	}
})