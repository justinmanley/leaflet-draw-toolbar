LeafletToolbar.DrawAction.Polyline = LeafletToolbar.DrawAction.fromHandler(
    L.Draw.Polyline,
    {
        className: 'leaflet-draw-draw-polyline',
        tooltip: L.drawLocal.draw.toolbar.buttons.polyline
    },
	new LeafletToolbar({ actions: [LeafletToolbar.DrawAction.Cancel, LeafletToolbar.DrawAction.RemoveLastPoint] })
);

// Support for DrawAction.RemoveLastPoint.
LeafletToolbar.DrawAction.Polyline.prototype.deleteLastVertex = function() {
    this._handler.deleteLastVertex();
}
