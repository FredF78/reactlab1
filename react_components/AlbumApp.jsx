/** @jsx React.DOM */
var React = require('react');
var Reflux = require('reflux');
var AlbumList = require('./AlbumList.jsx');
var AlbumStore = require('./AlbumStore');
var AlbumAction = require('./AlbumAction');
var $ = require('jquery');

module.exports = React.createClass({
	onDataLoaded: function(albumData) {
        this.setState({
            albumData: albumData
        });
    },
	getInitialState: function () {
		AlbumAction();
		this.albumData = AlbumStore.listen(this.onDataLoaded);
		return {};
	},
	componentDidMount: function() {
	},
	render: function () {
		return (
			<div>
				<h2>Albums</h2>
				<div className="albumcontainer">
					<AlbumList albumData={this.state.albumData}></AlbumList>
				</div>
			</div>
		);
	}
});
