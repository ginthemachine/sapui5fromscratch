sap.ui.define([
	"sap/ui/core/ValueState"
], function (ValueState) {
	"use strict";

	return {
		formatStatus: function (sValue) {
			switch (sValue) {
			case "C":
				return ValueState.Success;
			case "P":
				return ValueState.Warning;
			case "X":
				return ValueState.Error;
			default:
				return ValueState.Information;
			}
		}
	};

});