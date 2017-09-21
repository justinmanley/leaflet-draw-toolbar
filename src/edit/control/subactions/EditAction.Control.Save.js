L.Toolbar2.EditAction.Control.Save = L.ToolbarAction.extend({
    options: {
        toolbarIcon: { html: 'Save' }
    },
    initialize: function(map, featureGroup, editing) {
        this.editing = editing;
        L.ToolbarAction.prototype.initialize.call(this);
    },
    addHooks: function() {
        this.editing.save();
        this.editing.disable();
    }
});
