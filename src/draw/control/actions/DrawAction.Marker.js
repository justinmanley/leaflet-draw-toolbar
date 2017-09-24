LeafletToolbar.DrawAction.Marker = LeafletToolbar.DrawAction.fromHandler(
    L.Draw.Marker,
    {
        className: 'leaflet-draw-draw-marker',
        tooltip: L.drawLocal.draw.toolbar.buttons.marker
    },
	new LeafletToolbar({ actions: [LeafletToolbar.DrawAction.Cancel] })
);
