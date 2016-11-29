sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("de.blogspot.openui5.awesomecloud.controller.App", {
		
		onRefresh : function() {
			this.getView().byId("AwesomeCloud").refresh();
		}
		
	});

});