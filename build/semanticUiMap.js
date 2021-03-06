'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var TEXT = 'TEXT';
var BUTTON = 'BUTTON';
var BUTTON_TEXT = 'BUTTON_TEXT';

var semanticUiMap = {

  selectorInfo: {
    uiButton: {
      type: BUTTON,
      suffixes: ['text']
    },
    uiButtonText: {
      type: BUTTON_TEXT
    },
    uiButton_focus: {
      type: BUTTON,
      suffixes: ['text']
    },
    uiButtonText_focus: {
      type: BUTTON_TEXT
    }
  },

  propMap: {
    // This will be filled in below.
  }

};

var commonProps = {
  'height': true,
  'width': true,
  'margin': true,
  'padding': true
};

var textProps = {
  'color': true,
  'font-size': true,
  'font-family': true,
  'font-weight': true,
  'text-align': true
};

// TODO: Add more supported props
semanticUiMap.propMap[TEXT] = _extends({}, commonProps, textProps);

semanticUiMap.propMap[BUTTON] = _extends({}, commonProps, {
  'border-radius': true,
  'background-color': true
});

// TODO: Add more supported props
semanticUiMap.propMap[BUTTON_TEXT] = _extends({}, textProps);

module.exports = semanticUiMap;