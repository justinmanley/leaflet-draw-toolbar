// TODO: Write better tests.
describe("L.Toolbar2.DrawToolbar", function() {
    beforeEach(function() {
        var container = document.createElement('div');
        container.id = 'map';
        document.body.appendChild(container);
    });

    // Extremely simple test to ensure that the DrawToolbar and its actions can
    // be instantiated and added to the map without throwing any exceptions.
    it("Can be added to the map", function() {
        var map = L.map('map'),
            toolbar = new L.Toolbar2.DrawToolbar().addTo(map);
        expect(toolbar).to.be.an.instanceof(L.Toolbar2.Control);
    });

    afterEach(function() {
        var container = document.getElementById('map');
        container.parentNode.removeChild(container);
    });
});
