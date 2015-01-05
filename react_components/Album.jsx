/** @jsx React.DOM */
var React = require('react');
module.exports = React.createClass({
	render: function () {
		return (
			<div className="row top-buffer" id={this.props.id}>
				<span className="col-md-6">{this.props.name}</span>
				<span className="col-md-1"><a className="btn edit" href={'albums/' + this.props.id}>Edit</a></span>
				<span className="col-md-1">
					<input data-id={this.props.id} value="delete album" name={'deletebuttonalbum' + this.props.id} id={'deletebuttonalbum' + this.props.id} className="btn delete" />
				</span>
			</div>
		)
	}
});