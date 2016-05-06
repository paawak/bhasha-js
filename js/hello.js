// Copyright 2008 Google Inc. All Rights Reserved.

goog.provide('bhasha.indic.IndicEditor');
goog.provide('bhasha.indic.attachEditor');

goog.require('goog.events.InputHandler');



/**
 * Entry point:
 * Attaches a KeyListener to the text-area, so that English chars are replaced by Indic chars as the user types
 * @param {Element} indicTextEditor The text-area where Indic Text is to be typed.
 */
bhasha.indic.attachEditor = function(indicTextEditor) {
	//alert("hhhh: " + noteContainer);
    var indicEditor = new bhasha.indic.IndicEditor(indicTextEditor);
	indicEditor.attachIndicListener();    
};

/**
 * Manages the data and interface for a single text-area.
 * @param {Element} indicTextEditor The text-area where Indic Text is to be typed. 
 * @constructor
 */
bhasha.indic.IndicEditor = function(indicTextEditor) {
  this.indicTextEditor = indicTextEditor;
};

/**
 * Attaches a KeyListener to the text-area, so that English chars are replaced by Indic chars as the user types
 */
bhasha.indic.IndicEditor.prototype.attachIndicListener = function() {
  //goog.events.listen(this.indicTextEditor, goog.events.EventType.KEYPRESS, this.replaceWithIndicChars, true, this);
 var inputHandler = new goog.events.InputHandler(this.indicTextEditor);
  inputHandler.handleEvent = this.replaceWithIndicChars;
};


/**
 * Event handler for KeyPressed. Replaces English chars with Indic chars
 * @param {goog.events.Event} e The event object.
 */
bhasha.indic.IndicEditor.prototype.replaceWithIndicChars = function(e) {
  console.log("***replaceWithIndicChars " + e.keyCode);
  e.stopPropagation();
  //e.setCharCode(65);
};

