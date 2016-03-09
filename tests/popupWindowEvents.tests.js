(function() {
    describe('#popup window events', function() {
        var sandbox;
        beforeEach(function() {
          sandbox = sinon.sandbox.create();
        });

        afterEach(function() {
          sandbox.restore();
        });

        it('should add display block to the popup', function() {
            sandbox.stub(popupWindowEvents, 'load');
          });

          // describe('#popup open button', function () {
          //   it('should add display block to the popup window', function() {
          //     // $("body").append("<button id='button-popup-open'></button><div id='popup></div>");
          //     // var $popup = $('#popup').hide();
          //     // var $btn = $('button-popup-open');
          //   });
          // });
        });

    }());
