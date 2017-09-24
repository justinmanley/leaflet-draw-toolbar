LeafletToolbar.EditToolbar.Control = LeafletToolbar.Control.extend({
    options: {
        actions: [
            LeafletToolbar.EditAction.Control.Edit,
            LeafletToolbar.EditAction.Control.Delete
        ],
        className: 'leaflet-draw-toolbar',
    }
});
