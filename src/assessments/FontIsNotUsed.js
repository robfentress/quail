/**
 * A simple test case that determines if elements, specified by a selector,
 * exist or not.
 *
 * The test fails for elements that are found and a case is created for each
 * one. The test passes is the selector finds no matching elements.
 */
var Case = require('Case');
const DOM = require('DOM');

var FontIsNotUsed = {
  run: function (test) {

    var selector = 'font';

    test.get('scope').forEach(function (scope) {
      var candidates = DOM.scry(selector, scope);
      if (!candidates.length) {
        test.add(Case({
          element: undefined,
          status: 'inapplicable'
        }));
      }
      else {
        candidates.forEach(function (element) {
          test.add(Case({
            element: element,
            status: 'failed'
          }));
        });
      }
    });
  },

  meta: {
    testability: 1,
    title: {
      en: 'Font elements should not be used',
      nl: 'Het font element moet niet worden gebruikt'
    },
    description: {
      en: 'The <code>basefont</code> tag is deprecated and should not be used. Investigate using stylesheets instead.',
      nl: 'De <code>basefont</code>-tag is afgekeurd en moet niet worden gebruikt. Gebruik in plaats hiervan stylesheets.'
    },
    guidelines: [

    ],
    tags: [
      'deprecated',
      'content'
    ]
  }
};
module.exports = FontIsNotUsed;
