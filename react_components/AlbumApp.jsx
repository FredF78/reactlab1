/** @jsx React.DOM */
var React = require('react');
var AlbumList = require('./AlbumList.jsx');
var $ = require('jquery');

module.exports = React.createClass({
	getInitialState: function () {
		// TODO: plug in flux framework and dispatch an action against the store to fetch data
		return {
			'albumData': [{
				id: 0, title: 'firstalbum'
			},{
				id: 1, title: 'secondalbum'
			}]
		};
	},
	componentDidMount: function() {
	},
	render: function () {
		return (
			<div>
				<h2>Albums</h2>
				<div class="albumcontainer">
					<AlbumList albumData={this.state.albumData}></AlbumList>
				</div>
			</div>
		);
	}
});
