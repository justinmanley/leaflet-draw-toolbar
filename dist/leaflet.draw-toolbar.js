(function(window, document, undefined) {

"use strict";

LeafletToolbar.DrawAction = {
    fromHandler: function(Handler, defaultToolbarIcon, defaultSubToolbar) {
        return LeafletToolbar.ToolbarAction.extend({
            options: {
                toolbarIcon: L.extend({}, LeafletToolbar.ToolbarAction.prototype.options.toolbarIcon, defaultToolbarIcon),
                subToolbar: defaultSubToolbar ? defaultSubToolbar : LeafletToolbar.ToolbarAction.prototype.options.subToolbar
            },

            initialize: function(map, options) {
                var action = this;

                this._handler = new Handler(map, options);
                this._handler.on('disabled', function() {
                    action.disable();
                });

                LeafletToolbar.ToolbarAction.prototype.initialize.call(this, options);
            },

            enable: function(e) {
                this._handler.enable();
                LeafletToolbar.ToolbarAction.prototype.enable.call(this, e);
            },

            disable: function() {
                this._handler.disable();
                LeafletToolbar.ToolbarAction.prototype.disable.call(this);
            },

            setOptions: function(options) {
                this._handler.setOptions(options);
                LeafletToolbar.ToolbarAction.prototype.setOptions.call(this, options);
            },
        });
    }
};

LeafletToolbar.DrawAction.Cancel = LeafletToolbar.ToolbarAction.extend({
	options: {
		toolbarIcon: { html: 'Cancel' }
	},

	initialize: function (map, drawing) {
		this.drawing = drawing;
		LeafletToolbar.ToolbarAction.prototype.initialize.call(this);
	},

	addHooks: function () {
		this.drawing.disable();
		this.disable();
	}
});

// NOTE: This subaction is only appropriate for actions which have a deleteLastVertex method.
LeafletToolbar.DrawAction.RemoveLastPoint = LeafletToolbar.ToolbarAction.extend({
	options: {
		toolbarIcon: { html: L.drawLocal.draw.toolbar.undo.text }
	},

	initialize: function (map, drawing) {
		this.drawing = drawing;
		LeafletToolbar.ToolbarAction.prototype.initialize.call(this);
	},

	addHooks: function () {
		this.drawing.deleteLastVertex();
		this.disable();
	}
});

LeafletToolbar.DrawAction.Circle = LeafletToolbar.DrawAction.fromHandler(
    L.Draw.Circle,
    {
        className: 'leaflet-draw-draw-circle',
        tooltip: L.drawLocal.draw.toolbar.buttons.circle
    },
    new LeafletToolbar({ actions: [LeafletToolbar.DrawAction.Cancel] })
);

LeafletToolbar.DrawAction.Marker = LeafletToolbar.DrawAction.fromHandler(
    L.Draw.Marker,
    {
        className: 'leaflet-draw-draw-marker',
        tooltip: L.drawLocal.draw.toolbar.buttons.marker
    },
	new LeafletToolbar({ actions: [LeafletToolbar.DrawAction.Cancel] })
);

LeafletToolbar.DrawAction.Polygon = LeafletToolbar.DrawAction.fromHandler(
    L.Draw.Polygon,
    {
        className: 'leaflet-draw-draw-polygon',
        tooltip: L.drawLocal.draw.toolbar.buttons.polygon
    },
	new LeafletToolbar({ actions: [LeafletToolbar.DrawAction.Cancel, LeafletToolbar.DrawAction.RemoveLastPoint] })
);

// Support for DrawAction.RemoveLastPoint.
LeafletToolbar.DrawAction.Polygon.prototype.deleteLastVertex = function() {
    this._handler.deleteLastVertex();
}

LeafletToolbar.DrawAction.Polyline = LeafletToolbar.DrawAction.fromHandler(
    L.Draw.Polyline,
    {
        className: 'leaflet-draw-draw-polyline',
        tooltip: L.drawLocal.draw.toolbar.buttons.polyline
    },
	new LeafletToolbar({ actions: [LeafletToolbar.DrawAction.Cancel, LeafletToolbar.DrawAction.RemoveLastPoint] })
);

// Support for DrawAction.RemoveLastPoint.
LeafletToolbar.DrawAction.Polyline.prototype.deleteLastVertex = function() {
    this._handler.deleteLastVertex();
}

LeafletToolbar.DrawAction.Rectangle = LeafletToolbar.DrawAction.fromHandler(
    L.Draw.Rectangle,
    {
        className: 'leaflet-draw-draw-rectangle',
        tooltip: L.drawLocal.draw.toolbar.buttons.rectangle
    },
	new LeafletToolbar({ actions: [LeafletToolbar.DrawAction.Cancel] })
);

LeafletToolbar.DrawToolbar = LeafletToolbar.Control.extend({
	options: {
		actions: [
			LeafletToolbar.DrawAction.Polygon,
			LeafletToolbar.DrawAction.Polyline,
			LeafletToolbar.DrawAction.Marker,
			LeafletToolbar.DrawAction.Rectangle,
			LeafletToolbar.DrawAction.Circle
		],
		className: 'leaflet-draw-toolbar'
	}
});

LeafletToolbar.EditToolbar = {};

LeafletToolbar.EditAction = {
    fromHandler: function(Handler, defaultToolbarIcon, defaultSubToolbar) {
        return LeafletToolbar.ToolbarAction.extend({
            options: {
                toolbarIcon: L.extend({}, LeafletToolbar.ToolbarAction.prototype.options.toolbarIcon, defaultToolbarIcon),
                subToolbar: defaultSubToolbar ? defaultSubToolbar : LeafletToolbar.ToolbarAction.prototype.options.subToolbar
            },

            initialize: function(map, featureGroup, options) {
                var action = this;

                options = options || {};
                options.featureGroup = featureGroup;

                this._handler = new Handler(map, options);
                this._handler.on('disabled', function() {
                    action.disable();
                });

                LeafletToolbar.ToolbarAction.prototype.initialize.call(this, options);
            },

            enable: function(e) {
                this._handler.enable();
                LeafletToolbar.ToolbarAction.prototype.enable.call(this, e);
            },

            disable: function() {
                this._handler.disable();
                LeafletToolbar.ToolbarAction.prototype.disable.call(this);
            },

            setOptions: function(options) {
                this._handler.setOptions(options);
                LeafletToolbar.ToolbarAction.prototype.setOptions.call(this, options);
            },

            // For the undo subaction.
            revertLayers: function() {
                this._handler.revertLayers();
            },

            // For the save subaction.
            save: function() {
                this._handler.save();
            }
        });
    }
};

LeafletToolbar.EditAction.Control = {};

LeafletToolbar.EditAction.Control.Save = LeafletToolbar.ToolbarAction.extend({
    options: {
        toolbarIcon: { html: 'Save' }
    },
    initialize: function(map, featureGroup, editing) {
        this.editing = editing;
        LeafletToolbar.ToolbarAction.prototype.initialize.call(this);
    },
    addHooks: function() {
        this.editing.save();
        this.editing.disable();
    }
});

LeafletToolbar.EditAction.Control.Undo = LeafletToolbar.ToolbarAction.extend({
    options: {
        toolbarIcon: { html: 'Undo' }
    },
    initialize: function(map, featureGroup, editing) {
        this.editing = editing;
        LeafletToolbar.ToolbarAction.prototype.initialize.call(this);
    },
    addHooks: function() {
        this.editing.revertLayers();
        this.editing.disable();
    }
});


LeafletToolbar.EditAction.Control.Edit = LeafletToolbar.EditAction.fromHandler(
    L.EditToolbar.Edit,
    {
        className: 'leaflet-draw-edit-edit',
        tooltip: 'Edit features'
    },
    new LeafletToolbar({
        actions: [
            LeafletToolbar.EditAction.Control.Save,
            LeafletToolbar.EditAction.Control.Undo
        ]
    })
);

LeafletToolbar.EditAction.Control.Delete = LeafletToolbar.EditAction.fromHandler(
    L.EditToolbar.Delete,
    {
        className: 'leaflet-draw-edit-remove',
        tooltip: 'Remove features'
    },
    new LeafletToolbar({
        actions: [
            LeafletToolbar.EditAction.Control.Save,
            LeafletToolbar.EditAction.Control.Undo
        ]
    })
);

LeafletToolbar.EditToolbar.Control = LeafletToolbar.Control.extend({
    options: {
        actions: [
            LeafletToolbar.EditAction.Control.Edit,
            LeafletToolbar.EditAction.Control.Delete
        ],
        className: 'leaflet-draw-toolbar',
    }
});

LeafletToolbar.EditAction.Popup = {};

LeafletToolbar.EditAction.Popup.Edit = LeafletToolbar.ToolbarAction.extend({
	options: {
		toolbarIcon: { className: 'leaflet-draw-edit-edit' }
	},

	initialize: function (map, shape, options) {
		this._map = map;

		this._shape = shape;
		this._shape.options.editing = this._shape.options.editing || {};

		LeafletToolbar.ToolbarAction.prototype.initialize.call(this, map, options);
	},

	enable: function () {
		var map = this._map,
			shape = this._shape;

		shape.editing.enable();
		map.removeLayer(this.toolbar);
		
		map.on('click', function () {
			shape.editing.disable();
		});
	}
});

LeafletToolbar.EditAction.Popup.Delete = LeafletToolbar.ToolbarAction.extend({
	options: {
		toolbarIcon: { className: 'leaflet-draw-edit-remove' }
	},

	initialize: function (map, shape, options) {
		this._map = map;
		this._shape = shape;

		LeafletToolbar.ToolbarAction.prototype.initialize.call(this, map, options);
	},

	addHooks: function () {
		this._map.removeLayer(this._shape);
		this._map.removeLayer(this.toolbar);
	}
});

LeafletToolbar.EditToolbar.Popup = LeafletToolbar.Popup.extend({
	options: {
		actions: [
			LeafletToolbar.EditAction.Popup.Edit,
			LeafletToolbar.EditAction.Popup.Delete
		],
        className: 'leaflet-draw-toolbar'
	},

	onAdd: function (map) {
		var shape = this._arguments[1];

		if (shape instanceof L.Marker) {
			/* Adjust the toolbar position so that it doesn't cover the marker. */
			this.options.anchor = L.point(shape.options.icon.options.popupAnchor);
		}

		LeafletToolbar.Popup.prototype.onAdd.call(this, map);
	}
});


})(window, document);