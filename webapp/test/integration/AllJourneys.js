sap.ui.define([
	"sap/ui/test/Opa5",
	"com/praseo/carouselTest/test/integration/arrangements/Startup",
	"com/praseo/carouselTest/test/integration/BasicJourney"
], function(Opa5, Startup) {
	"use strict";

	Opa5.extendConfig({
		arrangements: new Startup(),
		pollingInterval: 1
	});

});
