Ext.data.JsonP.Ext_ib_data_Field({"tagname":"class","name":"Ext.ib.data.Field","extends":"Ext.data.Field","mixins":[],"alternateClassNames":[],"aliases":{"widget":["IbField"]},"singleton":false,"requires":[],"uses":[],"code_type":"ext_define","inheritable":false,"inheritdoc":null,"meta":{},"id":"class-Ext.ib.data.Field","members":{"cfg":[{"name":"gridLabel","tagname":"cfg","owner":"Ext.ib.data.Field","meta":{},"id":"cfg-gridLabel"},{"name":"isSearchable","tagname":"cfg","owner":"Ext.ib.data.Field","meta":{},"id":"cfg-isSearchable"},{"name":"renderOpts","tagname":"cfg","owner":"Ext.ib.data.Field","meta":{},"id":"cfg-renderOpts"},{"name":"searchColumn","tagname":"cfg","owner":"Ext.ib.data.Field","meta":{},"id":"cfg-searchColumn"},{"name":"searchLabel","tagname":"cfg","owner":"Ext.ib.data.Field","meta":{},"id":"cfg-searchLabel"},{"name":"searchPosition","tagname":"cfg","owner":"Ext.ib.data.Field","meta":{},"id":"cfg-searchPosition"},{"name":"showInGrid","tagname":"cfg","owner":"Ext.ib.data.Field","meta":{},"id":"cfg-showInGrid"}],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"files":[{"filename":"Field.js","href":"Field.html#Ext-ib-data-Field"}],"html_meta":{},"component":false,"superclasses":["Ext.data.Field"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.data.Field<div class='subclass '><strong>Ext.ib.data.Field</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Field.html#Ext-ib-data-Field' target='_blank'>Field.js</a></div></pre><div class='doc-contents'><p>Datafield that holds extra configs</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-gridLabel' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ib.data.Field'>Ext.ib.data.Field</span><br/><a href='source/Field.html#Ext-ib-data-Field-cfg-gridLabel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ib.data.Field-cfg-gridLabel' class='name not-expandable'>gridLabel</a><span> : String</span></div><div class='description'><div class='short'><p>default the label for the grid is the (translated) dataindex this allows for a custom label</p>\n</div><div class='long'><p>default the label for the grid is the (translated) dataindex this allows for a custom label</p>\n</div></div></div><div id='cfg-isSearchable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ib.data.Field'>Ext.ib.data.Field</span><br/><a href='source/Field.html#Ext-ib-data-Field-cfg-isSearchable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ib.data.Field-cfg-isSearchable' class='name not-expandable'>isSearchable</a><span> : Boolean</span></div><div class='description'><div class='short'><p>will show this field in the grid when useAutoColumns is true</p>\n</div><div class='long'><p>will show this field in the grid when useAutoColumns is true</p>\n</div></div></div><div id='cfg-renderOpts' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ib.data.Field'>Ext.ib.data.Field</span><br/><a href='source/Field.html#Ext-ib-data-Field-cfg-renderOpts' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ib.data.Field-cfg-renderOpts' class='name expandable'>renderOpts</a><span> : Object</span></div><div class='description'><div class='short'>object that will hold differnt configs/settings to render the field ...</div><div class='long'><p>object that will hold differnt configs/settings to render the field</p>\n<ul><li><span class='pre'>radioFields</span> : Array<div class='sub-desc'><p>indicates that this field should be a radiogroup and holds the items as you would give to an Ext.form.RadioGroup</p>\n</div></li><li><span class='pre'>checkFields</span> : Array<div class='sub-desc'><p>indicates that this field should be a checkboxgroup and holds the items as you would give to an Ext.form.CheckboxGroup</p>\n</div></li><li><span class='pre'>isBetween</span> : Boolean<div class='sub-desc'><p>will render the field as a between field it will create 2 fields with the  postfix <em>from </em>until the fields will keep their type</p>\n</div></li><li><span class='pre'>isBetweenTomorrowToday</span> : Boolean<div class='sub-desc'><p>will render the field as a between field it will create 2 fields with the  postfix <em>from </em>until the fields will keep their type</p>\n</div></li><li><span class='pre'>useTime</span> : Boolean<div class='sub-desc'><p>used for date fields to indicate that it should be rendered inclusive the time</p>\n</div></li><li><span class='pre'>isEmail</span> : Boolean<div class='sub-desc'><p>is used in the grid to make a link of the email</p>\n</div></li><li><span class='pre'>combobox</span> : Object<div class='sub-desc'><p>used when we should show a combobox. use the same configs as for a normal combobox see Ext.form.field.ComboBox\nkeep in mind that the store should be included in the controller that displays the combobox</p>\n</div></li></ul></div></div></div><div id='cfg-searchColumn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ib.data.Field'>Ext.ib.data.Field</span><br/><a href='source/Field.html#Ext-ib-data-Field-cfg-searchColumn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ib.data.Field-cfg-searchColumn' class='name expandable'>searchColumn</a><span> : Number</span></div><div class='description'><div class='short'>in what column should the item be showed ...</div><div class='long'><p>in what column should the item be showed</p>\n<p>Defaults to: <code>1</code></p></div></div></div><div id='cfg-searchLabel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ib.data.Field'>Ext.ib.data.Field</span><br/><a href='source/Field.html#Ext-ib-data-Field-cfg-searchLabel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ib.data.Field-cfg-searchLabel' class='name not-expandable'>searchLabel</a><span> : String</span></div><div class='description'><div class='short'><p>default the label for the search is the (translated) dataindex this allows for a custom label</p>\n</div><div class='long'><p>default the label for the search is the (translated) dataindex this allows for a custom label</p>\n</div></div></div><div id='cfg-searchPosition' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ib.data.Field'>Ext.ib.data.Field</span><br/><a href='source/Field.html#Ext-ib-data-Field-cfg-searchPosition' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ib.data.Field-cfg-searchPosition' class='name expandable'>searchPosition</a><span> : Number</span></div><div class='description'><div class='short'>at what position should the field come (what order should fields be displayed) default\nit will be entered at the end. ...</div><div class='long'><p>at what position should the field come (what order should fields be displayed) default\nit will be entered at the end. This also makes is possible to manual define search fields in a column and let the\nautofill add a field in between the excisting fields</p>\n</div></div></div><div id='cfg-showInGrid' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ib.data.Field'>Ext.ib.data.Field</span><br/><a href='source/Field.html#Ext-ib-data-Field-cfg-showInGrid' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ib.data.Field-cfg-showInGrid' class='name not-expandable'>showInGrid</a><span> : Boolean</span></div><div class='description'><div class='short'><p>will show this field in the grid when autofill is true</p>\n</div><div class='long'><p>will show this field in the grid when autofill is true</p>\n</div></div></div></div></div></div></div>"});