LeafletToolbar.EditAction.Control.Delete = LeafletToolbar.EditAction.fromHandler(
    L.EditToolbar.Delete,
    {
        className: 'leaflet-draw-edit-remove',
        tooltip: 'Remove features'
    },
    new LeafletToolbar({
        actions: [
            LeafletToolbar.EditAction.Control.Save,
            LeafletToolbar.EditAction.Control.Undo
        ]
    })
);
