var popupInputEvents = (function() {
  function load($container) {
    $container.on('focusin', '#popup-search-bar', function() {
      $(this).closest('.popup__search').addClass('popup__search__bar--focused');
      $('#popup-button-clear').show();
    });

    $container.on('focusout', '#popup-search-bar', function() {
      $(this).closest('.popup__search').removeClass('popup__search__bar--focused');
      $('#popup-button-clear').hide();
    });

    $container.on('click', '.popup__checkbox', function() {
      var classToAddOrRemove = 'product__item__content--selected',
        elementNeedingTheClass = '.product__item__content';

      if ($(this).closest(elementNeedingTheClass).hasClass(classToAddOrRemove)) {
        $(this).closest(elementNeedingTheClass).removeClass(classToAddOrRemove);
      } else {
        $(this).closest(elementNeedingTheClass).addClass(classToAddOrRemove);
      }
    });
  }
  return {
    load: load
  };
})();
