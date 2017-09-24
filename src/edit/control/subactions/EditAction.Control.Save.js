LeafletToolbar.EditAction.Control.Save = LeafletToolbar.ToolbarAction.extend({
    options: {
        toolbarIcon: { html: 'Save' }
    },
    initialize: function(map, featureGroup, editing) {
        this.editing = editing;
        LeafletToolbar.ToolbarAction.prototype.initialize.call(this);
    },
    addHooks: function() {
        this.editing.save();
        this.editing.disable();
    }
});
