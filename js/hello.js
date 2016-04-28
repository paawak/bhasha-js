// Copyright 2008 Google Inc. All Rights Reserved.

goog.provide('tutorial.notepad.Note');
goog.provide('tutorial.notepad.makeNotes');

goog.require('goog.dom');
goog.require('goog.ui.Zippy');



/**
 * Iterates over a list of note data objects, creates a
 * tutorial.Note instance for each one, and tells the instance to build
 * its DOM structure.
 * @param {Array.<Object>} data The notes data.
 * @param {Element} noteContainer The element under which DOM nodes for
 *     the notes should be added.
 * @return {Array.<tutorial.notepad.Note>} An array containing the resulting
 *     instances.
 */
tutorial.notepad.makeNotes = function(data, noteContainer) {
  //alert("hhhh");

    //var textArea = goog.dom.getElement("banglaText");
alert("hhhh:"+noteContainer);
      var note = new tutorial.notepad.Note(data, noteContainer);
	  note.makeNoteDom();

    
};

/**
 * Manages the data and interface for a single note.
 * @param {Array.<Object>} data The data for a single note.
 * @param {Element} noteContainer The element under which DOM nodes for
 *     the notes should be added.
 * @constructor
 */
tutorial.notepad.Note = function(data, noteContainer) {
  this.title = data.title;
  this.content = data.content;
  this.noteContainer = noteContainer;
};

/**
 * Creates the DOM structure for the note and adds it to the document.
 */
tutorial.notepad.Note.prototype.makeNoteDom = function() {
  goog.events.listen(this.noteContainer, goog.events.EventType.CLICK,
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


// NEW: Saving closes the editor
/**
 * Updates the content of the content element, displays the content element,
 * and hids the editor.
 */
tutorial.notepad.Note.prototype.closeEditor = function() {
  this.contentElement.innerHTML = this.content;
  this.contentElement.style.display = 'inline';
  this.editorContainer.style.display = 'none';
};


/**
 * Event handler for clicks on the content element. Clicking on the
 * content element opens the editor field.
 * @param {goog.events.Event} e The event object.
 */
tutorial.notepad.Note.prototype.openEditor = function(e) {
  this.editorElement.value = this.content;
  this.contentElement.style.display = 'none';
  this.editorContainer.style.display = 'inline';
};
