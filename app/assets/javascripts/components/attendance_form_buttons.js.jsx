let AttendanceFormButtons = React.createClass({
	handleUpdate(e){
		let number = $(e.target).text();

		this.props.handleUpdate(number);
	},

	handleDeleteChar(e){
		this.props.handleDeleteChar();
	},

	render(){
		return (
			<div className="row">
				<div className="medium-6 medium-offset-3 small-12 columns">
					<table className="attendance-form">
						<tbody>
							<tr>
								<td onClick={this.handleUpdate}>1</td>
								<td onClick={this.handleUpdate}>2</td>
								<td onClick={this.handleUpdate}>3</td>
							</tr>

							<tr>
								<td onClick={this.handleUpdate}>4</td>
								<td onClick={this.handleUpdate}>5</td>
								<td onClick={this.handleUpdate}>6</td>
							</tr>

							<tr>
								<td onClick={this.handleUpdate}>7</td>
								<td onClick={this.handleUpdate}>8</td>
								<td onClick={this.handleUpdate}>9</td>
							</tr>

							<tr>
								<td onClick={this.handleUpdate}>0</td>						
								<td onClick={this.handleDeleteChar}>消</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		)
	}
});
