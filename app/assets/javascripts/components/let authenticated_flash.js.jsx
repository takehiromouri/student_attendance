let AuthenticatedFlash = React.createClass({

	render(){
		return (
			<div className="reveal text-center" id="authenticated" data-reveal data-close-on-click="true" data-animation-in="scale-in-up" data-animation-out="scale-out-down">
			  <h1 style={{"fontWeight": "600"}}><i className="fi-check"></i> 認証できました。</h1>
			  <h3>生徒番号を入力して下さい。</h3>
			</div>
		)
	}
});
