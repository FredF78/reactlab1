/** @jsx React.DOM */
var React = require('react');
module.exports = React.createClass({
	render: function () {
		return (
			<div className="row top-buffer" id={this.props.id}>
				<span className="col-md-6">{this.props.name}</span>
				<span className="col-md-1"><a className="btn btn-primary btn-xs" href={'albums/' + this.props.id}>Edit</a></span>
				<span className="col-md-1">
					<input data-id={this.props.id} value="Delete" name={'deletebuttonalbum' + this.props.id} id={'deletebuttonalbum' + this.props.id} className="btn btn-danger btn-xs" />
				</span>
			</div>
		)
	}
});