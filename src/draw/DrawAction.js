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
