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
		},

		statusIndicator: function (sStatus) {
			var sIcon;

			switch (sStatus) {
			case "C":
				sIcon = "completed";
				break;
			case "P":
				sIcon = "in-process";
				break;
			case "X":
				sIcon = "error";
				break;
			default:
				sIcon = "inactive";
			}

			return "sap-icon://status-" + sIcon;
		}
	};

});