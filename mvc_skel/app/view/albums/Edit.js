Ext.define('App.view.albums.Edit', {
    alias:'widget.albums.Edit',
    extend:'Ext.panel.Panel',
    flex:1,
    layout:{
        type:'hbox',
        align:'stretch'
    },
    initComponent:function () {
        var me = this;
        me.items = [
            {
                loadItemId:me.itemId,
                flex:1,
                editForm:true,
                xtype:'AutoForm',
                store:'Albums'
            },
            {
                flex:1,
                xtype:'panel',
                layout:{
                    type:'vbox',
                    align:'stretch'
                },
                items:[
                    {
                        mainFilters:[{
                            property:"album",
                            value:me.itemId
                        }],

                        onCreatePopup:function(type,popup)
                        {
                            var albumPicker = popup.down("FieldComboBox");
                            if(type !== 'edit')
                            albumPicker.select(me.itemId);

                            albumPicker.setDisabled(true);
                        },

                        hasEditPopupForm:true,
                        xtype:'tracks.Index',
                        flex:1
                    }
                ]
            }
        ];
        me.callParent(arguments);
    }
});