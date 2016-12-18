let FormButtons = React.createClass({
	handleUpdate(e){
		let number = $(e.target).text();

		this.props.handleUpdate(number);
	},

	componentDidMount() {
		$(".attendance-form td").css({"background": this.props.formButtonColor});
		$(".attendance-form td:hover").css({"background": this.props.formSubmitButtonColor});
		$("#submit-form").css({"background": this.props.formSubmitButtonColor});

		let that = this;
		var old_color;

		$(".attendance-form td").bind('mouseover', function() {
			old_color = $(this).css("background");
			$(this)[0].style.background = that.props.formSubmitButtonColor;			
		});

		$(".attendance-form td").bind('mouseout', function () {
    	$(this)[0].style.background = old_color;
    });
	},

	componentDidUpdate() {
		$(".attendance-form td").css({"background": this.props.formButtonColor});
		$(".attendance-form td:hover").css({"background": this.props.formSubmitButtonColor});
		$("#submit-form").css({"background": this.props.formSubmitButtonColor});
	},

	handleDeleteChar(e){
		this.props.handleDeleteChar();
	},

	handleSubmit(e){
		this.props.handleSubmit(e);
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
								<td onClick={this.handleSubmit} id="submit-form" style={{"background": "#da3116"}}><div className="number">入</div></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		)
	}
});
