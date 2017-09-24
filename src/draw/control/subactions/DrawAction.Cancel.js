LeafletToolbar.DrawAction.Cancel = LeafletToolbar.ToolbarAction.extend({
	options: {
		toolbarIcon: { html: 'Cancel' }
	},

	initialize: function (map, drawing) {
		this.drawing = drawing;
		LeafletToolbar.ToolbarAction.prototype.initialize.call(this);
	},

	addHooks: function () {
		this.drawing.disable();
		this.disable();
	}
});
