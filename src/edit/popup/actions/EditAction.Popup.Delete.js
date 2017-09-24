LeafletToolbar.EditAction.Popup.Delete = LeafletToolbar.ToolbarAction.extend({
	options: {
		toolbarIcon: { className: 'leaflet-draw-edit-remove' }
	},

	initialize: function (map, shape, options) {
		this._map = map;
		this._shape = shape;

		LeafletToolbar.ToolbarAction.prototype.initialize.call(this, map, options);
	},

	addHooks: function () {
		this._map.removeLayer(this._shape);
		this._map.removeLayer(this.toolbar);
	}
});
