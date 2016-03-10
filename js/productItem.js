var productItem = function(el) {
  this.el = $(el);
  this.el.on('click', '.popup__checkbox', _.bind(this._handleClick, this));
};

productItem.prototype.setResults = function(results) {
  // var templateRequest = $.get('people-detailed.tmpl');
  // templateRequest.then( _.bind(this._populate, this, results) );
  template.load('all-pages')
    .then(function(templateHtml) {
      $popupMainContent.append(templateHtml);
    });
};

productItem.prototype._handleClick = function(evt) {
  var name = $(evt.target).closest('li.result').attr('data-name');
  $(document).trigger('like', [name]);
};

productItem.prototype._populate = function(results, tmpl) {
  var html = _.template(tmpl, {
    people: results
  });
  this.el.html(html);
};
