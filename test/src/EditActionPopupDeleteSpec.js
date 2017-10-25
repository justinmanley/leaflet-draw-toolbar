describe("LeafletToolbar.EditAction.Popup.Delete", function() {
    beforeEach(function() {
        var container = document.createElement('div');
        container.id = 'map';
        document.body.appendChild(container);
    });

	it("Should fire a draw:deleted event when completed.", function(done) {
		var map = L.map('map'),
			shape = L.circle([0, 0], { radius: 1 }),
			deleteAction = new LeafletToolbar.EditAction.Popup.Delete(map, shape);

		// Necessary so that the popup delete action can remove its toolbar.
		deleteAction.toolbar = new LeafletToolbar();

		map.on('draw:deleted', function(evt) {
			expect(evt.layers.hasLayer(shape)).to.equal(true);
			done();
		});

		deleteAction.enable();
	});

    afterEach(function() {
        var container = document.getElementById('map');
        container.parentNode.removeChild(container);
    });
});