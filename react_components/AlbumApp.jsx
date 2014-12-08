/** @jsx React.DOM */
var React = require('react');
var AlbumList = require('./AlbumList.jsx');
var $ = require('jquery');

module.exports = React.createClass({
	getInitialState: function () { 
		return null;
	},
	componentDidMount: function() {
		$.get('/albums', function(result) {
			if (this.isMounted()) {
				this.setState({
					albumData: result
				});
			}
		}.bind(this));
	},
	render: function () {
		return (
			<div>
				<h2>Albums</h2>
				<div class="albumcontainer">
					<AlbumList>{this.state.albumData}</AlbumList>
				</div>
			</div>
		);
	}
});
