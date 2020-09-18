sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"com/orders/ordersapp/model/formatter"
], function (Controller, JSONModel, Formatter) {
	"use strict";

	return Controller.extend("com.orders.ordersapp.controller.Home", {
		formatter: Formatter,
		
		onInit: function () {
			// alert("onInit called!");

			// create a data object
			// var oData = {
			// 	"title": "My Orders",
			// 	"SalesOrderSet": [{
			// 		"SalesOrderID": "0001",
			// 		"CustomerName": "Apple",
			// 		"LifecycleStatusDescription": "Completed",
			// 		"LifecycleStatus": "Success",
			// 		"GrossAmount": "199",
			// 		"CurrencyCode": "USD"
			// 	}, {
			// 		"SalesOrderID": "0002",
			// 		"CustomerName": "Google",
			// 		"LifecycleStatusDescription": "Completed",
			// 		"LifecycleStatus": "Success",
			// 		"GrossAmount": "277",
			// 		"CurrencyCode": "USD"
			// 	}, {
			// 		"SalesOrderID": "0003",
			// 		"CustomerName": "Amazon",
			// 		"LifecycleStatusDescription": "Error",
			// 		"LifecycleStatus": "Error",
			// 		"GrossAmount": "599",
			// 		"CurrencyCode": "USD"
			// 	}]
			// };

			// // JSON Model instance
			// var oModel = new JSONModel(oData);
			// oModel.setDefaultBindingMode("OneWay");

			// // Assign the model to view
			// this.getView().setModel(oModel);
		},

		onExit: function () {
			// alert("onExit called!");
		},

		onBeforeRendering: function () {
			// alert("onBeforeRendering called!");
		},

		onAfterRendering: function () {
			// alert("onAfterRendering called!");
		},

		onSearch: function () {
			alert("onSearch called!");
		},

		onSort: function () {
			alert("onSort called!");
			// this.getView().destroy();
		},

		onGroup: function () {
			alert("onGroup called!");
		}

	});
});