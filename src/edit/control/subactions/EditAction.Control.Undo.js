L.Toolbar2.EditAction.Control.Undo = L.ToolbarAction.extend({
    options: {
        toolbarIcon: { html: 'Undo' }
    },
    initialize: function(map, featureGroup, editing) {
        this.editing = editing;
        L.ToolbarAction.prototype.initialize.call(this);
    },
    addHooks: function() {
        this.editing.revertLayers();
        this.editing.disable();
    }
});

