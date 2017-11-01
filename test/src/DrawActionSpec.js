describe("L.Toolbar2.DrawAction", function() {
    describe(".fromHandler", function() {
        it("Should return a L.Toolbar2.Action", function() {
            // Mocks
            var map = { _panes: {} },
                layer = {};

            var Action = L.Toolbar2.DrawAction.fromHandler(L.Draw.Polyline, { 
                    className: 'leaflet-draw-draw-polyline',
                    tooltip: 'Draw a polyline'
                }, new L.Toolbar2()),
                action = new Action(map, layer);

            expect(action).to.be.an.instanceof(L.Toolbar2.Action);
            expect(action.options.subToolbar).to.be.an.instanceof(L.Toolbar2);
        });
    });
});
