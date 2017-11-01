// NOTE: This subaction is only appropriate for actions which have a deleteLastVertex method.
L.Toolbar2.DrawAction.RemoveLastPoint = L.Toolbar2.Action.extend({
	options: {
		toolbarIcon: { html: L.drawLocal.draw.toolbar.undo.text }
	},

	initialize: function (map, drawing) {
		this.drawing = drawing;
		L.Toolbar2.Action.prototype.initialize.call(this);
	},

	addHooks: function () {
		this.drawing.deleteLastVertex();
		this.disable();
	}
});
