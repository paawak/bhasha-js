goog.provide('bhasha.indic.attachEditor');

goog.require('goog.events.KeyHandler');

/**
 * Entry point: Attaches a KeyListener to the text-area, so that English chars
 * are replaced by Indic chars as the user types
 * 
 * @param {Element}
 *                indicTextEditor The text-area where Indic Text is to be typed.
 */
bhasha.indic.attachEditor = function(indicTextEditor) {
    var indicEditor = new bhasha.indic.IndicEditor(indicTextEditor);
    indicEditor.attachIndicListener();
};

/**
 * Manages the data and interface for a single text-area.
 * 
 * @param {Element}
 *                indicTextEditor The text-area where Indic Text is to be typed.
 * @constructor
 */
bhasha.indic.IndicEditor = function(indicTextEditor) {
    this.indicTextEditor = indicTextEditor;
};

/**
 * Attaches a KeyListener to the text-area, so that English chars are replaced
 * by Indic chars as the user types
 */
bhasha.indic.IndicEditor.prototype.attachIndicListener = function() {
    var keyHandler = new goog.events.KeyHandler(this.indicTextEditor, true);
    goog.events.listen(keyHandler, goog.events.KeyHandler.EventType.KEY,
	    this.replaceWithindicStrings);
};

/**
 * Event handler for KeyPressed. Replaces English chars with Indic chars
 * 
 * @param {goog.events.Event}
 *                keyEvent The event object.
 */
bhasha.indic.IndicEditor.prototype.replaceWithindicStrings = function(keyEvent) {
    var indicTextEditor = keyEvent.target;
    var selectionStart = indicTextEditor.selectionStart;
    var selectionEnd = indicTextEditor.selectionEnd;
    var charTyped = String.fromCharCode(keyEvent.charCode);
    var indicString = indicStringMap[charTyped];
    console.log("***selectionStart: " + selectionStart + ", selectionEnd: "
	    + selectionEnd + ", charTyped: " + charTyped + ", indicString: "
	    + indicString);

    if (keyTypedHistory.length == 3) {
	keyTypedHistory = "";
    }

    if (indicString) {
	keyTypedHistory += charTyped;
	console.log("replacing roman chars with indic chars");
	console.log("keyTypedHistory: " + keyTypedHistory);
	keyEvent.preventDefault();
	var existingText = indicTextEditor.value;

	if (keyTypedHistory.length > 1) {
	    var indicTextForTypedHistory = indicStringMap[keyTypedHistory];
	    if (indicTextForTypedHistory) {
		var textBeforeHistory = existingText.slice(0,
			existingText.length - (keyTypedHistory.length - 1));
		// keyTypedHistory = "";
		indicTextEditor.value = textBeforeHistory
			+ indicTextForTypedHistory;
		return;
	    }
	}

	if (existingText.length == selectionStart) {
	    indicTextEditor.value = existingText + indicString;
	} else {
	    var textBeforeCaret = existingText.slice(0, selectionStart);
	    var textAfterCaret = existingText.slice(selectionEnd);
	    // console.log("textBeforeCaret=" + textBeforeCaret);
	    // console.log("textAfterCaret=" + textAfterCaret);
	    indicTextEditor.value = textBeforeCaret + indicString
		    + textAfterCaret;
	    indicTextEditor.setSelectionRange(selectionStart + 1,
		    selectionStart + 1);
	}

    } else {
	keyTypedHistory = "";
    }
};

var keyTypedHistory = "";

var indicStringMap = {
    "AU" : "\u0994",
    "AN" : "\u0981",
    "AI" : "\u0990",
    "AH" : "\u0983",
    "ee" : "\u09c0",
    "ddh" : "\u09a2",
    "kh" : "\u0996",
    "SS" : "\u09b7\u09cd",
    "GH" : "\u0998\u09cd",
    "SH" : "\u09b6\u09cd",
    "dh" : "\u09a7",
    "jj" : "\u09af",
    "dd" : "\u09a1",
    "jh" : "\u099d",
    "RR" : "\u09dc\u09cd",
    "LI" : "\u098c",
    "RH" : "\u09dd\u09cd",
    "rrr" : "\u09c3",
    "nga" : "\u0999",
    "TTH" : "\u09a0\u09cd",
    "z" : "\u099c",
    "y" : "\u09df",
    "ou" : "\u09cc",
    "x" : "\u0995\u09cd\u09b7",
    "w" : "\u09cd\u09ac",
    "v" : "\u09ad",
    "u" : "\u09c1",
    "ch" : "\u099b",
    "t" : "\u09a4",
    "uu" : "\u09c2",
    "s" : "\u09b8",
    "nya" : "\u099e",
    "oo" : "\u09c2",
    "r" : "\u09b0",
    "ii" : "\u09c0",
    "q" : "\u0995",
    "p" : "\u09aa",
    "o" : "\u09cb",
    "n" : "\u09a8",
    "m" : "\u09ae",
    "l" : "\u09b2",
    "k" : "\u0995",
    "EE" : "\u0988",
    "j" : "\u099c",
    "i" : "\u09bf",
    "KH" : "\u0996\u09cd",
    "DDH" : "\u09a2\u09cd",
    "h" : "\u09b9",
    "g" : "\u0997",
    "f" : "\u09ab",
    "e" : "\u09c7",
    "d" : "\u09a6",
    "c" : "\u099a",
    "b" : "\u09ac",
    "a" : "\u09be",
    "Z" : "\u099c\u09cd",
    "Y" : "\u09cd\u09af",
    "X" : "\u0995\u09cd\u09b7\u09cd",
    "W" : "\u09cd\u09ac",
    "V" : "\u09ad\u09cd",
    "U" : "\u0989",
    "T" : "\u09a4\u09cd",
    "S" : "\u09b8\u09cd",
    "tt" : "\u099f",
    "R" : "\u09b0\u09cd",
    "nn" : "\u09a3",
    "Q" : "\u0995\u09cd",
    "P" : "\u09aa\u09cd",
    "O" : "\u0993",
    "DH" : "\u09a7\u09cd",
    "N" : "\u09a8\u09cd",
    "M" : "\u09ae\u09cd",
    "L" : "\u09b2\u09cd",
    "JJ" : "\u09af\u09cd",
    "K" : "\u0995\u09cd",
    "DD" : "\u09a1\u09cd",
    "J" : "\u099c\u09cd",
    "JH" : "\u099d\u09cd",
    "I" : "\u0987",
    "H" : "\u09b9\u09cd",
    "G" : "\u0997\u09cd",
    "th" : "\u09a5",
    "F" : "\u09ab\u09cd",
    "E" : "\u098f",
    "au" : "\u09cc",
    "D" : "\u09a6\u09cd",
    "C" : "\u099a\u09cd",
    "B" : "\u09ac\u09cd",
    "A" : "\u0985",
    "RRR" : "\u098b",
    "NGA" : "\u0999\u09cd",
    "9" : "\u09ef",
    "8" : "\u09ee",
    "ai" : "\u09c8",
    "7" : "\u09ed",
    "6" : "\u09ec",
    "5" : "\u09eb",
    "4" : "\u09ea",
    "3" : "\u09e9",
    "ss" : "\u09b7",
    "OU" : "\u0994",
    "2" : "\u09e8",
    "gh" : "\u0998",
    "1" : "\u09e7",
    "0" : "\u09e6",
    "CH" : "\u099b\u09cd",
    "aa" : "\u0986",
    "." : "\u09f7",
    "UU" : "\u098a",
    "OO" : "\u098a",
    "NYA" : "\u099e\u09cd",
    "II" : "\u0988",
    "ON" : "\u0982",
    "sh" : "\u09b6",
    "aT" : "\u09ce",
    "rr" : "\u09dc",
    "TT" : "\u099f\u09cd",
    "NN" : "\u09a3\u09cd",
    "rh" : "\u09dd",
    "tth" : "\u09a0",
    "TH" : "\u09a5\u09cd"
};
