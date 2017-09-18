L.Toolbar2.DrawAction = {
    fromHandler: function(Handler, defaultToolbarIcon, defaultSubToolbar) {
        return L.ToolbarAction.extend({
            options: {
                toolbarIcon: L.extend({}, L.ToolbarAction.prototype.options.toolbarIcon, defaultToolbarIcon),
                subToolbar: defaultSubToolbar ? defaultSubToolbar : L.ToolbarAction.prototype.options.subToolbar
            },

            initialize: function(map, options) {
                var action = this;

                this._handler = new Handler(map, options);
                this._handler.on('disabled', function() {
                    action.disable();
                });

                L.ToolbarAction.prototype.initialize.call(this, options);
            },

            enable: function(e) {
                this._handler.enable();
                L.ToolbarAction.prototype.enable.call(this, e);
            },

            disable: function() {
                this._handler.disable();
                L.ToolbarAction.prototype.disable.call(this);
            },

            setOptions: function(options) {
                this._handler.setOptions(options);
                L.ToolbarAction.prototype.setOptions.call(this, options);
            },
        });
    }
};
