L.Toolbar2.DrawAction.Circle = L.Toolbar2.DrawAction.fromHandler(
    L.Draw.Circle,
    {
        className: 'leaflet-draw-draw-circle',
        tooltip: L.drawLocal.draw.toolbar.buttons.circle
    },
    new L.Toolbar2({ actions: [L.Toolbar2.DrawAction.Cancel] })
);
