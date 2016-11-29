/*!
 * Flickity v2.x UI5 component
 * http://flickity.metafizzy.co/
 * Touch, responsive, flickable carousel UI5 component
 * (c) Copyright 2016 UNIORG Solutions GmbH (8 Developer Team Licence).
 */
 
// Provides control uniorg.m.flickity.Gallery.
sap.ui.define([
    "sap/ui/core/Control",
    "jquery.sap.global",
    "./3rd/jquery.awesomeCloud-0.2.min"
    ],
	function(Control) {
	"use strict";

	return Control.extend("de.blogspot.openui5.awesomecloud.control.Cloud", {
		
		metadata: {
			properties: {
				width: {
					type: "sap.ui.core.CSSSize",
					defaultValue: "inherit"
				},

				height: {
					type: "sap.ui.core.CSSSize",
					defaultValue: "inherit"
				}
			},
			defaultAggregation: "words",
			aggregations: {
				/**
				 * set of slides that should be displayed
				 */
				words: {
					type: "de.blogspot.openui5.awesomecloud.control.Word",
					multiple: true,
					singularName : "word",
					bindable: true
				}
			}
		},
		
		renderer: function(oRm, oControl) {
			// open tag
			oRm.write("<div");
            oRm.writeControlData(oControl);
            oRm.addClass("uoMAwesomeCloud");
            if(oControl.getWidth() !== "inherit") {
                oRm.addStyle("width", oControl.getWidth());
            }
            if(oControl.getHeight() !== "inherit") {
                oRm.addStyle("height", oControl.getHeight());
            }
            oRm.writeClasses();
            oRm.writeStyles();
            //oRm.writeAttribute("tabindex", "-1");
            oRm.write(">");
            
            // render cells aggregation
            oControl.getWords().forEach(function (oWord) {
                oRm.renderControl(oWord);
            });
            
            // close tag
            oRm.write("</div>");
		},
			
		/**
		 * destroy flickity
		 */
		onBeforeRendering : function() {
			/*
			if (this._$Flickity && this._$Flickity.data("flickity")) {
			    // unbind event listener
			    this._$Flickity.off("select.flickity", this.onCellSelect);
				this._$Flickity.off("settle.flickity", this.onCellSettleSelect);
			    this._$Flickity.off( "staticClick.flickity", this.onStaticCellPress);
				this._$Flickity.flickity("destroy");
				this._$Flickity = null;
			}
			*/
			if (Control.prototype.onBeforeRendering) {
				Control.prototype.onBeforeRendering.apply(this, arguments);
			}
		},

		/**
		 * initialize flickity
		 */
		onAfterRendering : function() {
			if (Control.prototype.onAfterRendering) {
				Control.prototype.onAfterRendering.apply(this, arguments);
			}
			
			// initialize cloud
			//this.$().awesomeCloud(this.getConfig());
			this.refresh();
		},
		
		refresh : function() {
			this.$().awesomeCloud(this.getConfig());
		},

		getConfig : function() {
			var oConfig = {
				"size" : {
				    "grid" : 8, // word spacing, smaller is more tightly packed
				    "factor" : 0, // font resize factor, 0 means automatic
				    "normalize" : true // reduces outliers for more attractive output
				},
				"color" : {
				    "background" : "rgba(255,255,255,0)", // background color, transparent by default
				    "start" : "#20f", // color of the smallest font, if options.color = "gradient""
				    "end" : "rgb(200,0,0)" // color of the largest font, if options.color = "gradient"
				},
				"options" : {
				    "color" : "gradient", // if "random-light" or "random-dark", color.start and color.end are ignored
				    "rotationRatio" : 0.3, // 0 is all horizontal, 1 is all vertical
				    "printMultiplier" : 1, // set to 3 for nice printer output; higher numbers take longer
				    "sort" : "highest" // "highest" to show big words first, "lowest" to do small words first, "random" to not care
				},
				"font" : "Helvetica, Arial, sans-serif", // the CSS font-family string
				"shape" : "circle" // the selected shape keyword, or a theta function describing a shape
			};
			
			return oConfig;
		}
			
	});
		
});