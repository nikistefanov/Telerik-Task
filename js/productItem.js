  var ProductItem = (function() {
    function ProductItem(el) {
      this.el = $(el);
      this.bindEvents();
    }

    ProductItem.prototype.setItems = function(templateHtml, $content) {
      template.load(templateHtml)
        .then(function(html) {
          $content.append(html);
        });
    };

    ProductItem.prototype.bindEvents = function() {
      this.el.on('click', '.popup__checkbox', this.handleClick);
    };

    ProductItem.prototype.handleClick = function(ev) {
      var classToAddOrRemove = 'product__item__content--selected',
        elementNeedingTheClass = '.product__item__content';
      var $target = $(ev.target).closest(elementNeedingTheClass);

      if (($target).closest(elementNeedingTheClass).hasClass(classToAddOrRemove)) {
        $target.closest(elementNeedingTheClass).removeClass(classToAddOrRemove);
      } else {
        $target.closest(elementNeedingTheClass).addClass(classToAddOrRemove);
      }
    };

    return ProductItem;
  }());
