$(document).ready(function () {
  var toastCount = 0;
  var toastSpacing = 15;

  function showToast(type) {
    var toastId = 'toast-' + toastCount;
    toastCount++;

    var toastHtml = $('#' + type).clone();
    toastHtml.attr('id', toastId);
    toastHtml.css('display', 'none');

    toastHtml.appendTo('body');

    var toastHeight = toastHtml.outerHeight();

    var topPosition = calculateTopPosition();
    toastHtml.css('top', topPosition + 'px');

    toastHtml.fadeIn(300);

    setTimeout(function () {
      toastHtml.fadeOut(300, function () {
        $(this).remove();
        toastCount--;
        updateToasts();
      });
    }, 5000);
  }

  function updateToasts() {
    $('.toast:visible').each(function (index) {
      var newTopPosition = calculateTopPosition(index);
      $(this).stop(true, true).animate({ top: newTopPosition + 'px' }, 300);
    });
  }

  function calculateTopPosition(index) {
    var totalHeight = 0;
    var existingToasts = $('.toast:visible');

    if (index !== undefined) {
      existingToasts = existingToasts.slice(0, index);
    }

    existingToasts.each(function () {
      totalHeight += $(this).outerHeight() + toastSpacing;
    });

    return totalHeight + toastSpacing;
  }

  $('#show-error-toast-btn').on('click', function () {
    showToast('show-error-toast');
  });

  $('#show-success-toast-btn').on('click', function () {
    showToast('show-success-toast');
  });

  $('#show-info-toast-btn').on('click', function () {
    showToast('show-info-toast');
  });

  $(document).on('click', '.close-toast', function () {
    var toast = $(this).closest('.toast');
    toast.fadeOut(300, function () {
      $(this).remove();
      toastCount--;
      updateToasts();
    });
  });
});
