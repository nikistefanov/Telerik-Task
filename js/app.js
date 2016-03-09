(function() {
  var $container = $('#wrapper'),
    $loader = $('.loading'),
    templateName = 'popup',
    addingOption = 'html';

    templates.load(templateName, $container, addingOption);
    $loader.hide();
    $(document).ready(function() {
      eventLoader.loadAllEvents($container);
    });
}());
