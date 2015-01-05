var Reflux = require('reflux');
var $ = require('jquery');
var AlbumAction = require('./AlbumAction');

module.exports = Reflux.createStore({
	init: function() {
		this.data = [];
		this.listenTo(AlbumAction, this.loadData);
	},
	loadData: function () {
		var that = this;
		$.get('http://localhost:3000/albums').done(function(data) {
			that.loadCallback(data);
		});
	},
	loadCallback: function (data) {
		this.trigger(data);
	}
});