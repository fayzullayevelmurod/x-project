$(document).ready(function () {
  $('.copy-btn').on('click', function () {
    var copyText;

    if ($(this).hasClass('copy-text')) {
      copyText = $(this).text();
    } else {
      copyText = $(this).prev('.copy-text');
      copyText = copyText.is('input') ? copyText.val() : copyText.text();
    }

    var $temp = $('<input>');
    $('body').append($temp);
    $temp.val(copyText).select();
    document.execCommand("copy");
    $temp.remove();
  });
});
$(document).ready(function () {
  $('.copy-btn').on('click', function () {
    var inputValue = $(this).siblings('input').val();
    var $tempInput = $('<input>');
    $('body').append($tempInput);
    $tempInput.val(inputValue).select();
    document.execCommand("copy");
    $tempInput.remove();
  });
});
