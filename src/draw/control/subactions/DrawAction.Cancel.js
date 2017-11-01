L.Toolbar2.DrawAction.Cancel = L.Toolbar2.Action.extend({
	options: {
		toolbarIcon: { html: 'Cancel' }
	},

	initialize: function (map, drawing) {
		this.drawing = drawing;
		L.Toolbar2.Action.prototype.initialize.call(this);
	},

	addHooks: function () {
		this.drawing.disable();
		this.disable();
	}
});
