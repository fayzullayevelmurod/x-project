
$(document).ready(function () {
  // $('.js-example-basic-single').select2();

  $('.copy-btn').on('click', function () {
    var copyText = $(this).prev('.copy-text');
    console.log(copyText);


    if (copyText.is('input')) {
      copyText = copyText.val();
    } else {
      copyText = copyText.text();
    }

    var $temp = $('<input>');
    $('body').append($temp);
    $temp.val(copyText).select();
    document.execCommand("copy");
    $temp.remove();
  });


  $('.accordion-content').hide();
  $('.accordion:first-child .accordion-content').show();
  $('.accordion:first-child img').addClass('active');

  $('.accordion-header').on('click', function () {
    if ($(this).next('.accordion-content').is(':visible')) {
      $(this).next('.accordion-content').slideUp();
      $(this).find('img').removeClass('active');
    } else {
      $('.accordion-content').slideUp();
      $('.accordion img').removeClass('active');

      $(this).next('.accordion-content').slideDown();
      $(this).find('img').addClass('active');
    }
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
  $('.authorization-page__right-sidebar__show-btn').on('click', function () {
    $('.authorization-page__right-sidebar').toggleClass('right-sidebar_show');
  })
  $('.work-pages__list-item').on('click', function () {
    $('.work-pages__list-item').removeClass('active');
    $(this).addClass('active');
  });

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

  initializeCustomSelect('.modal-select');
  initializeCustomSelect('.list-works__select');
  initializeCustomSelect('.select-number__box');

  $('.select-number__box').on('click', function () {
    $('.country-select').slideToggle();
  })

  $('.country-select').slideUp();

  $('.country-code').on('click', function () {
    var selectedCode = $(this).text();
    $('.selected-code').text(selectedCode);
    $('.country-code').removeClass('active');
  });

  $('.select-btn').on('click', function () {
    $('.select-btn').removeClass('active');
    $(this).addClass('active');
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
