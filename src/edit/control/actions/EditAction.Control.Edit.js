L.Toolbar2.EditAction.Control.Edit = L.Toolbar2.EditAction.fromHandler(
    L.EditToolbar.Edit,
    {
        className: 'leaflet-draw-edit-edit',
        tooltip: 'Edit features'
    },
    new L.Toolbar2({
        actions: [
            L.Toolbar2.EditAction.Control.Save,
            L.Toolbar2.EditAction.Control.Undo
        ]
    })
);
