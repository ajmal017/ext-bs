Ext.data.JsonP.Ext_ib_controller_Base({"tagname":"class","name":"Ext.ib.controller.Base","extends":"Ext.ux.app.RoutedController","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"code_type":"ext_define","inheritable":false,"inheritdoc":null,"meta":{},"id":"class-Ext.ib.controller.Base","members":{"cfg":[],"property":[],"method":[{"name":"clearFilters","tagname":"method","owner":"Ext.ib.controller.Base","meta":{},"id":"method-clearFilters"}],"event":[],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"files":[{"filename":"Base.js","href":"Base.html#Ext-ib-controller-Base"}],"html_meta":{},"component":false,"superclasses":["Ext.ux.app.RoutedController"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.ux.app.RoutedController<div class='subclass '><strong>Ext.ib.controller.Base</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Base.html#Ext-ib-controller-Base' target='_blank'>Base.js</a></div></pre><div class='doc-contents'><p>Base controller all controllers for vzs will extend this controller it will implement and handle some functions that\nall controllers will need</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-clearFilters' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ib.controller.Base'>Ext.ib.controller.Base</span><br/><a href='source/Base.html#Ext-ib-controller-Base-method-clearFilters' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ib.controller.Base-method-clearFilters' class='name expandable'>clearFilters</a>( <span class='pre'>Boolean reload, String storeName</span> )</div><div class='description'><div class='short'>Will clear filters on stores ...</div><div class='long'><p>Will clear filters on stores</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>reload</span> : Boolean<div class='sub-desc'><p>if this is set to true the stores clearFilters will be called and a call to the server will be done else it will just remove filters without any call to the server</p>\n</div></li><li><span class='pre'>storeName</span> : String<div class='sub-desc'><p>{storeName=null} Optional if filters need to be cleared for just one store</p>\n</div></li></ul></div></div></div></div></div></div></div>"});