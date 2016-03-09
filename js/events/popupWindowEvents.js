var popupWindowEvents = (function() {
  var isDataLoaded = false;
  function load($container) {
    $container.on('click', '#button-popup-open', function() {
      var currentActivePage = $('.menu__item--active').attr('id'),
        $loader = $('.loading'),
        $popupMainContent = $('#popup-main'),
        allPages = 'all-pages',
        selectedPages = 'selected-pages',
        addingOption = 'append';

      if (!isDataLoaded) {
        $loader.hide();
        templates.load(allPages, $popupMainContent, addingOption);
        templates.load(selectedPages, $popupMainContent, addingOption);
        isDataLoaded = true;
      }

      $(this).hide();
      $('#popup').show();
      $('.' + currentActivePage + '').show();
    });

    $container.on('click', '.button-popup-close', function() {
      $('#popup').hide();
      $('#button-popup-open').show();
    });

    $container.on('click', '#popup', function(ev) {
      if (ev.target.id == 'popup') {
        $('#popup').hide();
        $('#button-popup-open').show();
      }
    });
  }
  return {
    load: load
  };
})();
