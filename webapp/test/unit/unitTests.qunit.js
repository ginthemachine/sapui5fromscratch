/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/orders/ordersapp/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});