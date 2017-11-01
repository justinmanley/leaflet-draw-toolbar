L.Toolbar2.EditAction.Popup.Delete = L.Toolbar2.Action.extend({
	options: {
		toolbarIcon: { className: 'leaflet-draw-edit-remove' }
	},

	initialize: function (map, shape, options) {
		this._map = map;
		this._shape = shape;

		L.Toolbar2.Action.prototype.initialize.call(this, map, options);
	},

	addHooks: function () {
		var map = this._map;

		map.removeLayer(this._shape);
		map.removeLayer(this.toolbar);

		console.log('firing draw:deleted');
		map.fire(L.Draw.Event.DELETED, { layers: L.layerGroup([this._shape]) });
	}
});
