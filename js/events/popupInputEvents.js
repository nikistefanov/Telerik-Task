var popupInputEvents = (function() {
  function load($container) {
    $container.on('focusin', '#popup-search-bar', function() {
      $(this).closest('.popup__search').addClass('popup__search__bar--focused');
    });

    $container.on('focusout', '#popup-search-bar', function() {
      $(this).closest('.popup__search').removeClass('popup__search__bar--focused');
    });

    $container.on('click', '.popup__checkbox', function() {
      var classToAddOrRemove = 'product__item__content--selected',
        closestElementNeedingTheClass = '.product__item__content';

      if ($(this).closest(closestElementNeedingTheClass).hasClass(classToAddOrRemove)) {
        $(this).closest(closestElementNeedingTheClass).removeClass(classToAddOrRemove);
      } else {
        $(this).closest(closestElementNeedingTheClass).addClass(classToAddOrRemove);
      }
    });
  }
  return {
    load: load
  };
})();
