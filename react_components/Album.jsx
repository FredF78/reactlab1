/** @jsx React.DOM */
var React = require('react');
module.exports = React.createClass({
	render: function () {
		return (
			<div class="row top-buffer" id={this.props.albumid}>
				<span class="col-md-6">{this.props.title}</span>
				<span class="col-md-1"><a class="btn edit" href={'albums/' + this.props.id}>Edit</a></span>
				<span class="col-md-1">
					<input data-id={this.props.albumid} value="delete album" name={'deletebuttonalbum' + this.props.albumid} id={'deletebuttonalbum' + this.props.albumid} class="btn delete" />
				</span>
			</div>
		)
	}
});