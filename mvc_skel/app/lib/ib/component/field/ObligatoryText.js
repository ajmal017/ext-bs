/**
 * Obligatory text
 *
 */
Ext.define('Ext.verz.form.field.ObligatoryText', {
        extend:'Ext.form.field.Text',
        alias:'widget.obligatorytext',
        allowBlank:false,
        afterLabelTextTpl :'<span class=\'x-label-obligatoryField\'></span>'
    }
);