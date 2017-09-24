LeafletToolbar.DrawAction.Circle = LeafletToolbar.DrawAction.fromHandler(
    L.Draw.Circle,
    {
        className: 'leaflet-draw-draw-circle',
        tooltip: L.drawLocal.draw.toolbar.buttons.circle
    },
    new LeafletToolbar({ actions: [LeafletToolbar.DrawAction.Cancel] })
);
