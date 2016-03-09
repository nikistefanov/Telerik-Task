(function() {
  describe('data', function() {
    it('should load data', function() {
      var dataHtml = data.load('popup');
      $('body').append(dataHtml);
      $popup = $('#popup');

      expect($popup).to.have.length(1);
    });
  });
}());
