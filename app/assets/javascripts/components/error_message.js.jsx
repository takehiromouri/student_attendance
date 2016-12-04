let ErrorMessage = React.createClass({
	render(){
		return (
			<div className="callout alert" data-closable>
			  {this.props.message}
			  <button className="close-button" aria-label="Dismiss alert" type="button" data-close>
			    <span aria-hidden="true">&times;</span>
			  </button>
			</div>    
		)
	}
})