sap.ui.define([
    'emc/fin/ar/tom/controller/BaseController'
], function(BaseController) {
    'use strict';
    return BaseController.extend("emc.fin.ar.tom.controller.App",{
        onInit: function(){
            console.log("Hey folks!! the App Controller is ready Now");
        }
    });
});