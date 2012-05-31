Ext.data.JsonP.Ext_ib_notify_Download({"tagname":"class","name":"Ext.ib.notify.Download","extends":"Ext.ib.notify.Base","mixins":[],"alternateClassNames":[],"aliases":{"widget":["downloadnotify"]},"singleton":false,"requires":[],"uses":[],"code_type":"ext_define","inheritable":false,"inheritdoc":null,"meta":{},"id":"class-Ext.ib.notify.Download","members":{"cfg":[{"name":"autoHide","tagname":"cfg","owner":"Ext.ib.notify.Base","meta":{},"id":"cfg-autoHide"},{"name":"autoHideDelay","tagname":"cfg","owner":"Ext.ib.notify.Base","meta":{},"id":"cfg-autoHideDelay"},{"name":"response","tagname":"cfg","owner":"Ext.ib.notify.Base","meta":{},"id":"cfg-response"},{"name":"setIconClass","tagname":"cfg","owner":"Ext.ib.notify.Base","meta":{},"id":"cfg-setIconClass"}],"property":[],"method":[{"name":"translate","tagname":"method","owner":"Ext.ib.notify.Base","meta":{},"id":"method-translate"}],"event":[],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"files":[{"filename":"Download.js","href":"Download.html#Ext-ib-notify-Download"}],"html_meta":{},"component":false,"superclasses":["Ext.ux.window.Notification","Ext.ib.notify.Base"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.ux.window.Notification<div class='subclass '><a href='#!/api/Ext.ib.notify.Base' rel='Ext.ib.notify.Base' class='docClass'>Ext.ib.notify.Base</a><div class='subclass '><strong>Ext.ib.notify.Download</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/Download.html#Ext-ib-notify-Download' target='_blank'>Download.js</a></div></pre><div class='doc-contents'><p>download notification screen</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-autoHide' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ib.notify.Base' rel='Ext.ib.notify.Base' class='defined-in docClass'>Ext.ib.notify.Base</a><br/><a href='source/Base2.html#Ext-ib-notify-Base-cfg-autoHide' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ib.notify.Base-cfg-autoHide' class='name expandable'>autoHide</a><span> : Boolean</span></div><div class='description'><div class='short'>:true] Should the noteify hide itself ...</div><div class='long'><p>:true] Should the noteify hide itself</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-autoHideDelay' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ib.notify.Base' rel='Ext.ib.notify.Base' class='defined-in docClass'>Ext.ib.notify.Base</a><br/><a href='source/Base2.html#Ext-ib-notify-Base-cfg-autoHideDelay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ib.notify.Base-cfg-autoHideDelay' class='name expandable'>autoHideDelay</a><span> : Number</span></div><div class='description'><div class='short'>delay in miliseconds ...</div><div class='long'><p>delay in miliseconds</p>\n<p>Defaults to: <code>3000</code></p></div></div></div><div id='cfg-response' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ib.notify.Base' rel='Ext.ib.notify.Base' class='defined-in docClass'>Ext.ib.notify.Base</a><br/><a href='source/Base2.html#Ext-ib-notify-Base-cfg-response' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ib.notify.Base-cfg-response' class='name expandable'>response</a><span> : Object</span></div><div class='description'><div class='short'>te be used when message need to show anything depedning on a request result ...</div><div class='long'><p>te be used when message need to show anything depedning on a request result</p>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='cfg-setIconClass' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ib.notify.Base' rel='Ext.ib.notify.Base' class='defined-in docClass'>Ext.ib.notify.Base</a><br/><a href='source/Base2.html#Ext-ib-notify-Base-cfg-setIconClass' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ib.notify.Base-cfg-setIconClass' class='name expandable'>setIconClass</a><span> : Boolean</span></div><div class='description'><div class='short'>:true] Should an automatic icon class be added ...</div><div class='long'><p>:true] Should an automatic icon class be added</p>\n<p>Defaults to: <code>true</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-translate' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ib.notify.Base' rel='Ext.ib.notify.Base' class='defined-in docClass'>Ext.ib.notify.Base</a><br/><a href='source/Base2.html#Ext-ib-notify-Base-method-translate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ib.notify.Base-method-translate' class='name expandable'>translate</a>( <span class='pre'>String text</span> )</div><div class='description'><div class='short'>Translates text if the translate function is available ...</div><div class='long'><p>Translates text if the translate function is available</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>text</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});