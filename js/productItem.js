var productItem = (function() {
  function ProductItem(el) {
    this.el = $(el);
    this._bindEvents();
  }

  // productItem.prototype.setResults = function(templateHtml) {
  //   template.load(templateHtml)
  //     .then(function(html) {
  //       $popupMainContent.append(html);
  //     });
  // };

  productItem.prototype._bindEvents = function() {
   this.el.on( 'click', '.popup__checkbox', _.bind( this._handleClick, this ) );
 };

  productItem.prototype._handleClick = function(ev) {
    var classToAddOrRemove = 'product__item__content--selected',
      elementNeedingTheClass = '.product__item__content';
    var $target = $(ev.target).closest(closestElementNeedingTheClass);

    if (($target).closest(elementNeedingTheClass).hasClass(classToAddOrRemove)) {
      $target.closest(elementNeedingTheClass).removeClass(classToAddOrRemove);
    } else {
      $target.closest(elementNeedingTheClass).addClass(classToAddOrRemove);
    }
  };

  return ProductItem;
}());
