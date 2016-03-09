(function() {
  describe('#app', function() {
    $("body").append("<buttn id='button-popup-open'>X</button>");
    $('#button-popup-open').click(function() {
      console.log('clicked');
    });

    var sandbox;
    beforeEach(function() {
      sandbox = sinon.sandbox.create();
    });

    afterEach(function() {
      sandbox.restore();
    });

    it('should have called console log when #btn-test is clicked', function() {
        sandbox.stub(console, 'log');
        $('#button-popup-open').trigger('click');

        expect(console.log.called).to.be.true;
    });

    it('should have element with class popup with display none', function() {
      var $popup = $('.popup');
      expect($popup).to.have.length(1);
      expect($popup.css('display')).to.equal('none');
    });

    // it('should calls templates.load function', function() {
    //   sandbox.stub(templates, 'load');
    //
    //   //expect(templates.load.called).to.be.false;
    // });

    // it('should generate 1 element with class popup__button', function() {
    //   var html = '<div class="popup__button"></div>';
    //   var actual = data.load(html);
    // });
  });

}());
