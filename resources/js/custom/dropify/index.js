import 'dropify/dist/css/dropify.min.css';
import 'dropify/dist/js/dropify.min.js';
import './dropify.scss';

// Dropify'ni boshlash
$(document).ready(function () {
  $('.dropify').dropify();

  // Matnni o'zgartirish
  $('.dropify-wrapper .dropify-message p').text('Загрузите фото');
});

console.log('dropify');
