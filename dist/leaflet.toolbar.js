(function(window, document, undefined) {

"use strict";

L.Toolbar2.DrawAction = {};

L.Toolbar2.DrawToolbar = {};

L.DrawToolbar.Control = L.Toolbar2.Control.extend({
	options: {
		actions: [
			L.Draw.Polygon,
			L.Draw.Polyline,
			L.Draw.Marker,
			L.Draw.Rectangle,
			L.Draw.Circle
		],
		className: 'leaflet-draw-toolbar'
	}
});

/* Include sub-toolbars. */
L.setOptions(L.Toolbar2.DrawAction.Polygon.prototype, {
	subToolbar: new L.Toolbar2({ actions: [L.Toolbar2.DrawAction.Cancel, L.Toolbar2.DrawAction.RemoveLastPoint] })
});

L.setOptions(L.Toolbar2.DrawAction.Polyline.prototype, {
	subToolbar: new L.Toolbar2({ actions: [L.Toolbar2.DrawAction.Cancel, L.Toolbar2.DrawAction.RemoveLastPoint] })
});

L.setOptions(L.Toolbar2.DrawAction.Marker.prototype, {
	subToolbar: new L.Toolbar2({ actions: [L.Toolbar2.DrawAction.Cancel] })
});

L.setOptions(L.Toolbar2.DrawAction.Rectangle.prototype, {
	subToolbar: new L.Toolbar2({ actions: [L.Toolbar2.DrawAction.Cancel] })
});

L.setOptions(L.Toolbar2.DrawAction.Circle.prototype, {
	subToolbar: new L.Toolbar2({ actions: [L.Toolbar2.DrawAction.Cancel] })
});

L.Toolbar2.DrawAction.Cancel = L.ToolbarAction.extend({
	options: {
		toolbarIcon: { html: 'Cancel' }
	},

	initialize: function (map, drawing) {
		this.drawing = drawing;
		L.ToolbarAction.prototype.initialize.call(this);
	},

	addHooks: function () {
		this.drawing.disable();
		this.disable();
	}
});

L.Toolbar2.DrawAction.RemoveLastPoint = L.ToolbarAction.extend({
	options: {
		toolbarIcon: { html: L.drawLocal.draw.toolbar.undo.text }
	},

	initialize: function (map, drawing) {
		this.drawing = drawing;
		L.ToolbarAction.prototype.initialize.call(this);
	},

	addHooks: function () {
		this.drawing.deleteLastVertex();
		this.disable();
	}
});


})(window, document);