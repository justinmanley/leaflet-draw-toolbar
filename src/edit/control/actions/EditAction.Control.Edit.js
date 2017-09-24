LeafletToolbar.EditAction.Control.Edit = LeafletToolbar.EditAction.fromHandler(
    L.EditToolbar.Edit,
    {
        className: 'leaflet-draw-edit-edit',
        tooltip: 'Edit features'
    },
    new LeafletToolbar({
        actions: [
            LeafletToolbar.EditAction.Control.Save,
            LeafletToolbar.EditAction.Control.Undo
        ]
    })
);
