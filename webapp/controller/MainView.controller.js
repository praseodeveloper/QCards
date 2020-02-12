sap.ui.define(["sap/ui/core/mvc/Controller"], function(Controller) {
	"use strict";

	return Controller.extend("com.praseo.carouselTest.controller.MainView", {
		onInit: function(oEvent) {
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.loadData("../model/questions.json");
			this.getView().setModel(oModel);
		}
	});
});
