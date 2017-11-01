L.Toolbar2.DrawToolbar = L.Toolbar2.Control.extend({
	options: {
		actions: [
			L.Toolbar2.DrawAction.Polygon,
			L.Toolbar2.DrawAction.Polyline,
			L.Toolbar2.DrawAction.Marker,
			L.Toolbar2.DrawAction.Rectangle,
			L.Toolbar2.DrawAction.Circle
		],
		className: 'leaflet-draw-toolbar'
	}
});
