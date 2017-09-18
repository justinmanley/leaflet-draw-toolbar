describe("L.Toolbar2.DrawAction", function() {
    describe(".fromHandler", function() {
        it("Should return an L.ToolbarAction", function() {
            // Mocks
            var map = { _panes: {} },
                layer = {};

            var Action = L.Toolbar2.DrawAction.fromHandler(L.Draw.Polyline, "test-class", new L.Toolbar2()),
                action = new Action(map, layer);

            expect(action).to.be.an.instanceof(L.ToolbarAction);
            expect(action.options.subToolbar).to.be.an.instanceof(L.Toolbar2);
        });
    });
});
