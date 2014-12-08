/** @jsx React.DOM */
var React = require('react');
var Album = require('./Album.jsx');
module.exports = React.createClass({
	render: function () {
		var albums = this.props.data.map(function (album) {
			return (
				<Album id={album.id} title={album.title}>
				</Album>
			);
		});

		return (
			<div class="albumlist">
				{albums}
			</div>
		)
	}
});