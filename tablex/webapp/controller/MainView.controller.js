sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("sapui5.tb.tablex.controller.MainView", {
			onInit: function () {

            },
            onPress: function () {
             var oRout = this.getOwnerComponent().getRouter();
             oRout.navTo("View2");
            }
		});
	});
