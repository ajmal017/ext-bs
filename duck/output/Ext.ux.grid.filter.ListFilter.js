Ext.data.JsonP.Ext_ux_grid_filter_ListFilter({"tagname":"class","name":"Ext.ux.grid.filter.ListFilter","extends":"Ext.ux.grid.filter.Filter","mixins":[],"alternateClassNames":[],"aliases":{"gridfilter":["list"]},"singleton":false,"requires":[],"uses":[],"code_type":"ext_define","inheritable":false,"inheritdoc":null,"meta":{},"id":"class-Ext.ux.grid.filter.ListFilter","members":{"cfg":[{"name":"active","tagname":"cfg","owner":"Ext.ux.grid.filter.Filter","meta":{},"id":"cfg-active"},{"name":"dataIndex","tagname":"cfg","owner":"Ext.ux.grid.filter.Filter","meta":{},"id":"cfg-dataIndex"},{"name":"options","tagname":"cfg","owner":"Ext.ux.grid.filter.ListFilter","meta":{},"id":"cfg-options"},{"name":"phpMode","tagname":"cfg","owner":"Ext.ux.grid.filter.ListFilter","meta":{},"id":"cfg-phpMode"},{"name":"store","tagname":"cfg","owner":"Ext.ux.grid.filter.ListFilter","meta":{},"id":"cfg-store"},{"name":"updateBuffer","tagname":"cfg","owner":"Ext.ux.grid.filter.Filter","meta":{},"id":"cfg-updateBuffer"}],"property":[{"name":"active","tagname":"property","owner":"Ext.ux.grid.filter.Filter","meta":{},"id":"property-active"},{"name":"menu","tagname":"property","owner":"Ext.ux.grid.filter.Filter","meta":{},"id":"property-menu"}],"method":[{"name":"createMenu","tagname":"method","owner":"Ext.ux.grid.filter.ListFilter","meta":{"private":true},"id":"method-createMenu"},{"name":"destroy","tagname":"method","owner":"Ext.ux.grid.filter.Filter","meta":{},"id":"method-destroy"},{"name":"fireUpdate","tagname":"method","owner":"Ext.ux.grid.filter.Filter","meta":{"private":true},"id":"method-fireUpdate"},{"name":"getSerialArgs","tagname":"method","owner":"Ext.ux.grid.filter.ListFilter","meta":{"private":true},"id":"method-getSerialArgs"},{"name":"getValue","tagname":"method","owner":"Ext.ux.grid.filter.ListFilter","meta":{"private":true},"id":"method-getValue"},{"name":"init","tagname":"method","owner":"Ext.ux.grid.filter.ListFilter","meta":{"private":true},"id":"method-init"},{"name":"isActivatable","tagname":"method","owner":"Ext.ux.grid.filter.ListFilter","meta":{"private":true},"id":"method-isActivatable"},{"name":"onCheckChange","tagname":"method","owner":"Ext.ux.grid.filter.ListFilter","meta":{"private":true},"id":"method-onCheckChange"},{"name":"serialize","tagname":"method","owner":"Ext.ux.grid.filter.Filter","meta":{},"id":"method-serialize"},{"name":"setActive","tagname":"method","owner":"Ext.ux.grid.filter.Filter","meta":{},"id":"method-setActive"},{"name":"setValue","tagname":"method","owner":"Ext.ux.grid.filter.ListFilter","meta":{"private":true},"id":"method-setValue"},{"name":"validateRecord","tagname":"method","owner":"Ext.ux.grid.filter.ListFilter","meta":{},"id":"method-validateRecord"}],"event":[{"name":"activate","tagname":"event","owner":"Ext.ux.grid.filter.Filter","meta":{},"id":"event-activate"},{"name":"deactivate","tagname":"event","owner":"Ext.ux.grid.filter.Filter","meta":{},"id":"event-deactivate"},{"name":"serialize","tagname":"event","owner":"Ext.ux.grid.filter.Filter","meta":{},"id":"event-serialize"},{"name":"update","tagname":"event","owner":"Ext.ux.grid.filter.Filter","meta":{},"id":"event-update"}],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"files":[{"filename":"ListFilter.js","href":"ListFilter.html#Ext-ux-grid-filter-ListFilter"}],"html_meta":{},"component":false,"superclasses":["Ext.util.Observable","Ext.ux.grid.filter.Filter"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.util.Observable<div class='subclass '><a href='#!/api/Ext.ux.grid.filter.Filter' rel='Ext.ux.grid.filter.Filter' class='docClass'>Ext.ux.grid.filter.Filter</a><div class='subclass '><strong>Ext.ux.grid.filter.ListFilter</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/ListFilter.html#Ext-ux-grid-filter-ListFilter' target='_blank'>ListFilter.js</a></div></pre><div class='doc-contents'><p>List filters are able to be preloaded/backed by an Ext.data.Store to load\ntheir options the first time they are shown. ListFilter utilizes the\n<a href=\"#!/api/Ext.ux.grid.menu.ListMenu\" rel=\"Ext.ux.grid.menu.ListMenu\" class=\"docClass\">Ext.ux.grid.menu.ListMenu</a> component.</p>\n\n\n<p>Although not shown here, this class accepts all configuration options\nfor <a href=\"#!/api/Ext.ux.grid.menu.ListMenu\" rel=\"Ext.ux.grid.menu.ListMenu\" class=\"docClass\">Ext.ux.grid.menu.ListMenu</a>.</p>\n\n\n\n\n<p><b><u>Example Usage:</u></b></p>\n\n\n<pre><code>var filters = Ext.create('Ext.ux.grid.GridFilters', {\n    ...\n    filters: [{\n        type: 'list',\n        dataIndex: 'size',\n        phpMode: true,\n        // options will be used as data to implicitly creates an ArrayStore\n        options: ['extra small', 'small', 'medium', 'large', 'extra large']\n    }]\n});\n</code></pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-active' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.grid.filter.Filter' rel='Ext.ux.grid.filter.Filter' class='defined-in docClass'>Ext.ux.grid.filter.Filter</a><br/><a href='source/Filter.html#Ext-ux-grid-filter-Filter-cfg-active' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.grid.filter.Filter-cfg-active' class='name expandable'>active</a><span> : Boolean</span></div><div class='description'><div class='short'>Indicates the initial status of the filter (defaults to false). ...</div><div class='long'><p>Indicates the initial status of the filter (defaults to false).</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-dataIndex' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.grid.filter.Filter' rel='Ext.ux.grid.filter.Filter' class='defined-in docClass'>Ext.ux.grid.filter.Filter</a><br/><a href='source/Filter.html#Ext-ux-grid-filter-Filter-cfg-dataIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.grid.filter.Filter-cfg-dataIndex' class='name expandable'>dataIndex</a><span> : String</span></div><div class='description'><div class='short'>The Ext.data.Store dataIndex of the field this filter represents. ...</div><div class='long'><p>The Ext.data.Store dataIndex of the field this filter represents.\nThe dataIndex does not actually have to exist in the store.</p>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='cfg-options' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.grid.filter.ListFilter'>Ext.ux.grid.filter.ListFilter</span><br/><a href='source/ListFilter.html#Ext-ux-grid-filter-ListFilter-cfg-options' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.grid.filter.ListFilter-cfg-options' class='name expandable'>options</a><span> : Array</span></div><div class='description'><div class='short'>data to be used to implicitly create a data store\nto back this list when the data source is local. ...</div><div class='long'><p><code>data</code> to be used to implicitly create a data store\nto back this list when the data source is <b>local</b>. If the\ndata for the list is remote, use the <code><a href=\"#!/api/Ext.ux.grid.filter.ListFilter-cfg-store\" rel=\"Ext.ux.grid.filter.ListFilter-cfg-store\" class=\"docClass\">store</a></code>\nconfig instead.</p>\n\n\n<br><p>Each item within the provided array may be in one of the\n\n\n<p>following formats:</p></p>\n\n<div class=\"mdetail-params\"><ul>\n<li><b>Array</b> :\n<pre><code>options: [\n    [11, 'extra small'],\n    [18, 'small'],\n    [22, 'medium'],\n    [35, 'large'],\n    [44, 'extra large']\n]\n</code></pre>\n</li>\n<li><b>Object</b> :\n<pre><code>labelField: 'name', // override default of 'text'\noptions: [\n    {id: 11, name:'extra small'},\n    {id: 18, name:'small'},\n    {id: 22, name:'medium'},\n    {id: 35, name:'large'},\n    {id: 44, name:'extra large'}\n]\n</code></pre>\n</li>\n<li><b>String</b> :\n<pre><code>options: ['extra small', 'small', 'medium', 'large', 'extra large']\n</code></pre>\n</li>\n\n</div></div></div><div id='cfg-phpMode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.grid.filter.ListFilter'>Ext.ux.grid.filter.ListFilter</span><br/><a href='source/ListFilter.html#Ext-ux-grid-filter-ListFilter-cfg-phpMode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.grid.filter.ListFilter-cfg-phpMode' class='name expandable'>phpMode</a><span> : Boolean</span></div><div class='description'><div class='short'>Adjust the format of this filter. ...</div><div class='long'><p>Adjust the format of this filter. Defaults to false.</p>\n\n\n<br><p>When GridFilters <code> = false</code> (default):</p>\n\n\n<pre><code>// phpMode == false (default):\nfilter[0][data][type] list\nfilter[0][data][value] value1\nfilter[0][data][value] value2\nfilter[0][field] prod\n\n// phpMode == true:\nfilter[0][data][type] list\nfilter[0][data][value] value1, value2\nfilter[0][field] prod\n</code></pre>\n\n\n<p>When GridFilters <code> = true</code>:</p>\n\n<pre><code>// phpMode == false (default):\nfilter : [{\"type\":\"list\",\"value\":[\"small\",\"medium\"],\"field\":\"size\"}]\n\n// phpMode == true:\nfilter : [{\"type\":\"list\",\"value\":\"small,medium\",\"field\":\"size\"}]\n</code></pre>\n\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-store' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.grid.filter.ListFilter'>Ext.ux.grid.filter.ListFilter</span><br/><a href='source/ListFilter.html#Ext-ux-grid-filter-ListFilter-cfg-store' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.grid.filter.ListFilter-cfg-store' class='name expandable'>store</a><span> : Ext.data.Store</span></div><div class='description'><div class='short'>The Ext.data.Store this list should use as its data source\nwhen the data source is remote. ...</div><div class='long'><p>The Ext.data.Store this list should use as its data source\nwhen the data source is <b>remote</b>. If the data for the list\nis local, use the <code><a href=\"#!/api/Ext.ux.grid.filter.ListFilter-cfg-options\" rel=\"Ext.ux.grid.filter.ListFilter-cfg-options\" class=\"docClass\">options</a></code> config instead.</p>\n</div></div></div><div id='cfg-updateBuffer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.grid.filter.Filter' rel='Ext.ux.grid.filter.Filter' class='defined-in docClass'>Ext.ux.grid.filter.Filter</a><br/><a href='source/Filter.html#Ext-ux-grid-filter-Filter-cfg-updateBuffer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.grid.filter.Filter-cfg-updateBuffer' class='name expandable'>updateBuffer</a><span> : Number</span></div><div class='description'><div class='short'>Number of milliseconds to wait after user interaction to fire an update. ...</div><div class='long'><p>Number of milliseconds to wait after user interaction to fire an update. Only supported\nby filters: 'list', 'numeric', and 'string'. Defaults to 500.</p>\n<p>Defaults to: <code>500</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-active' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.grid.filter.Filter' rel='Ext.ux.grid.filter.Filter' class='defined-in docClass'>Ext.ux.grid.filter.Filter</a><br/><a href='source/Filter.html#Ext-ux-grid-filter-Filter-property-active' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.grid.filter.Filter-property-active' class='name expandable'>active</a><span> : Boolean</span></div><div class='description'><div class='short'>True if this filter is active. ...</div><div class='long'><p>True if this filter is active.  Use setActive() to alter after configuration.</p>\n</div></div></div><div id='property-menu' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.grid.filter.Filter' rel='Ext.ux.grid.filter.Filter' class='defined-in docClass'>Ext.ux.grid.filter.Filter</a><br/><a href='source/Filter.html#Ext-ux-grid-filter-Filter-property-menu' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.grid.filter.Filter-property-menu' class='name expandable'>menu</a><span> : Ext.menu.Menu</span></div><div class='description'><div class='short'>The filter configuration menu that will be installed into the filter submenu of a column menu. ...</div><div class='long'><p>The filter configuration menu that will be installed into the filter submenu of a column menu.</p>\n<p>Defaults to: <code>null</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-createMenu' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.grid.filter.ListFilter'>Ext.ux.grid.filter.ListFilter</span><br/><a href='source/ListFilter.html#Ext-ux-grid-filter-ListFilter-method-createMenu' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.grid.filter.ListFilter-method-createMenu' class='name expandable'>createMenu</a>( <span class='pre'>Object config</span> ) : Ext.menu.Menu<strong class='private signature'>private</strong></div><div class='description'><div class='short'>@override\nCreates the Menu for this filter. ...</div><div class='long'><p>@override\nCreates the Menu for this filter.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>Filter configuration</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ext.menu.Menu</span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.ux.grid.filter.Filter-method-createMenu' rel='Ext.ux.grid.filter.Filter-method-createMenu' class='docClass'>Ext.ux.grid.filter.Filter.createMenu</a></p></div></div></div><div id='method-destroy' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.grid.filter.Filter' rel='Ext.ux.grid.filter.Filter' class='defined-in docClass'>Ext.ux.grid.filter.Filter</a><br/><a href='source/Filter.html#Ext-ux-grid-filter-Filter-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.grid.filter.Filter-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Destroys this filter by purging any event listeners, and removing any menus. ...</div><div class='long'><p>Destroys this filter by purging any event listeners, and removing any menus.</p>\n</div></div></div><div id='method-fireUpdate' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.grid.filter.Filter' rel='Ext.ux.grid.filter.Filter' class='defined-in docClass'>Ext.ux.grid.filter.Filter</a><br/><a href='source/Filter.html#Ext-ux-grid-filter-Filter-method-fireUpdate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.grid.filter.Filter-method-fireUpdate' class='name expandable'>fireUpdate</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getSerialArgs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.grid.filter.ListFilter'>Ext.ux.grid.filter.ListFilter</span><br/><a href='source/ListFilter.html#Ext-ux-grid-filter-ListFilter-method-getSerialArgs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.grid.filter.ListFilter-method-getSerialArgs' class='name expandable'>getSerialArgs</a>( <span class='pre'></span> ) : Object/Array<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Template method that is to get and return serialized filter data for\ntransmission to the server. ...</div><div class='long'><p>Template method that is to get and return serialized filter data for\ntransmission to the server.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object/Array</span><div class='sub-desc'><p>An object or collection of objects containing\nkey value pairs representing the current configuration of the filter.</p>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.ux.grid.filter.Filter-method-getSerialArgs' rel='Ext.ux.grid.filter.Filter-method-getSerialArgs' class='docClass'>Ext.ux.grid.filter.Filter.getSerialArgs</a></p></div></div></div><div id='method-getValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.grid.filter.ListFilter'>Ext.ux.grid.filter.ListFilter</span><br/><a href='source/ListFilter.html#Ext-ux-grid-filter-ListFilter-method-getValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.grid.filter.ListFilter-method-getValue' class='name expandable'>getValue</a>( <span class='pre'></span> ) : String<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Template method that is to get and return the value of the filter. ...</div><div class='long'><p>Template method that is to get and return the value of the filter.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The value of this filter</p>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.ux.grid.filter.Filter-method-getValue' rel='Ext.ux.grid.filter.Filter-method-getValue' class='docClass'>Ext.ux.grid.filter.Filter.getValue</a></p></div></div></div><div id='method-init' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.grid.filter.ListFilter'>Ext.ux.grid.filter.ListFilter</span><br/><a href='source/ListFilter.html#Ext-ux-grid-filter-ListFilter-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.grid.filter.ListFilter-method-init' class='name expandable'>init</a>( <span class='pre'>Object config</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Template method that is to initialize the filter. ...</div><div class='long'><p>Template method that is to initialize the filter.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.ux.grid.filter.Filter-method-init' rel='Ext.ux.grid.filter.Filter-method-init' class='docClass'>Ext.ux.grid.filter.Filter.init</a></p></div></div></div><div id='method-isActivatable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.grid.filter.ListFilter'>Ext.ux.grid.filter.ListFilter</span><br/><a href='source/ListFilter.html#Ext-ux-grid-filter-ListFilter-method-isActivatable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.grid.filter.ListFilter-method-isActivatable' class='name expandable'>isActivatable</a>( <span class='pre'></span> ) : Boolean<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Template method that is to return true if the filter\nhas enough configuration information to be activated. ...</div><div class='long'><p>Template method that is to return <tt>true</tt> if the filter\nhas enough configuration information to be activated.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.ux.grid.filter.Filter-method-isActivatable' rel='Ext.ux.grid.filter.Filter-method-isActivatable' class='docClass'>Ext.ux.grid.filter.Filter.isActivatable</a></p></div></div></div><div id='method-onCheckChange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.grid.filter.ListFilter'>Ext.ux.grid.filter.ListFilter</span><br/><a href='source/ListFilter.html#Ext-ux-grid-filter-ListFilter-method-onCheckChange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.grid.filter.ListFilter-method-onCheckChange' class='name expandable'>onCheckChange</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-serialize' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.grid.filter.Filter' rel='Ext.ux.grid.filter.Filter' class='defined-in docClass'>Ext.ux.grid.filter.Filter</a><br/><a href='source/Filter.html#Ext-ux-grid-filter-Filter-method-serialize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.grid.filter.Filter-method-serialize' class='name expandable'>serialize</a>( <span class='pre'></span> ) : Object/Array</div><div class='description'><div class='short'>Returns the serialized filter data for transmission to the server\nand fires the 'serialize' event. ...</div><div class='long'><p>Returns the serialized filter data for transmission to the server\nand fires the 'serialize' event.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object/Array</span><div class='sub-desc'><p>An object or collection of objects containing\nkey value pairs representing the current configuration of the filter.\n@methodOf <a href=\"#!/api/Ext.ux.grid.filter.Filter\" rel=\"Ext.ux.grid.filter.Filter\" class=\"docClass\">Ext.ux.grid.filter.Filter</a></p>\n</div></li></ul></div></div></div><div id='method-setActive' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.grid.filter.Filter' rel='Ext.ux.grid.filter.Filter' class='defined-in docClass'>Ext.ux.grid.filter.Filter</a><br/><a href='source/Filter.html#Ext-ux-grid-filter-Filter-method-setActive' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.grid.filter.Filter-method-setActive' class='name expandable'>setActive</a>( <span class='pre'>Boolean active, Boolean suppressEvent</span> )</div><div class='description'><div class='short'>Sets the status of the filter and fires the appropriate events. ...</div><div class='long'><p>Sets the status of the filter and fires the appropriate events.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>active</span> : Boolean<div class='sub-desc'><p>The new filter state.</p>\n</div></li><li><span class='pre'>suppressEvent</span> : Boolean<div class='sub-desc'><p>True to prevent events from being fired.\n@methodOf <a href=\"#!/api/Ext.ux.grid.filter.Filter\" rel=\"Ext.ux.grid.filter.Filter\" class=\"docClass\">Ext.ux.grid.filter.Filter</a></p>\n</div></li></ul></div></div></div><div id='method-setValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.grid.filter.ListFilter'>Ext.ux.grid.filter.ListFilter</span><br/><a href='source/ListFilter.html#Ext-ux-grid-filter-ListFilter-method-setValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.grid.filter.ListFilter-method-setValue' class='name expandable'>setValue</a>( <span class='pre'>Object value</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Template method that is to set the value of the filter. ...</div><div class='long'><p>Template method that is to set the value of the filter.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>The value to set the filter</p>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.ux.grid.filter.Filter-method-setValue' rel='Ext.ux.grid.filter.Filter-method-setValue' class='docClass'>Ext.ux.grid.filter.Filter.setValue</a></p></div></div></div><div id='method-validateRecord' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.grid.filter.ListFilter'>Ext.ux.grid.filter.ListFilter</span><br/><a href='source/ListFilter.html#Ext-ux-grid-filter-ListFilter-method-validateRecord' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.grid.filter.ListFilter-method-validateRecord' class='name expandable'>validateRecord</a>( <span class='pre'>Ext.data.Record record</span> ) : Boolean</div><div class='description'><div class='short'>Template method that is to validate the provided Ext.data.Record\nagainst the filters configuration. ...</div><div class='long'><p>Template method that is to validate the provided Ext.data.Record\nagainst the filters configuration.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : Ext.data.Record<div class='sub-desc'><p>The record to validate</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>true if the record is valid within the bounds\nof the filter, false otherwise.</p>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.ux.grid.filter.Filter-method-validateRecord' rel='Ext.ux.grid.filter.Filter-method-validateRecord' class='docClass'>Ext.ux.grid.filter.Filter.validateRecord</a></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-activate' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.grid.filter.Filter' rel='Ext.ux.grid.filter.Filter' class='defined-in docClass'>Ext.ux.grid.filter.Filter</a><br/><a href='source/Filter.html#Ext-ux-grid-filter-Filter-event-activate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.grid.filter.Filter-event-activate' class='name expandable'>activate</a>( <span class='pre'><a href=\"#!/api/Ext.ux.grid.filter.Filter\" rel=\"Ext.ux.grid.filter.Filter\" class=\"docClass\">Ext.ux.grid.filter.Filter</a> this, Object eOpts</span> )</div><div class='description'><div class='short'>Fires when an inactive filter becomes active ...</div><div class='long'><p>Fires when an inactive filter becomes active</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>this</span> : <a href=\"#!/api/Ext.ux.grid.filter.Filter\" rel=\"Ext.ux.grid.filter.Filter\" class=\"docClass\">Ext.ux.grid.filter.Filter</a><div class='sub-desc'>\n</div></li><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n\n\n\n</div></li></ul></div></div></div><div id='event-deactivate' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.grid.filter.Filter' rel='Ext.ux.grid.filter.Filter' class='defined-in docClass'>Ext.ux.grid.filter.Filter</a><br/><a href='source/Filter.html#Ext-ux-grid-filter-Filter-event-deactivate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.grid.filter.Filter-event-deactivate' class='name expandable'>deactivate</a>( <span class='pre'><a href=\"#!/api/Ext.ux.grid.filter.Filter\" rel=\"Ext.ux.grid.filter.Filter\" class=\"docClass\">Ext.ux.grid.filter.Filter</a> this, Object eOpts</span> )</div><div class='description'><div class='short'>Fires when an active filter becomes inactive ...</div><div class='long'><p>Fires when an active filter becomes inactive</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>this</span> : <a href=\"#!/api/Ext.ux.grid.filter.Filter\" rel=\"Ext.ux.grid.filter.Filter\" class=\"docClass\">Ext.ux.grid.filter.Filter</a><div class='sub-desc'>\n</div></li><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n\n\n\n</div></li></ul></div></div></div><div id='event-serialize' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.grid.filter.Filter' rel='Ext.ux.grid.filter.Filter' class='defined-in docClass'>Ext.ux.grid.filter.Filter</a><br/><a href='source/Filter.html#Ext-ux-grid-filter-Filter-event-serialize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.grid.filter.Filter-event-serialize' class='name expandable'>serialize</a>( <span class='pre'>Array/Object data, <a href=\"#!/api/Ext.ux.grid.filter.Filter\" rel=\"Ext.ux.grid.filter.Filter\" class=\"docClass\">Ext.ux.grid.filter.Filter</a> filter, Object eOpts</span> )</div><div class='description'><div class='short'>Fires after the serialization process. ...</div><div class='long'><p>Fires after the serialization process. Use this to attach additional parameters to serialization\ndata before it is encoded and sent to the server.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Array/Object<div class='sub-desc'><p>A map or collection of maps representing the current filter configuration.</p>\n</div></li><li><span class='pre'>filter</span> : <a href=\"#!/api/Ext.ux.grid.filter.Filter\" rel=\"Ext.ux.grid.filter.Filter\" class=\"docClass\">Ext.ux.grid.filter.Filter</a><div class='sub-desc'><p>The filter being serialized.</p>\n</div></li><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n\n\n\n</div></li></ul></div></div></div><div id='event-update' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.grid.filter.Filter' rel='Ext.ux.grid.filter.Filter' class='defined-in docClass'>Ext.ux.grid.filter.Filter</a><br/><a href='source/Filter.html#Ext-ux-grid-filter-Filter-event-update' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.grid.filter.Filter-event-update' class='name expandable'>update</a>( <span class='pre'><a href=\"#!/api/Ext.ux.grid.filter.Filter\" rel=\"Ext.ux.grid.filter.Filter\" class=\"docClass\">Ext.ux.grid.filter.Filter</a> this, Object eOpts</span> )</div><div class='description'><div class='short'>Fires when a filter configuration has changed ...</div><div class='long'><p>Fires when a filter configuration has changed</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>this</span> : <a href=\"#!/api/Ext.ux.grid.filter.Filter\" rel=\"Ext.ux.grid.filter.Filter\" class=\"docClass\">Ext.ux.grid.filter.Filter</a><div class='sub-desc'><p>The filter object.</p>\n</div></li><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n\n\n\n</div></li></ul></div></div></div></div></div></div></div>"});