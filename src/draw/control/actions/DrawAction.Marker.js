L.Toolbar2.DrawAction.Marker = L.Toolbar2.DrawAction.fromHandler(
    L.Draw.Marker,
    {
        className: 'leaflet-draw-draw-marker',
        tooltip: L.drawLocal.draw.toolbar.buttons.marker
    },
	new L.Toolbar2({ actions: [L.Toolbar2.DrawAction.Cancel] })
);
