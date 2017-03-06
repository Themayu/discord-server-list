$(document).ready(function () {
  var $sb = $('#sidebar');
  var $showSb = $('#main-content .show-sidebar');
  var sbWidth = $sb.width();

  var screenSizeChange = null;
  var screenSizeChangeHandler = function () {
    var screenWidthEm = ($(window).width() / parseInt($('html').css('font-size')));
    var screenHeightPx = $(window).height();
    sbWidth = $sb.width();

    var orientation = (window.innerWidth > window.innerHeight)? 'landscape':'portrait';

    if ((screenWidthEm >= 48) && (screenHeightPx >= 768) && (orientation === 'landscape')) {
      // $sb.css({right: 'auto'});
      $showSb.hide(0);

      $('#page-overlay').fadeOut(400);
    } else {
      var positionOffset = parseFloat($showSb.css('font-size').replace(/[^\d.]/g, ''));
      $showSb.show(0);

      if (sidebarHidden) {
        $showSb.css({left: (0.5 * positionOffset)});
      } else {
        $showSb.css({left: sbWidth + (0.5 * positionOffset)});

        $('#page-overlay').fadeIn(400);
      }
    }
  }

  var checkboxChangeHandler = function (e) {
    var $display = $(this).siblings('div');
    var $inner = $display.children('.fa');
    var $type = $(new String().concat('#sidebar #filters .filter.',  $(this).data('type')));

    // console.log($type);

    if (this.checked) {
      $display.animate({backgroundColor: '#7289DA', borderColor: '#7289DA'}, 100);
      $inner.animate({backgroundColor: '#7289DA'}, 100);
      $type.slideDown(100);
    } else {
      $display.animate({backgroundColor: '#B4B7BE', borderColor: '#B4B7BE'}, 100);
      $inner.animate({backgroundColor: '#FFFFFF'}, 100);
      $type.slideUp(100);
    }
  }

  var sidebarHidden = true;

  window.addEventListener('orientationchange', function () {
    sbWidth = $sb.width();
    if (sidebarHidden) {
      $sb.css({right: sbWidth});
      $showSb.css({left: 0});
    }
  })

  $('#page-overlay').click(function (e) {
    var positionOffset = 0.5 * parseFloat($showSb.css('font-size').replace(/[^\d.]/g, ''));
    var finalLocation = positionOffset;

    $sb.animate({right: 50}, 200, 'easeInCirc').animate({right: sbWidth}, 200, 'linear');
    $('.show-sidebar').animate({left: sbWidth-(50-positionOffset)}, 200, 'easeInCirc').animate({left: finalLocation}, 200, 'linear');

    $(this).fadeOut(400);

    sidebarHidden = true;
  });

  $('.show-sidebar').click(function (e) {
    var positionOffset = 0.5 * parseFloat($showSb.css('font-size').replace(/[^\d.]/g, ''));
    var finalLocation = sbWidth + positionOffset;

    $('#sidebar').animate({right: 50}, 200, 'linear').animate({right: 0}, 200, 'easeOutCirc');
    $(this).animate({left: sbWidth-(50-positionOffset)}, 200, 'linear').animate({left: finalLocation}, 200, 'easeOutCirc');

    $('#page-overlay').fadeIn(400);

    sidebarHidden = false;
  })

  $('.sidebar-inner-content .site-logo', '#sidebar').click(function (e) {
    console.log('hello');
    e.stopImmediatePropagation();
  })

  $('.filter-option').change(checkboxChangeHandler).siblings('div').click(function () {
    $(this).siblings('input').click();
  });

  $(window).resize(function () {
    window.clearTimeout(screenSizeChange);
    screenSizeChange = window.setTimeout(screenSizeChangeHandler, 250);
  }).trigger('resize');
});
