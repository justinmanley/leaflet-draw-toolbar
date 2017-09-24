LeafletToolbar.DrawToolbar = LeafletToolbar.Control.extend({
	options: {
		actions: [
			LeafletToolbar.DrawAction.Polygon,
			LeafletToolbar.DrawAction.Polyline,
			LeafletToolbar.DrawAction.Marker,
			LeafletToolbar.DrawAction.Rectangle,
			LeafletToolbar.DrawAction.Circle
		],
		className: 'leaflet-draw-toolbar'
	}
});
