/** @jsx React.DOM */
var React = require('react');
var AlbumList = require('./AlbumList.jsx');
var $ = require('jquery');

module.exports = React.createClass({
	getInitialState: function () { 
		return null;
	},
	componentDidMount: function() {
		// TODO: plug in flux framework and dispatch an action against the store to fetch data
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
