
Ext.define('Ext.ib.IbReference', {});//Geen error door require


Ext.require(
    [
        /* proxy */

        'Ext.ib.proxy.IbRest',
        /* model */

        'Ext.ib.Model',
        
        /* mixins */
        
        'Ext.ib.mixin.ModelIterator',
        
        //'Ext.verz.data.Field',
        //'Ext.verz.window.FormWindow',

        /* notifications */
        //'Ext.verz.notify.Base',
        //'Ext.verz.notify.Download',
        //'Ext.verz.notify.Error',
        //'Ext.verz.notify.Save',
        //'Ext.verz.notify.Upload',
        //'Ext.verz.notify.Send',

        /* components */
        'Ext.ib.component.autoGrid',//'Ext.verz.Grid',
        'Ext.ib.component.autoForm',//'Ext.verz.Grid',
                       
        /* store */
        'Ext.ib.Store',
        /* buttons */
        //'Ext.verz.button.Base',
        //'Ext.verz.button.Save',
        //'Ext.verz.button.Next',
        //'Ext.verz.button.Previous',
        //'Ext.verz.button.Cancel',
        //'Ext.verz.button.Add',
        //'Ext.verz.button.Delete',
        //'Ext.verz.button.Search',
        //'Ext.verz.button.Reset',
        //'Ext.verz.button.IdButton',
        //'Ext.verz.button.GeneratePassword',
        //'Ext.verz.button.Export',
        //'Ext.verz.button.Send',

        /* form fields */
         'Ext.ib.component.autoForm',//'Ext.verz.Form',

        //'Ext.verz.form.field.Date',
        //'Ext.verz.form.field.ObligatoryText',
        //'Ext.verz.form.field.ObligatoryNumber',
        //'Ext.verz.form.field.ObligatoryArea',
        //'Ext.verz.form.field.ObligatoryRadioGroup',
        'Ext.ib.component.field.FieldComboBox',//'Ext.verz.form.field.ComboBox',
        //'Ext.verz.form.field.ObligatoryComboBox',
        //'Ext.verz.form.field.Logo',
        //'Ext.verz.form.field.Email',
        //'Ext.verz.form.field.Url',
        //'Ext.verz.form.field.ObligatoryEmail',
        'Ext.ib.component.field.FieldNumber',//'Ext.verz.form.field.Number',
        //'Ext.verz.form.field.CheckBox',
        //'Ext.verz.form.field.RadioText',
        //'Ext.verz.form.field.MultiFileUpload',
        'Ext.ib.component.field.FieldText'
           
           
           
        /* relations */
        //'Ext.verz.form.relations.ManyToOne',

        /* plugins html editor */
        //'Ext.verz.form.tinymce.WindowManager',

        /* error handler */
        //'Ext.verz.util.ErrorHandler',
        //'Ext.verz.panel.Base',
        //'Ext.verz.panel.Search',

        /* Utils */
        //'Ext.verz.Utils'
]);


Ext.log("IbReference loaded");