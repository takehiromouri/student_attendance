let FormButtons = React.createClass({
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
				<div className="medium-4 medium-offset-4 small-12 columns">
					<table className="attendance-form">
						<tbody>
							<tr>
								<td onClick={this.handleUpdate}><div className="number">1</div></td>
								<td onClick={this.handleUpdate}><div className="number">2</div></td>
								<td onClick={this.handleUpdate}><div className="number">3</div></td>
							</tr>

							<tr>
								<td onClick={this.handleUpdate}><div className="number">4</div></td>
								<td onClick={this.handleUpdate}><div className="number">5</div></td>
								<td onClick={this.handleUpdate}><div className="number">6</div></td>
							</tr>

							<tr>
								<td onClick={this.handleUpdate}><div className="number">7</div></td>
								<td onClick={this.handleUpdate}><div className="number">8</div></td>
								<td onClick={this.handleUpdate}><div className="number">9</div></td>
							</tr>

							<tr>
								<td onClick={this.handleUpdate}><div className="number">0</div></td>						
								<td onClick={this.handleDeleteChar}><div className="number">消</div></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		)
	}
});
