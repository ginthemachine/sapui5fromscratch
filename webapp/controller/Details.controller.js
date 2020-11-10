sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent",
	"sap/ui/core/routing/History",
	"com/orders/ordersapp/model/formatter"
], function (Controller, UIComponent, History, Formatter) {
	"use strict";

	return Controller.extend("com.orders.ordersapp.controller.Details", {
		formatter: Formatter,

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.orders.ordersapp.view.Details
		 */
		onInit: function () {
			var oRouter = UIComponent.getRouterFor(this);

			oRouter.getRoute("Detail").attachPatternMatched(this.onRouteMatched, this);
		},

		onNavBack: function () {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = UIComponent.getRouterFor(this);
				oRouter.navTo("Home", {}, true);
			}
		},

		onRouteMatched: function (oEvent) {
			var sId = oEvent.getParameter("arguments").SalesOrderID;

			var sPath = this.getView().getModel().createKey("SalesOrderSet", {
				SalesOrderID: sId
			});

			this.getView().bindElement("/" + sPath);
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.orders.ordersapp.view.Details
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.orders.ordersapp.view.Details
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.orders.ordersapp.view.Details
		 */
		//	onExit: function() {
		//
		//	}

	});

});