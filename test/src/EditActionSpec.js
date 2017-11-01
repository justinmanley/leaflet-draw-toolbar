describe("L.Toolbar2.EditAction", function() {
    describe(".fromHandler", function() {
        it("Should return a L.Toolbar2.Action", function() {
            // Mocks
            var map = { _panes: {} },
                featureGroup = new L.FeatureGroup(),
                options = {};

            var Action = L.Toolbar2.EditAction.fromHandler(L.EditToolbar.Edit, {
                    className: 'leaflet-draw-edit-edit',
                    tooltip: 'Edit features'
                }, new L.Toolbar2()),
                action = new Action(map, featureGroup, options);

            expect(action).to.be.an.instanceof(L.Toolbar2.Action);
            expect(action.options.subToolbar).to.be.an.instanceof(L.Toolbar2);
        });
    });
});
