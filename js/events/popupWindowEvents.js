var popupWindowEvents = (function() {
  var isDataLoaded = false;

  function load($container) {
    $container.on('click', '#button-popup-open', function() {
      var currentActivePage = $('.menu__item--active').attr('id'),
        $loader = $('.loading'),
        $popup = $('#popup'),
        $popupMainContent = $('#popup-main'),
        allPages = 'all-pages',
        selectedPages = 'selected-pages';

      if (!isDataLoaded) {
        $loader.hide();
        template.load(allPages)
          .then(function(templateHtml) {
            $popupMainContent.append(templateHtml);
          });
        template.load(selectedPages)
          .then(function(templateHtml) {
            $popupMainContent.append(templateHtml);
          });
        isDataLoaded = true;
      }

      $(this).hide();
      $popup.show();
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
