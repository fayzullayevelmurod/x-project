$(document).ready(function () {

  // Boshida barcha accordionni yopamiz va faqat birinchisini ochamiz
  $('.accordion-content').hide(); // Barcha accordionlarni yopamiz
  $('.accordion:first-child .accordion-content').show(); // Faqat birinchi accordionni ochamiz
  $('.accordion:first-child img').addClass('active'); // Birinchi accordionning arrowiga active class qo'shamiz

  // Accordion headerga click funksiyasi
  $('.accordion-header').on('click', function () {
    // Tekshirish: agar joriy accordion ochiq bo'lsa, uni yopamiz
    if ($(this).next('.accordion-content').is(':visible')) {
      $(this).next('.accordion-content').slideUp(); // Joriy accordionni yopamiz
      $(this).find('img').removeClass('active'); // Arrowdan active classni olib tashlaymiz
    } else {
      // Agar boshqa accordion ochilgan bo'lsa, hammasini yopamiz
      $('.accordion-content').slideUp(); // Barcha accordionni yopamiz
      $('.accordion img').removeClass('active'); // Arrowlardan active classni olib tashlaymiz

      // Joriy bosilgan accordionni ochamiz
      $(this).next('.accordion-content').slideDown(); // Joriy accordionni ochamiz
      $(this).find('img').addClass('active'); // Joriy accordionning arrowiga active class qo'shamiz
    }
  });



  // Checkbox holatini tekshirish
  $('#check').on('change', function () {
    if ($(this).is(':checked')) {
      // Agar checkbox belgilangan bo'lsa, disabled classini olib tashlaymiz va tugmani faollashtiramiz
      $('.send-btn').removeClass('disabled');
      $('.send-btn').prop('disabled', false); // Tugmani faollashtirish
    } else {
      // Agar checkbox belgilanmagan bo'lsa, disabled classini qo'shamiz va tugmani nofaol qilamiz
      $('.send-btn').addClass('disabled');
      $('.send-btn').prop('disabled', true); // Tugmani nofaol qilish
    }
  });
  $('.right-sidebar__show-btn').on('click', function () {
    $('.right-sidebar').toggleClass('show');
  })
  $('.work-pages__list-item').on('click', function () {
    $('.work-pages__list-item').removeClass('active');
    $(this).addClass('active');
  });

  // Dropdown select uchun universal funksiya
  function initializeCustomSelect(selectBoxSelector) {
    // Boshlang'ich holatda barcha dropdownlarni yopamiz
    $(selectBoxSelector + ' .select-options').slideUp();

    // Select dropdownni ochish va yopish
    $(selectBoxSelector + ' .selected-box').on('click', function () {
      $(selectBoxSelector + ' .select-options').slideToggle();
    });

    // Select option bosilganda qiymatni yangilash va menyuni yopish
    $(selectBoxSelector + ' .select-option').on('click', function () {
      var selectedOption = $(this).text(); // Tanlangan option textini olish
      $(selectBoxSelector + ' .selected-box span').text(selectedOption); // Tanlangan textni yangilash
      $(selectBoxSelector + ' .select-option').removeClass('active'); // Barcha optionlardan 'active' classini olib tashlash
      $(this).addClass('active'); // Tanlangan optionga 'active' class qo'shish
      $(selectBoxSelector + ' .select-options').slideUp(); // Dropdown menyuni yopish
    });

    // Dropdown tashqarisiga bosilganda menyuni yopish
    $(document).on('click', function (e) {
      if (!$(e.target).closest(selectBoxSelector).length) {
        $(selectBoxSelector + ' .select-options').slideUp();
      }
    });
  }

  // Bir nechta select-boxlarni initsializatsiya qilish
  initializeCustomSelect('.modal-select');
  initializeCustomSelect('.list-works__select');
  initializeCustomSelect('.select-number__box');

  $('.select-number__box').on('click', function () {
    $('.country-select').slideToggle();
  })

  // // Boshlang'ich holatda dropdownni yopamiz
  $('.country-select').slideUp();

  // // Country code tanlanganda yangilash
  $('.country-code').on('click', function () {
    var selectedCode = $(this).text(); // Tanlangan kodni olish
    $('.selected-code').text(selectedCode); // Tanlangan kodni yuqorisida ko'rsatish
    $('.country-code').removeClass('active'); // Hammasidan active olib tashlash
    // $(this).addClass('active'); // Faqat tanlanganga active qo'shish
    // $('.country-select').slideUp(); // Tanlanganidan so'ng dropdownni yopish
  });

  // // Sahifa tashqarisiga bosganda dropdownni yopish
  if (!$(e.target).closest('.select-number__box').length) {
    $('.country-select').slideUp(); // Dropdown menyuni tashqaridan bosilganda yopish
  }

  // Dropdown tashqarisiga bosilganda menyuni yopish
  // $(document).on('click', function (e) {
  //   if (!$(e.target).closest('.select').length) {
  //     $('.select-options').slideUp();
  //   }
  // });

  $('.select-btn').on('click', function () {
    $('.select-btn').removeClass('active'); // Hamma buttonlardan active classini olib tashlash
    $(this).addClass('active'); // Faqat bosilgan button active bo'ladi
  });
});
