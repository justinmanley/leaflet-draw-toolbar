L.Toolbar2.EditAction.Control.Delete = L.Toolbar2.EditAction.fromHandler(
    L.EditToolbar.Delete,
    {
        className: 'leaflet-draw-edit-remove',
        tooltip: 'Remove features'
    },
    new L.Toolbar2({
        actions: [
            L.Toolbar2.EditAction.Control.Save,
            L.Toolbar2.EditAction.Control.Undo
        ]
    })
);
