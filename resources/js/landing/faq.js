$(document).ready(function () {
  $('.faq__accordion-content').hide();
  $('.faq__accordion:first-child .faq__accordion-content').show();
  $('.faq__accordion:first-child img').addClass('active');

  $('.faq__accordion-header').on('click', function () {
    if ($(this).next('.faq__accordion-content').is(':visible')) {
      $(this).next('.faq__accordion-content').slideUp();
      $(this).find('img').removeClass('active');
    } else {
      $('.faq__accordion-content').slideUp();
      $('.faq__accordion img').removeClass('active');

      $(this).next('.faq__accordion-content').slideDown();
      $(this).find('img').addClass('active');
    }
  });
});
