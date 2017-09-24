LeafletToolbar.EditAction.Control.Undo = LeafletToolbar.ToolbarAction.extend({
    options: {
        toolbarIcon: { html: 'Undo' }
    },
    initialize: function(map, featureGroup, editing) {
        this.editing = editing;
        LeafletToolbar.ToolbarAction.prototype.initialize.call(this);
    },
    addHooks: function() {
        this.editing.revertLayers();
        this.editing.disable();
    }
});

