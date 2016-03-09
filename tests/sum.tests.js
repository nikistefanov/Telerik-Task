(function() {
  describe('#sum', function() {
    it('when 1 and 2 are given, expect to return 3', function() {
      var actual = sum(1, 2);
      var expected = 3;
      expect(actual).to.be.equal(expected);
    });
  });
}());
