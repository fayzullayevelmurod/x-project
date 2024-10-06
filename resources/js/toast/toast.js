// $(document).ready(function () {
//   var toastCount = 0; // Toastlarning umumiy soni
//   var toastSpacing = 15; // Toastlar orasidagi bo'shliq

//   // Toastlarni ko'rsatish funksiyasi
//   function showToast(type) {
//     var toastId = 'toast-' + toastCount; // Toastga unikal ID berish
//     toastCount++; // Toastlarni sanab borish

//     // Toastni HTML orqali yaratish
//     var toastHtml = $('#' + type).clone();
//     toastHtml.attr('id', toastId); // Yangi toast uchun ID o'rnatish
//     toastHtml.css('display', 'none'); // Toastni avval yashirish

//     toastHtml.appendTo('body'); // Toastni bodyga qo'shish

//     // Toastni ko'rsatishdan oldin top pozitsiyasini hisoblash
//     var toastHeight = toastHtml.outerHeight(); // Toastning heightini olish

//     var topPosition = calculateTopPosition();
//     toastHtml.css('top', topPosition + 'px'); // Dinamik top pozitsiyasi

//     // Toastni ko'rsatish va progress bar animatsiyasi
//     toastHtml.fadeIn(300);

//     // Toastni 5 sekundda avtomatik yo'q qilish
//     setTimeout(function () {
//       toastHtml.fadeOut(300, function () {
//         $(this).remove(); // Toastni ekrandan olib tashlash
//         toastCount--; // Toast sonini kamaytirish
//         updateToasts(); // Boshqa toastlarni yuqoriga ko'tarish
//       });
//     }, 5000);
//   }

//   // Barcha toastlar uchun top pozitsiyasini yangilash
//   function updateToasts() {
//     $('.toast').each(function (index) {
//       var newTopPosition = calculateTopPosition(index);
//       $(this).animate({ top: newTopPosition + 'px' }, 300); // Silliq yuqoriga ko'tarish
//     });
//   }

//   // Top pozitsiyasini hisoblash
//   function calculateTopPosition(index) {
//     var totalHeight = 0;
//     var existingToasts = $('.toast:visible'); // Faqat ko'rinib turgan toastlarni olamiz

//     if (index !== undefined) {
//       existingToasts = existingToasts.slice(0, index); // Yangilanayotgan toastlar uchun slice
//     }

//     existingToasts.each(function () {
//       totalHeight += $(this).outerHeight() + toastSpacing; // Har bir toastning heightini yig'ib boramiz
//     });

//     return totalHeight + toastSpacing; // Oxirgi toastdan keyingi bo'shliqni qo'shamiz
//   }

//   // Error toastni ko'rsatish
//   $('#show-error-toast-btn').on('click', function () {
//     showToast('show-error-toast');
//   });

//   // Success toastni ko'rsatish
//   $('#show-success-toast-btn').on('click', function () {
//     showToast('show-success-toast');
//   });

//   // Info toastni ko'rsatish
//   $('#show-info-toast-btn').on('click', function () {
//     showToast('show-info-toast');
//   });

//   // Toastni qo'lda yopish
//   $(document).on('click', '.close-toast', function () {
//     var toast = $(this).closest('.toast');
//     toast.fadeOut(300, function () {
//       $(this).remove(); // Toastni ekrandan olib tashlash
//       toastCount--; // Toast sonini kamaytirish
//       updateToasts(); // Boshqa toastlarni yuqoriga ko'tarish
//     });
//   });
// });

$(document).ready(function () {
  var toastCount = 0; // Toastlarning umumiy soni
  var toastSpacing = 15; // Toastlar orasidagi bo'shliq

  // Toastlarni ko'rsatish funksiyasi
  function showToast(type) {
    var toastId = 'toast-' + toastCount; // Toastga unikal ID berish
    toastCount++; // Toastlarni sanab borish

    // Toastni HTML orqali yaratish
    var toastHtml = $('#' + type).clone();
    toastHtml.attr('id', toastId); // Yangi toast uchun ID o'rnatish
    toastHtml.css('display', 'none'); // Toastni avval yashirish

    toastHtml.appendTo('body'); // Toastni bodyga qo'shish

    // Toastni ko'rsatishdan oldin top pozitsiyasini hisoblash
    var toastHeight = toastHtml.outerHeight(); // Toastning heightini olish

    var topPosition = calculateTopPosition();
    toastHtml.css('top', topPosition + 'px'); // Dinamik top pozitsiyasi

    // Toastni ko'rsatish va progress bar animatsiyasi
    toastHtml.fadeIn(300);

    // Toastni 5 sekundda avtomatik yo'q qilish
    setTimeout(function () {
      toastHtml.fadeOut(300, function () {
        $(this).remove(); // Toastni ekrandan olib tashlash
        toastCount--; // Toast sonini kamaytirish
        updateToasts(); // Boshqa toastlarni yuqoriga ko'tarish
      });
    }, 5000);
  }

  // Barcha toastlar uchun top pozitsiyasini yangilash
  function updateToasts() {
    $('.toast:visible').each(function (index) {
      var newTopPosition = calculateTopPosition(index);
      $(this).stop(true, true).animate({ top: newTopPosition + 'px' }, 300); // Silliq yuqoriga ko'tarish
    });
  }

  // Top pozitsiyasini hisoblash
  function calculateTopPosition(index) {
    var totalHeight = 0;
    var existingToasts = $('.toast:visible'); // Faqat ko'rinib turgan toastlarni olamiz

    if (index !== undefined) {
      existingToasts = existingToasts.slice(0, index); // Yangilanayotgan toastlar uchun slice
    }

    existingToasts.each(function () {
      totalHeight += $(this).outerHeight() + toastSpacing; // Har bir toastning heightini yig'ib boramiz
    });

    return totalHeight + toastSpacing; // Oxirgi toastdan keyingi bo'shliqni qo'shamiz
  }

  // Error toastni ko'rsatish
  $('#show-error-toast-btn').on('click', function () {
    showToast('show-error-toast');
  });

  // Success toastni ko'rsatish
  $('#show-success-toast-btn').on('click', function () {
    showToast('show-success-toast');
  });

  // Info toastni ko'rsatish
  $('#show-info-toast-btn').on('click', function () {
    showToast('show-info-toast');
  });

  // Toastni qo'lda yopish
  $(document).on('click', '.close-toast', function () {
    var toast = $(this).closest('.toast');
    toast.fadeOut(300, function () {
      $(this).remove(); // Toastni ekrandan olib tashlash
      toastCount--; // Toast sonini kamaytirish
      updateToasts(); // Boshqa toastlarni yuqoriga ko'tarish
    });
  });
});
