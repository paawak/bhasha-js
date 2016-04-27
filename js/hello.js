goog.require('goog.dom');
goog.require('goog.ui.Zippy');

goog.provide('com.swayam.bhasha.js');

function sayHi() {
  var banglaText = goog.dom.getElement('banglaText');
  alert('aaa');
  goog.events.listen(banglaText, goog.events.EventType.CLICK, this.typeBangla, false, this);
}

typeBangla = function(e) {
  alert('kkkkkk');
};