var templates = (function() {
  function load(name, $container, addingOption) {
    $.get('templates/' + name + '.html', function(html) {
      switch (addingOption) {
        case 'html':
          $container.html(html);
          break;
        case 'append':
          $container.append(html);
          break;
        default: console.error('Can\'t load ' + name + ' template.');
      }
    });
  }

  return {
    load: load
  };
}());
