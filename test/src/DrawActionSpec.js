describe("LeafletToolbar.DrawAction", function() {
    describe(".fromHandler", function() {
        it("Should return a LeafletToolbar.ToolbarAction", function() {
            // Mocks
            var map = { _panes: {} },
                layer = {};

            var Action = LeafletToolbar.DrawAction.fromHandler(L.Draw.Polyline, { 
                    className: 'leaflet-draw-draw-polyline',
                    tooltip: 'Draw a polyline'
                }, new LeafletToolbar()),
                action = new Action(map, layer);

            expect(action).to.be.an.instanceof(LeafletToolbar.ToolbarAction);
            expect(action.options.subToolbar).to.be.an.instanceof(LeafletToolbar);
        });
    });
});
