/** @jsx React.DOM */
var React = require('react');
var Album = require('./Album.jsx');
module.exports = React.createClass({
	render: function () {
		if (this.props.albumData) {
			var albums = this.props.albumData.map(function (album) {
				return (
					<Album id={album.id} name={album.name}>
					</Album>
				);
			});
		} else {
			var albums = [];
		}

		return (
			<div className="albumlist">
				{albums}
			</div>
		)
		
	}
});