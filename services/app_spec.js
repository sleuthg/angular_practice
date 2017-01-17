describe('app', function() {
  it('should test service', function() {

    // The local server has to be running to get this to work.
    browser.get('http://localhost:63342/angular_practice/services/index_notify_service.html');

    expect(element(by.id('simple')).element(by.model('message')).getAttribute('value'))
      .toEqual('test');
  });
});