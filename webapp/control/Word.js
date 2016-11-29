// Provides control de.blogspot.openui5.awesomecloud.control.Word
sap.ui.define(
    ["sap/ui/core/Control"],
	function(Control) {
	"use strict";
		
	return Control.extend("de.blogspot.openui5.awesomecloud.control.Word", /** @lends de.blogspot.openui5.awesomecloud.control.Word **/ {
		metadata: {
			properties: {
				/**
				 * word to render
				 */
				text: {
					type: "string"
				},
				
				/**
				 * the weigth for sizing between (used 1 to 5)
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