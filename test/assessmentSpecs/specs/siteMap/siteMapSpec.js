describe('assessment: siteMap', function () {
  var client, assessments, quailResults, cases;

  // Evaluate the test page with Quail.
  before('load webdrivers and run evaluations with Quail', function () {
    return quailTestRunner.setup({
        url: 'http://localhost:9999/siteMap/siteMap.html',
        assessments: [
          'siteMap'
        ]
      })
      .spread(function (_client_, _assessments_, _quailResults_) {
        client = _client_;
        assessments = _assessments_;
        quailResults = _quailResults_;
      });
  });

  after('end the webdriver session', function () {
    return quailTestRunner.teardown(client);
  });

  it('should return the correct number of tests', function () {
    expect(quailResults.stats.tests).to.equal(1);
  });
  it('should return the correct number of cases', function () {
    expect(quailResults.stats.cases).to.equal(1);
  });

  it('should have correct key under the test results', function () {
    expect(quailResults.tests).to.include.keys('siteMap');
  });

  it('should return the proper assessment for assert-1', function () {
    cases = quailResults.tests.siteMap.cases;
    expect(cases[0]).to.have.quailStatus('passed');
  });
});
