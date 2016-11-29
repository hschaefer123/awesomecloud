/*!
 * Flickity v2.x UI5 cell component for uniorg.m.flickity.Gallery
 * http://flickity.metafizzy.co/
 * Touch, responsive, flickable carousel UI5 component
 * (c) Copyright 2016 UNIORG Solutions GmbH (8 Developer Team Licence).
 */
 
// Provides control uniorg.m.flickity.Cell.
sap.ui.define(
    ["sap/ui/core/Control"],
	function(Control) {
	"use strict";
		
	return Control.extend("de.blogspot.openui5.awesomecloud.control.Word", /** @lends de.blogspot.openui5.awesomecloud.control.Word **/ {
		metadata: {
			properties: {
				/**
				 * Align cells within the gallery element.
				 * could be "left", "center" (default) or "right"
				 */
				text: {
					type: "string"
				},
				
				/**
				 * The number of pixels a mouse or touch has to move before dragging begins. 
				 * Increase dragThreshold to allow for more wiggle room for vertical page scrolling on touch devices. 
				 * Default dragThreshold: 3.                   
				 */
				weight: {
					type: "int",
					defaultValue: 1
				}
			}
		},
		
		renderer: function(oRm, oControl) {
			oRm.write("<span");
			oRm.addClass("uoMAwesomeCloud");
			oRm.writeAttribute("data-weight", oControl.getWeight());
			oRm.writeControlData(oControl);
			oRm.writeClasses();
			oRm.writeStyles();
			oRm.write(">");
			oRm.writeEscaped(oControl.getText());
			oRm.write("</span>");
		}
		
	});
		
});