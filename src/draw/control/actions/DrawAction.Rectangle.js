LeafletToolbar.DrawAction.Rectangle = LeafletToolbar.DrawAction.fromHandler(
    L.Draw.Rectangle,
    {
        className: 'leaflet-draw-draw-rectangle',
        tooltip: L.drawLocal.draw.toolbar.buttons.rectangle
    },
	new LeafletToolbar({ actions: [LeafletToolbar.DrawAction.Cancel] })
);
