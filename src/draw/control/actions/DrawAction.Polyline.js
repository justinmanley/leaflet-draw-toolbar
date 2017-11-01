L.Toolbar2.DrawAction.Polyline = L.Toolbar2.DrawAction.fromHandler(
    L.Draw.Polyline,
    {
        className: 'leaflet-draw-draw-polyline',
        tooltip: L.drawLocal.draw.toolbar.buttons.polyline
    },
	new L.Toolbar2({ actions: [L.Toolbar2.DrawAction.Cancel, L.Toolbar2.DrawAction.RemoveLastPoint] })
);

// Support for DrawAction.RemoveLastPoint.
L.Toolbar2.DrawAction.Polyline.prototype.deleteLastVertex = function() {
    this._handler.deleteLastVertex();
}
