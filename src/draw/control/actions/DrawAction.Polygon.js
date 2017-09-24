LeafletToolbar.DrawAction.Polygon = LeafletToolbar.DrawAction.fromHandler(
    L.Draw.Polygon,
    {
        className: 'leaflet-draw-draw-polygon',
        tooltip: L.drawLocal.draw.toolbar.buttons.polygon
    },
	new LeafletToolbar({ actions: [LeafletToolbar.DrawAction.Cancel, LeafletToolbar.DrawAction.RemoveLastPoint] })
);

// Support for DrawAction.RemoveLastPoint.
LeafletToolbar.DrawAction.Polygon.prototype.deleteLastVertex = function() {
    this._handler.deleteLastVertex();
}
