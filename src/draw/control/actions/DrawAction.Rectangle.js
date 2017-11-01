L.Toolbar2.DrawAction.Rectangle = L.Toolbar2.DrawAction.fromHandler(
    L.Draw.Rectangle,
    {
        className: 'leaflet-draw-draw-rectangle',
        tooltip: L.drawLocal.draw.toolbar.buttons.rectangle
    },
	new L.Toolbar2({ actions: [L.Toolbar2.DrawAction.Cancel] })
);
