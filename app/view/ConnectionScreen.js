/*
 * File: app/view/ConnectionScreen.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.ConnectionScreen', {
    extend: 'Ext.Container',
    alias: 'widget.connectionScreen',

    requires: [
        'Ext.device.Connection'
    ],

    config: {
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Connection',
                items: [
                    {
                        xtype: 'button',
                        id: 'backBut1',
                        itemId: 'mybutton5',
                        ui: 'back',
                        text: 'Back'
                    }
                ]
            },
            {
                xtype: 'button',
                id: 'conStatusBut',
                itemId: 'mybutton11',
                margin: '40 20 20 20',
                text: 'Connection Status'
            }
        ]
    }

});
