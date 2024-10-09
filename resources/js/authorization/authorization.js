$('.authorization-page__right-sidebar__show-btn').on('click', function () {
  $('.authorization-page__right-sidebar').toggleClass('right-sidebar_show');
})
$('.work-pages__list-item').on('click', function () {
  $('.work-pages__list-item').removeClass('active');
  $(this).addClass('active');
});
