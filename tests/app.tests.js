(function() {
  describe('#app', function() {
    it('expect to generate 1 element with class "popup__button"', function () {
    // var id = 'the-select';
    // document.body.innerHTML = '<select id="' + id + '" data-test="test"></select>';
    // result('#' + id);
    var $button = $('.popup__button');
    expect($dropdownList).to.have.length(1);
    // var $select = $dropdownList.find('#' + id);
    // expect($select).to.have.length(1);
    //
    // expect($select.attr('data-test')).to.equal('test');
    // expect($select.css('display')).to.equal('none');
  });
  });

}());
