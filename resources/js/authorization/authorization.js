$('.authorization-page__right-sidebar__show-btn').on('click', function () {
  $('.authorization-page__right-sidebar').toggleClass('right-sidebar_show');
})
$('.work-pages__list-item').on('click', function () {
  $('.work-pages__list-item').removeClass('active');
  $(this).addClass('active');
});
$(document).ready(function () {
  let stars = $('.stars-box svg');

  // Hover effekti
  stars.hover(function () {
    let index = $(this).index(); // Hozirgi yulduz indexini olish
    // 1-dan hozirgi indexgacha bo'lgan yulduzlarni hover qilish
    stars.slice(0, index + 1).addClass('hover');
  }, function () {
    stars.removeClass('hover'); // Hoverdan olganda hover klasslarini olib tashlash
  });

  // Click effekti
  stars.click(function () {
    let index = $(this).index(); // Hozirgi yulduz indexini olish
    stars.removeClass('active'); // Barcha yulduzlardan active klassini olib tashlash
    // 1-dan hozirgi indexgacha bo'lgan yulduzlarni active qilish
    stars.slice(0, index + 1).addClass('active');
  });
});
