/**
 * A simple test case that determines if elements, specified by a selector,
 * exist or not.
 *
 * The test fails for elements that are found and a case is created for each
 * one. The test passes is the selector finds no matching elements.
 */
var Case = require('Case');
const DOM = require('DOM');

var ObjectLinkToMultimediaHasTextTranscript = {
  run: function (test, options) {

    var selector = 'object';

    test.get('scope').forEach(function (scope) {
      var candidates = DOM.scry(selector, scope);
      if (!candidates.length) {
        test.add(Case({
          element: undefined,
          status: (options.test ? 'inapplicable' : 'passed')
        }));
      }
      else {
        candidates.forEach(function (element) {
          var status;

          // If a test is defined, then use it
          if (options.test && !DOM.is(element, options.test)) {
            status = 'passed';
          }
          else {
            status = 'failed';
          }

          test.add(Case({
            element: element,
            status: status
          }));
        });
      }
    });
  },

  meta: {
    testability: 0,
    title: {
      en: 'Objects which reference multimedia files should also provide a link to a transcript',
      nl: 'Objecten die verwijzen naar multimediabestanden moeten ook een link aanbieden naar de transcriptie'
    },
    description: {
      en: 'If an object contains a video, a link to the transcript should be provided near the object.',
      nl: 'Als een object een video bevat, moet een link naar de transcriptie hiervan worden aangeboden bij het object.'
    },
    guidelines: [

    ],
    tags: [
      'objects',
      'content'
    ]
  }
};
module.exports = ObjectLinkToMultimediaHasTextTranscript;
