L.Toolbar2.EditToolbar.Control = L.Toolbar2.Control.extend({
    options: {
        actions: [
            L.Toolbar2.EditAction.Control.Edit,
            L.Toolbar2.EditAction.Control.Delete
        ],
        className: 'leaflet-draw-toolbar',
    }
});
