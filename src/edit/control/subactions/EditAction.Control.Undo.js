L.Toolbar2.EditAction.Control.Undo = L.Toolbar2.Action.extend({
    options: {
        toolbarIcon: { html: 'Undo' }
    },
    initialize: function(map, featureGroup, editing) {
        this.editing = editing;
        L.Toolbar2.Action.prototype.initialize.call(this);
    },
    addHooks: function() {
        this.editing.revertLayers();
        this.editing.disable();
    }
});

