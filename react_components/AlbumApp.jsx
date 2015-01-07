/** @jsx React.DOM */
var React = require('react');
var Reflux = require('reflux');
var AlbumList = require('./AlbumList.jsx');
var AlbumStore = require('../reflux_components/AlbumStore');
var AlbumAction = require('../reflux_components/AlbumAction');
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
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div styleName="margin-bottom: 10px">
							<span styleName="margin-right: 10px;">
								<a href="http://kalleforsberg.se">kalleforsberg.se</a>
							</span>
							<span styleName="margin-left: 20px;">
								<a href="logout.php">Logout</a>
							</span>
						</div>
						<h2>Albums</h2>
						<div id="albumactions" styleNameName="margin-top: 15px">
							<span styleNameName="margin-right: 10px;">
								<a href="newalbum.php" styleNameName="font-weight: bold;">(+) Create new album</a>
							</span>
						</div>
						
						<AlbumList albumData={this.state.albumData}></AlbumList>
						<div id="albumactions" styleNameName="margin-top: 15px">
							<span styleNameName="margin-right: 10px;">
								<a href="newalbum.php" styleNameName="font-weight: bold;">(+) Create new album</a>
							</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
});
