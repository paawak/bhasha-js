// Copyright 2008 Google Inc. All Rights Reserved.

goog.provide('tutorial.notepad.Note');
goog.provide('bhasha.indic.attachEditor');

goog.require('goog.dom');
goog.require('goog.ui.Zippy');



/**
 * Iterates over a list of note data objects, creates a
 * tutorial.Note instance for each one, and tells the instance to build
 * its DOM structure.
 * @param {Element} indicTextEditor The text-area where Indic Text is to be typed.
 */
bhasha.indic.attachEditor = function(indicTextEditor) {
	//alert("hhhh: " + noteContainer);
    var note = new tutorial.notepad.Note(indicTextEditor);
	note.makeNoteDom();    
};

/**
 * Manages the data and interface for a single note.
 * @param {Element} indicTextEditor The text-area where Indic Text is to be typed. 
 * @constructor
 */
tutorial.notepad.Note = function(indicTextEditor) {
  this.indicTextEditor = indicTextEditor;
};

/**
 * Creates the DOM structure for the note and adds it to the document.
 */
tutorial.notepad.Note.prototype.makeNoteDom = function() {
  goog.events.listen(this.indicTextEditor, goog.events.EventType.CLICK,
      this.save, false, this);
  // Attach the Zippy behavior.
  //this.zippy = new goog.ui.Zippy(this.headerElement, this.contentContainer);
};


// NEW: Implements our Save button.
/**
 * Event handler for clicks on the Save button. Sets the content of the Note
 * to the text in the editor and hides the editor.
 * @param {goog.events.Event} e The event object.
 */
tutorial.notepad.Note.prototype.save = function(e) {
  alert("click");
};


