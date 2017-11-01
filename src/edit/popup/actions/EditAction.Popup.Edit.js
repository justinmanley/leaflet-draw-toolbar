L.Toolbar2.EditAction.Popup.Edit = L.Toolbar2.Action.extend({
	options: {
		toolbarIcon: { className: 'leaflet-draw-edit-edit' }
	},

	initialize: function (map, shape, options) {
		this._map = map;

		this._shape = shape;
		this._shape.options.editing = this._shape.options.editing || {};

		L.Toolbar2.Action.prototype.initialize.call(this, map, options);
	},

	enable: function () {
		var map = this._map,
			shape = this._shape;

		shape.editing.enable();
		map.removeLayer(this.toolbar);
		
		map.on('click', function () {
			this.save();
			shape.editing.disable();
		}, this);
	},

	save: function() {
		var map = this._map,
			shape = this._shape;

		if (shape.edited) {
			map.fire(L.Draw.Event.EDITED, { layers: L.layerGroup([shape]) });
		}
		shape.edited = false;
	}
});
