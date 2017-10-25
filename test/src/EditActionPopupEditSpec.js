describe("LeafletToolbar.EditAction.Popup.Edit", function() {
    beforeEach(function() {
        var container = document.createElement('div');
        container.id = 'map';
        document.body.appendChild(container);
    });

	it("Should fire a draw:edited event when completed.", function(done) {
		var map = L.map('map'),
			shape = L.circle([0, 0], { radius: 1 }),
			editAction = new LeafletToolbar.EditAction.Popup.Edit(map, shape);

		// Necessary so that the popup delete action can remove its toolbar.
		editAction.toolbar = new LeafletToolbar();

		map.on('draw:edited', function(evt) {
			expect(evt.layers.hasLayer(shape)).to.equal(true);
			done();
		});

		editAction.enable();
		shape.edited = true;
		editAction.save();
	});

    afterEach(function() {
        var container = document.getElementById('map');
        container.parentNode.removeChild(container);
    });
});
