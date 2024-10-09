$(document).ready(function () {
  function initializeCustomSelect(selectBoxSelector) {
    $(selectBoxSelector + ' .select-options').slideUp();

    $(selectBoxSelector + ' .selected-box').on('click', function () {
      $(selectBoxSelector + ' .select-options').slideToggle();
    });

    $(selectBoxSelector + ' .select-option').on('click', function () {
      var selectedOption = $(this).text();
      $(selectBoxSelector + ' .selected-box span').text(selectedOption);
      $(selectBoxSelector + ' .select-option').removeClass('active');
      $(this).addClass('active');
      $(selectBoxSelector + ' .select-options').slideUp();
    });

    $(document).on('click', function (e) {
      if (!$(e.target).closest(selectBoxSelector).length) {
        $(selectBoxSelector + ' .select-options').slideUp();
      }
    });
  }
  initializeCustomSelect('.list-works__select');
  $('.select-btn').on('click', function () {
    $('.select-btn').removeClass('active');
    $(this).addClass('active');
  });

  $('#check').on('change', function () {
    if ($(this).is(':checked')) {
      $('.send-btn').removeClass('disabled');
      $('.send-btn').prop('disabled', false);
    } else {
      $('.send-btn').addClass('disabled');
      $('.send-btn').prop('disabled', true);
    }
  });
});
