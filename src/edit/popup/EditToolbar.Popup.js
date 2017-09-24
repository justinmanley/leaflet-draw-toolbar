LeafletToolbar.EditToolbar.Popup = LeafletToolbar.Popup.extend({
	options: {
		actions: [
			LeafletToolbar.EditAction.Popup.Edit,
			LeafletToolbar.EditAction.Popup.Delete
		],
        className: 'leaflet-draw-toolbar'
	},

	onAdd: function (map) {
		var shape = this._arguments[1];

		if (shape instanceof L.Marker) {
			/* Adjust the toolbar position so that it doesn't cover the marker. */
			this.options.anchor = L.point(shape.options.icon.options.popupAnchor);
		}

		LeafletToolbar.Popup.prototype.onAdd.call(this, map);
	}
});
