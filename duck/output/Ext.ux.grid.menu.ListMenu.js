Ext.data.JsonP.Ext_ux_grid_menu_ListMenu({"tagname":"class","name":"Ext.ux.grid.menu.ListMenu","extends":"Ext.menu.Menu","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"code_type":"ext_define","inheritable":false,"inheritdoc":null,"meta":{},"id":"class-Ext.ux.grid.menu.ListMenu","members":{"cfg":[{"name":"labelField","tagname":"cfg","owner":"Ext.ux.grid.menu.ListMenu","meta":{},"id":"cfg-labelField"},{"name":"loadOnShow","tagname":"cfg","owner":"Ext.ux.grid.menu.ListMenu","meta":{},"id":"cfg-loadOnShow"},{"name":"paramPrefix","tagname":"cfg","owner":"Ext.ux.grid.menu.ListMenu","meta":{},"id":"cfg-paramPrefix"},{"name":"single","tagname":"cfg","owner":"Ext.ux.grid.menu.ListMenu","meta":{},"id":"cfg-single"}],"property":[],"method":[{"name":"checkChange","tagname":"method","owner":"Ext.ux.grid.menu.ListMenu","meta":{},"id":"method-checkChange"},{"name":"getSelected","tagname":"method","owner":"Ext.ux.grid.menu.ListMenu","meta":{},"id":"method-getSelected"},{"name":"onLoad","tagname":"method","owner":"Ext.ux.grid.menu.ListMenu","meta":{"private":true},"id":"method-onLoad"},{"name":"setSelected","tagname":"method","owner":"Ext.ux.grid.menu.ListMenu","meta":{"private":true},"id":"method-setSelected"},{"name":"show","tagname":"method","owner":"Ext.ux.grid.menu.ListMenu","meta":{},"id":"method-show"}],"event":[{"name":"checkchange","tagname":"event","owner":"Ext.ux.grid.menu.ListMenu","meta":{},"id":"event-checkchange"}],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"files":[{"filename":"ListMenu.js","href":"ListMenu.html#Ext-ux-grid-menu-ListMenu"}],"html_meta":{},"component":false,"superclasses":["Ext.menu.Menu"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.menu.Menu<div class='subclass '><strong>Ext.ux.grid.menu.ListMenu</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/ListMenu.html#Ext-ux-grid-menu-ListMenu' target='_blank'>ListMenu.js</a></div></pre><div class='doc-contents'><p>This is a supporting class for <a href=\"#!/api/Ext.ux.grid.filter.ListFilter\" rel=\"Ext.ux.grid.filter.ListFilter\" class=\"docClass\">Ext.ux.grid.filter.ListFilter</a>.\nAlthough not listed as configuration options for this class, this class\nalso accepts all configuration options from <a href=\"#!/api/Ext.ux.grid.filter.ListFilter\" rel=\"Ext.ux.grid.filter.ListFilter\" class=\"docClass\">Ext.ux.grid.filter.ListFilter</a>.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-labelField' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.grid.menu.ListMenu'>Ext.ux.grid.menu.ListMenu</span><br/><a href='source/ListMenu.html#Ext-ux-grid-menu-ListMenu-cfg-labelField' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.grid.menu.ListMenu-cfg-labelField' class='name expandable'>labelField</a><span> : String</span></div><div class='description'><div class='short'>Defaults to 'text'. ...</div><div class='long'><p>Defaults to 'text'.</p>\n<p>Defaults to: <code>&quot;text&quot;</code></p></div></div></div><div id='cfg-loadOnShow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.grid.menu.ListMenu'>Ext.ux.grid.menu.ListMenu</span><br/><a href='source/ListMenu.html#Ext-ux-grid-menu-ListMenu-cfg-loadOnShow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.grid.menu.ListMenu-cfg-loadOnShow' class='name expandable'>loadOnShow</a><span> : Boolean</span></div><div class='description'><div class='short'>Defaults to true. ...</div><div class='long'><p>Defaults to true.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-paramPrefix' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.grid.menu.ListMenu'>Ext.ux.grid.menu.ListMenu</span><br/><a href='source/ListMenu.html#Ext-ux-grid-menu-ListMenu-cfg-paramPrefix' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.grid.menu.ListMenu-cfg-paramPrefix' class='name not-expandable'>paramPrefix</a><span> : String</span></div><div class='description'><div class='short'><p>Defaults to 'Loading...'.</p>\n</div><div class='long'><p>Defaults to 'Loading...'.</p>\n</div></div></div><div id='cfg-single' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.grid.menu.ListMenu'>Ext.ux.grid.menu.ListMenu</span><br/><a href='source/ListMenu.html#Ext-ux-grid-menu-ListMenu-cfg-single' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.grid.menu.ListMenu-cfg-single' class='name expandable'>single</a><span> : Boolean</span></div><div class='description'><div class='short'>Specify true to group all items in this list into a single-select\nradio button group. ...</div><div class='long'><p>Specify true to group all items in this list into a single-select\nradio button group. Defaults to false.</p>\n<p>Defaults to: <code>false</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-checkChange' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.grid.menu.ListMenu'>Ext.ux.grid.menu.ListMenu</span><br/><a href='source/ListMenu.html#Ext-ux-grid-menu-ListMenu-method-checkChange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.grid.menu.ListMenu-method-checkChange' class='name expandable'>checkChange</a>( <span class='pre'>Object item, Object checked</span> )</div><div class='description'><div class='short'>Handler for the 'checkchange' event from an check item in this menu ...</div><div class='long'><p>Handler for the 'checkchange' event from an check item in this menu</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : Object<div class='sub-desc'><p>Ext.menu.CheckItem</p>\n</div></li><li><span class='pre'>checked</span> : Object<div class='sub-desc'><p>The checked value that was set</p>\n</div></li></ul></div></div></div><div id='method-getSelected' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.grid.menu.ListMenu'>Ext.ux.grid.menu.ListMenu</span><br/><a href='source/ListMenu.html#Ext-ux-grid-menu-ListMenu-method-getSelected' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.grid.menu.ListMenu-method-getSelected' class='name expandable'>getSelected</a>( <span class='pre'></span> ) : Array</div><div class='description'><div class='short'>Get the selected items. ...</div><div class='long'><p>Get the selected items.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p>selected</p>\n</div></li></ul></div></div></div><div id='method-onLoad' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.grid.menu.ListMenu'>Ext.ux.grid.menu.ListMenu</span><br/><a href='source/ListMenu.html#Ext-ux-grid-menu-ListMenu-method-onLoad' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.grid.menu.ListMenu-method-onLoad' class='name expandable'>onLoad</a>( <span class='pre'>Object store, Object records</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>records</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setSelected' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.grid.menu.ListMenu'>Ext.ux.grid.menu.ListMenu</span><br/><a href='source/ListMenu.html#Ext-ux-grid-menu-ListMenu-method-setSelected' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.grid.menu.ListMenu-method-setSelected' class='name expandable'>setSelected</a>( <span class='pre'>Object value</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-show' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.grid.menu.ListMenu'>Ext.ux.grid.menu.ListMenu</span><br/><a href='source/ListMenu.html#Ext-ux-grid-menu-ListMenu-method-show' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.grid.menu.ListMenu-method-show' class='name expandable'>show</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Lists will initially show a 'loading' item while the data is retrieved from the store. ...</div><div class='long'><p>Lists will initially show a 'loading' item while the data is retrieved from the store.\nIn some cases the loaded data will result in a list that goes off the screen to the\nright (as placement calculations were done with the loading item). This adapter will\nallow show to be called with no arguments to show with the previous arguments and\nthus recalculate the width and potentially hang the menu from the left.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-checkchange' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.grid.menu.ListMenu'>Ext.ux.grid.menu.ListMenu</span><br/><a href='source/ListMenu.html#Ext-ux-grid-menu-ListMenu-event-checkchange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.grid.menu.ListMenu-event-checkchange' class='name expandable'>checkchange</a>( <span class='pre'>Object item, Object checked, Object eOpts</span> )</div><div class='description'><div class='short'>Fires when there is a change in checked items from this list ...</div><div class='long'><p>Fires when there is a change in checked items from this list</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : Object<div class='sub-desc'><p>Ext.menu.CheckItem</p>\n</div></li><li><span class='pre'>checked</span> : Object<div class='sub-desc'><p>The checked value that was set</p>\n</div></li><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n\n\n\n</div></li></ul></div></div></div></div></div></div></div>"});