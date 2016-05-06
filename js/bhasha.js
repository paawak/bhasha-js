// Copyright 2008 Google Inc. All Rights Reserved.

goog.provide('bhasha.indic.IndicEditor');
goog.provide('bhasha.indic.attachEditor');

goog.require('goog.events.KeyHandler');



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
  var keyHandler = new goog.events.KeyHandler(this.indicTextEditor, false);
  goog.events.listen(keyHandler, goog.events.KeyHandler.EventType.KEY, this.replaceWithIndicChars);
};

var indicCharMap = {
	'y' : '\u09df',
	'0' : '\u09e6', 
	'1' : '\u09e7', 
	'2' : '\u09e8', 
	'3' : '\u09e9', 
	'4' : '\u09ea',
	'5' : '\u09eb', 
	'6' : '\u09ec', 
	'7' : '\u09ed', 
	'8' : '\u09ee', 
	'9' : '\u09ef', 
	'.' : '\u09f7'
};

/**
 * Event handler for KeyPressed. Replaces English chars with Indic chars
 * @param {goog.events.Event} e The event object.
 */
bhasha.indic.IndicEditor.prototype.replaceWithIndicChars = function(keyEvent) {
	  var  indicTextEditor = keyEvent.target;
	  var selectionStart =  indicTextEditor.selectionStart;
	  var selectionEnd =  indicTextEditor.selectionEnd;
	  var charTyped = keyEvent.charCode;
	  var indicChar = indicCharMap[String.fromCharCode(charTyped)];
	  console.log("***selectionStart: " + selectionStart + ", selectionEnd: " + selectionEnd + ", charTyped: " + charTyped + ", indicChar: " + indicChar);
      if (charTyped == goog.events.KeyCodes.ONE) {		
		console.log("***replaceWithIndicChars " + charTyped);
      }
};


