L.Toolbar2.DrawAction.Polygon = L.Toolbar2.DrawAction.fromHandler(
    L.Draw.Polygon,
    {
        className: 'leaflet-draw-draw-polygon',
        tooltip: L.drawLocal.draw.toolbar.buttons.polygon
    },
	new L.Toolbar2({ actions: [L.Toolbar2.DrawAction.Cancel, L.Toolbar2.DrawAction.RemoveLastPoint] })
);

// Support for DrawAction.RemoveLastPoint.
L.Toolbar2.DrawAction.Polygon.prototype.deleteLastVertex = function() {
    this._handler.deleteLastVertex();
}
