$('.authorization-page__right-sidebar__show-btn').on('click', function () {
  $('.authorization-page__right-sidebar').toggleClass('right-sidebar_show');
})
$('.work-pages__list-item').on('click', function () {
  $('.work-pages__list-item').removeClass('active');
  $(this).addClass('active');
});
// $(document).ready(function () {
//   let stars = $('.stars-box svg');

//   stars.hover(function () {
//     let index = $(this).index();
//     stars.slice(0, index + 1).addClass('hover');
//   }, function () {
//     stars.removeClass('hover');
//   });

//   stars.click(function () {
//     let index = $(this).index();
//     stars.removeClass('active');
//     stars.slice(0, index + 1).addClass('active');
//   });
// });
