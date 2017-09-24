describe("LeafletToolbar.EditAction", function() {
    describe(".fromHandler", function() {
        it("Should return a LeafletToolbar.ToolbarAction", function() {
            // Mocks
            var map = { _panes: {} },
                featureGroup = new L.FeatureGroup(),
                options = {};

            var Action = LeafletToolbar.EditAction.fromHandler(L.EditToolbar.Edit, {
                    className: 'leaflet-draw-edit-edit',
                    tooltip: 'Edit features'
                }, new LeafletToolbar()),
                action = new Action(map, featureGroup, options);

            expect(action).to.be.an.instanceof(LeafletToolbar.ToolbarAction);
            expect(action.options.subToolbar).to.be.an.instanceof(LeafletToolbar);
        });
    });
});
