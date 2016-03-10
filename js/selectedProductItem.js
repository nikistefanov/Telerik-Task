var SelectedProductItem = (function() {
  function SelectedProductItem(el) {
    this.el = $(el);
  }

  SelectedProductItem.prototype.setItems = function(templateHtml, $content) {
    template.load(templateHtml)
      .then(function(html) {
        $content.append(html);
      });
  };

  return SelectedProductItem;
}());
